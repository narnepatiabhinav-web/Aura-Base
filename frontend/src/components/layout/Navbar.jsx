import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import Sidebar from "./Sidebar";
import Logo from "../common/Logo";
import "./Navbar.css";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      <header className="topnav">
        <button className="topnav-logo-btn" onClick={toggleSidebar} title="Toggle Navigation Menu">
          <Logo size="sm" showSubtitle={true} />
        </button>

        <nav className="topnav-links">
          <NavLink to="/" className="topnav-link" end>Home</NavLink>
          <NavLink to="/discovery" className="topnav-link">Discover</NavLink>
          <NavLink to="/study" className="topnav-link">Study</NavLink>
          <NavLink to="/dashboard" className="topnav-link">Books</NavLink>
          <NavLink to="/history" className="topnav-link">History</NavLink>
        </nav>

        <div className="topnav-actions">
          {/* Theme Toggle Switch */}
          <button
            className={`theme-toggle-btn ${theme}`}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            <span className="theme-toggle-track">
              <span className="theme-icon sun-icon">
                <Sun size={14} />
              </span>
              <span className="theme-icon moon-icon">
                <Moon size={14} />
              </span>
              <span className="theme-toggle-thumb" />
            </span>
          </button>

          <NavLink to="/chat" className="topnav-cta">
            <span className="cta-sparkle">✦</span> Ask AI
          </NavLink>
        </div>
      </header>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
