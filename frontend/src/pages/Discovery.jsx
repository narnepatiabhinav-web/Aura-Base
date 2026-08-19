import { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { subjects } from "../mock/mockData";
import "./Discovery.css";

export default function Discovery() {
  const navigate = useNavigate();
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".subject-card", {
        opacity: 0, y: 24, duration: 0.5, stagger: 0.1, ease: "power2.out",
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="discovery-page">
      <h1 className="discovery-title">Discover subjects</h1>
      <p className="discovery-sub">Pick a subject to open its board — upload notes and ask questions.</p>

      <div ref={gridRef} className="subject-grid">
        {subjects.map((s) => (
          <button
            key={s.id}
            className="subject-card"
            style={{ "--accent": s.color }}
            onClick={() => navigate(`/subjects/${s.id}`)}
          >
            <span className="subject-icon">{s.icon}</span>
            <span className="subject-name">{s.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
