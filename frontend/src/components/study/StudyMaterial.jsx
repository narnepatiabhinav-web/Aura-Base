import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkles, BookOpen, Lightbulb, Calculator, ArrowRight } from "lucide-react";
import FormulaCard from "./FormulaCard";
import AuraOrb from "../AuraOrb";
import { subjects } from "../../mock/mockData";
import { sampleChapters } from "../../mock/mockStudyData";
import "./StudyMaterial.css";

export default function StudyMaterial({ data, loading, selectedChapter, onSelectSampleChapter }) {
  const containerRef = useRef(null);

  // Get subject accent color from subjects mock data
  const getSubjectColor = (subjectName) => {
    const s = subjects.find(
      (sub) => sub.name.toLowerCase() === (subjectName || "").toLowerCase() || sub.id === (subjectName || "").toLowerCase()
    );
    return s ? s.color : "#8B5CF6";
  };

  const getSubjectIcon = (subjectName) => {
    const s = subjects.find(
      (sub) => sub.name.toLowerCase() === (subjectName || "").toLowerCase() || sub.id === (subjectName || "").toLowerCase()
    );
    return s ? s.icon : "📚";
  };

  // GSAP Entrance Animations
  useLayoutEffect(() => {
    if (!loading && data && containerRef.current) {
      const ctx = gsap.context(() => {
        // Fade & slide in header & summary
        gsap.fromTo(
          ".study-animate-header",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
        );

        gsap.fromTo(
          ".study-animate-block",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out", delay: 0.1 }
        );

        // Stagger in formula cards
        gsap.fromTo(
          ".formula-card",
          { opacity: 0, y: 24, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.25,
          }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, [loading, data]);

  // Loading State
  if (loading) {
    return (
      <div className="study-material-container loading-state">
        <div className="loading-orb-wrapper">
          <AuraOrb state="thinking" size={64} />
        </div>
        <h3 className="loading-title">Synthesizing Chapter Material...</h3>
        <p className="loading-sub">
          Extracting key concepts, formulas, and summaries for{" "}
          <span className="highlight">{selectedChapter || "your chapter"}</span>
        </p>

        {/* Skeleton Shimmer Blocks */}
        <div className="skeleton-wrapper">
          <div className="skeleton-block skeleton-header" />
          <div className="skeleton-block skeleton-body" />
          <div className="skeleton-grid">
            <div className="skeleton-block skeleton-card" />
            <div className="skeleton-block skeleton-card" />
            <div className="skeleton-block skeleton-card" />
          </div>
        </div>
      </div>
    );
  }

  // Empty State (No chapter selected)
  if (!data) {
    return (
      <div className="study-material-container empty-state">
        <div className="empty-icon-box">
          <BookOpen size={42} className="empty-icon" />
        </div>
        <h2>Chapter Study Material Generator</h2>
        <p className="empty-description">
          Select or search for any chapter above to instantly view AI-synthesized summaries, core concepts, and important formulas.
        </p>

        <div className="sample-chips-wrapper">
          <span className="sample-chips-label">Popular Chapters to Explore:</span>
          <div className="sample-chips-grid">
            {sampleChapters.map((sc, idx) => {
              const color = getSubjectColor(sc.subject);
              return (
                <button
                  key={idx}
                  className="sample-chip-btn"
                  style={{ "--chip-color": color }}
                  onClick={() => onSelectSampleChapter && onSelectSampleChapter(sc.chapter, sc.subject)}
                >
                  <span className="chip-subject-icon">{getSubjectIcon(sc.subject)}</span>
                  <span className="chip-name">{sc.chapter}</span>
                  <ArrowRight size={14} className="chip-arrow" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const subjectColor = getSubjectColor(data.subject);

  // Main Data View
  return (
    <div className="study-material-container" ref={containerRef}>
      {/* Chapter Title & Header */}
      <div className="study-header study-animate-header">
        <div className="title-row">
          <span className="subject-badge" style={{ backgroundColor: `${subjectColor}18`, color: subjectColor, borderColor: `${subjectColor}40` }}>
            <span>{getSubjectIcon(data.subject)}</span> {data.subject}
          </span>
          <span className="ai-badge">
            <Sparkles size={13} /> AI Generated
          </span>
        </div>

        <h1 className="chapter-title">{data.chapter}</h1>
      </div>

      {/* Chapter Overview / Summary Block */}
      <div className="study-summary-card study-animate-block" style={{ "--subject-accent": subjectColor }}>
        <div className="card-header-row">
          <BookOpen size={20} className="card-header-icon" style={{ color: subjectColor }} />
          <h3>Chapter Overview</h3>
        </div>
        <p className="summary-text">{data.summary}</p>
      </div>

      {/* Key Concepts Block */}
      {data.keyConcepts && data.keyConcepts.length > 0 && (
        <div className="study-concepts-card study-animate-block">
          <div className="card-header-row">
            <Lightbulb size={20} className="card-header-icon" style={{ color: subjectColor }} />
            <h3>Key Concepts</h3>
          </div>
          <ul className="concepts-list">
            {data.keyConcepts.map((concept, index) => (
              <li key={index} className="concept-item">
                <span className="concept-bullet" style={{ backgroundColor: subjectColor }} />
                <span className="concept-text">{concept}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Important Formulas Section */}
      {data.formulas && data.formulas.length > 0 && (
        <div className="study-formulas-section study-animate-block">
          <div className="section-title-row">
            <div className="section-title-left">
              <Calculator size={22} style={{ color: subjectColor }} />
              <h2>Important Formulas</h2>
            </div>
            <span className="formulas-count-badge">
              {data.formulas.length} {data.formulas.length === 1 ? "Formula" : "Formulas"}
            </span>
          </div>

          <div className="formulas-grid">
            {data.formulas.map((item, index) => (
              <FormulaCard
                key={index}
                formulaItem={item}
                subjectColor={subjectColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
