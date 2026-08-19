import React from 'react';
import { Link } from 'react-router-dom';
import HeroSequence from '../components/hero/HeroSequence';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-wrapper">
      {/* Scroll-triggered Image Sequence Hero */}
      <HeroSequence />

      {/* Main Content below Hero */}
      <div id="features-section" className="landing-container">
        {/* Background radial glows */}
        <div className="hero-glow gradient-glow" />
        <div className="hero-glow cyan-glow" />

        <div className="landing-content">
          <div className="badge">
            <span className="badge-dot" />
            <span>AI-Powered Document Intelligence Platform</span>
          </div>

          <section className="features-header">
            <h2 className="section-title">
              Powering the next era of <span className="text-gradient">Knowledge Management.</span>
            </h2>
            <p className="section-subtitle">
              Transform your static research papers, financial reports, and technical manuals into interactive dynamic intelligence.
            </p>
          </section>

          <section className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Neural Answers</h3>
              <p>Upload complex PDFs or technical documentation and receive context-aware, hyper-accurate answers in real time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Pinpoint Citations</h3>
              <p>Every answer links directly to specific source pages, paragraphs, and diagrams for full auditability.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Enterprise Security</h3>
              <p>Your documents and queries are encrypted end-to-end and stored in isolated sandbox environments.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Multi-Modal Synthesizer</h3>
              <p>Automatically extract tables, charts, mathematical formulas, and structural metadata from any file format.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>High-Performance Vector DB</h3>
              <p>Sub-millisecond retrieval speeds across millions of tokens with automatic semantic clustering.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Seamless Team Collaboration</h3>
              <p>Share annotated document threads, insights, and interactive knowledge graphs across your organization.</p>
            </div>
          </section>

          {/* Interactive Call to Action Banner */}
          <section className="cta-banner">
            <div className="cta-banner-content">
              <h3>Ready to transform your document workflow?</h3>
              <p>Start querying your files with high-precision AI today.</p>
              <Link to="/upload" className="cta-button">
                <span>Get Started Free</span>
                <svg
                  className="cta-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Landing;
