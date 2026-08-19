import { useState } from "react";
import { Copy, Check, FunctionSquare } from "lucide-react";
import "./FormulaCard.css";

export default function FormulaCard({ formulaItem, subjectColor }) {
  const [copied, setCopied] = useState(false);

  if (!formulaItem) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(formulaItem.formula);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="formula-card" style={{ "--subject-accent": subjectColor || "var(--border-color-hover)" }}>
      <div className="formula-card-header">
        <div className="formula-title-group">
          <FunctionSquare size={16} className="formula-icon" />
          <h4 className="formula-name">{formulaItem.name}</h4>
        </div>
        <button
          className={`formula-copy-btn ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          title="Copy formula text"
          aria-label="Copy formula"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      <div className="formula-display-box">
        <code className="formula-math">{formulaItem.formula}</code>
      </div>

      {formulaItem.note && (
        <p className="formula-note">{formulaItem.note}</p>
      )}
    </div>
  );
}
