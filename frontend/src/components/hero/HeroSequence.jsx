import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSequence.css';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 188;

export default function HeroSequence() {
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);
  const progressBarRef = useRef(null);

  const imagesRef = useRef([]);
  const currentFrameRef = useRef(-1);
  const tweenRef = useRef(null);

  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Helper to draw a specific frame onto canvas with responsive "contain" scaling
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const img = imagesRef.current[index];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    if (displayWidth === 0 || displayHeight === 0) return;

    const targetW = Math.floor(displayWidth * dpr);
    const targetH = Math.floor(displayHeight * dpr);

    // Adjust canvas buffer dimensions if changed
    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    const cW = canvas.width;
    const cH = canvas.height;

    ctx.clearRect(0, 0, cW, cH);

    const imgW = img.naturalWidth || img.width;
    const imgH = img.naturalHeight || img.height;
    const imgAspect = imgW / imgH;
    const canvasAspect = cW / cH;

    let drawW, drawH;
    if (canvasAspect > imgAspect) {
      drawH = cH;
      drawW = cH * imgAspect;
    } else {
      drawW = cW;
      drawH = cW / imgAspect;
    }

    const drawX = (cW - drawW) / 2;
    const drawY = (cH - drawH) / 2;

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    currentFrameRef.current = index;
  }, []);

  // Preload all 188 images in background
  useEffect(() => {
    let isMounted = true;
    const loadedImages = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${paddedIndex}.png`;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);

        // Draw first frame immediately when ready
        if (i === 1 && currentFrameRef.current === -1) {
          drawFrame(0);
        }

        if (count === TOTAL_FRAMES) {
          setIsReady(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) {
          setIsReady(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, [drawFrame]);

  // Setup GSAP Tween & ScrollTrigger for buttery smooth inertia scrubbing
  useEffect(() => {
    const container = containerRef.current;
    const sticky = stickyRef.current;
    if (!container || !sticky) return;

    // Draw initial frame
    drawFrame(0);

    const ctx = gsap.context(() => {
      const frameObj = { frame: 0 };

      const tween = gsap.to(frameObj, {
        frame: TOTAL_FRAMES - 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          pin: sticky,
          pinSpacing: true,
          scrub: 0.6,
          onUpdate: (self) => {
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${self.progress * 100}%`;
            }
            const frameIndex = Math.min(
              TOTAL_FRAMES - 1,
              Math.max(0, Math.round(frameObj.frame))
            );
            if (frameIndex !== currentFrameRef.current) {
              drawFrame(frameIndex);
            }
          },
        },
      });

      tweenRef.current = tween;
    }, containerRef);

    // Handle Window Resize to keep canvas sharp & scaled
    const handleResize = () => {
      if (currentFrameRef.current >= 0) {
        drawFrame(currentFrameRef.current);
      }
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, [drawFrame]);

  const loadPercentage = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div ref={containerRef} className="hero-sequence-container">
      <div ref={stickyRef} className="hero-sequence-sticky">
        {/* Canvas background for frame rendering */}
        <canvas ref={canvasRef} className="hero-canvas" />

        {/* Ambient background glow behind canvas */}
        <div className="canvas-ambient-glow" />

        {/* HUD Top Bar: Loading status if preloading */}
        {!isReady && (
          <div className="hero-hud-header">
            <div className="hud-loading-pill">
              <span className="loading-spinner" />
              <span>PRELOADING {loadPercentage}%</span>
              <div className="loading-progress-bar" style={{ width: `${loadPercentage}%` }} />
            </div>
          </div>
        )}

        {/* Fixed Action Button at Bottom Left */}
        <Link to="/upload" className="hero-fixed-bottom-left-btn" aria-label="Ask AI / Launch Studio">
          <span className="fixed-btn-pulse" />
          <span className="fixed-btn-icon">✦</span>
          <span className="fixed-btn-text">Ask AI Studio</span>
        </Link>

        {/* Bottom scroll progress bar */}
        <div className="hero-scroll-progress-container">
          <div
            ref={progressBarRef}
            className="hero-scroll-progress-bar"
            style={{ width: '0%' }}
          />
        </div>
      </div>
    </div>
  );
}
