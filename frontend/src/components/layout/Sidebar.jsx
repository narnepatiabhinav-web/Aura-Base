import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Home, Compass, BookOpen, Clock, Mic, Headphones,
  ChevronDown, ChevronRight, X, MessageSquare, Calculator
} from "lucide-react";
import gsap from "gsap";
import Logo from "../common/Logo";
import { subjects } from "../../mock/mockData";
import "./Sidebar.css";

export default function Sidebar({ isOpen = true, onClose }) {
  const [subjectsOpen, setSubjectsOpen] = useState(true);
  const sidebarRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isOpen && onClose) {
      if (backdropRef.current) {
        gsap.fromTo(
          backdropRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.25, ease: "power2.out" }
        );
      }
      if (sidebarRef.current) {
        gsap.fromTo(
          sidebarRef.current,
          { x: "-100%" },
          { x: "0%", duration: 0.35, ease: "power3.out" }
        );
        gsap.fromTo(
          sidebarRef.current.querySelectorAll(".sidebar-link, .sidebar-heading"),
          { opacity: 0, x: -15 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.03, ease: "power2.out", delay: 0.08 }
        );
      }
    }
  }, [isOpen, onClose]);

  if (!isOpen && onClose) return null;

  return (
    <>
      {onClose && (
        <div
          ref={backdropRef}
          className="sidebar-backdrop"
          onClick={onClose}
        />
      )}
      <aside ref={sidebarRef} className={`sidebar ${onClose ? "sidebar-overlay" : ""}`}>
        {/* Top section with brand logo and close icon */}
        <div className="sidebar-top">
          <Logo size="sm" showSubtitle={true} />
          {onClose && (
            <button className="sidebar-close" onClick={onClose} aria-label="Close sidebar">
              <X size={18} />
            </button>
          )}
        </div>

        {/* Main nav */}
        <nav className="sidebar-section">
          <NavLink to="/" className="sidebar-link" end onClick={onClose}>
            <Home size={18} /> <span>Home</span>
          </NavLink>
          <NavLink to="/discovery" className="sidebar-link" onClick={onClose}>
            <Compass size={18} /> <span>Discovery</span>
          </NavLink>
          <NavLink to="/study" className="sidebar-link" onClick={onClose}>
            <Calculator size={18} /> <span>Chapter Study</span>
          </NavLink>
          <NavLink to="/dashboard" className="sidebar-link" onClick={onClose}>
            <BookOpen size={18} /> <span>Books</span>
          </NavLink>
          <NavLink to="/history" className="sidebar-link" onClick={onClose}>
            <Clock size={18} /> <span>History</span>
          </NavLink>
          <NavLink to="/chat" className="sidebar-link" onClick={onClose}>
            <MessageSquare size={18} /> <span>Ask AI</span>
          </NavLink>
        </nav>

        {/* Reading materials */}
        <div className="sidebar-section">
          <p className="sidebar-heading">Reading materials</p>
          <NavLink to="/reading" className="sidebar-link" onClick={onClose}>
            <BookOpen size={18} /> <span>Reading</span>
          </NavLink>
          <NavLink to="/voice-cast" className="sidebar-link" onClick={onClose}>
            <Mic size={18} /> <span>Voice cast</span>
          </NavLink>
          <NavLink to="/podcast" className="sidebar-link" onClick={onClose}>
            <Headphones size={18} /> <span>Podcast</span>
          </NavLink>
        </div>

        {/* Subjects (expandable) */}
        <div className="sidebar-section">
          <button className="sidebar-heading sidebar-toggle" onClick={() => setSubjectsOpen(!subjectsOpen)}>
            <span>Subjects</span>
            {subjectsOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {subjectsOpen && (
            <div className="sidebar-sublist">
              {subjects.map((s) => (
                <NavLink
                  key={s.id}
                  to={`/subjects/${s.id}`}
                  className="sidebar-link sidebar-sublink"
                  onClick={onClose}
                >
                  <span>{s.icon} {s.name}</span>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
