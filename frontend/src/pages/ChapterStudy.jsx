import { useState, useEffect, useRef } from "react";
import { Search, Sparkles, X, ChevronDown } from "lucide-react";
import StudyMaterial from "../components/study/StudyMaterial";
import { fetchStudyMaterial, mockStudyMaterials } from "../mock/mockStudyData";
import { subjects } from "../mock/mockData";
import "./ChapterStudy.css";

export default function ChapterStudy() {
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [studyData, setStudyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter available chapters for autocomplete dropdown based on search query and subject filter
  const filteredSuggestions = mockStudyMaterials.filter((item) => {
    const matchesSubject =
      selectedSubject === "All" ||
      item.subject.toLowerCase() === selectedSubject.toLowerCase();
    const matchesQuery =
      !searchQuery.trim() ||
      item.chapter.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesSubject && matchesQuery;
  });

  const handleSearch = async (chapterToFetch = searchQuery, subjectFilter = selectedSubject) => {
    const query = chapterToFetch.trim();
    if (!query) return;

    setLoading(true);
    setShowDropdown(false);

    try {
      const result = await fetchStudyMaterial(query, subjectFilter);
      setStudyData(result);
    } catch (err) {
      console.error("Failed to load study material:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSuggestion = (chapterName, subjectName) => {
    setSearchQuery(chapterName);
    if (subjectName && selectedSubject === "All") {
      setSelectedSubject(subjectName);
    }
    handleSearch(chapterName, subjectName || selectedSubject);
  };

  const handleSelectSampleChapter = (chapterName, subjectName) => {
    setSearchQuery(chapterName);
    setSelectedSubject(subjectName);
    handleSearch(chapterName, subjectName);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setStudyData(null);
    setShowDropdown(false);
  };

  return (
    <div className="chapter-study-page">
      {/* Hero Header */}
      <div className="chapter-study-hero">
        <div className="hero-title-box">
          <span className="hero-sparkle-pill">
            <Sparkles size={14} /> AI Chapter Assistant
          </span>
          <h1 className="hero-title">Chapter Study Material</h1>
          <p className="hero-sub">
            Instant AI summaries, key analytical concepts, and dedicated formula reference cards for Maths, Physics, and Chemistry.
          </p>
        </div>

        {/* Input & Filter Controls */}
        <div className="search-filter-card">
          {/* Subject Filter Tabs */}
          <div className="subject-filter-tabs">
            <button
              className={`subject-tab ${selectedSubject === "All" ? "active" : ""}`}
              onClick={() => setSelectedSubject("All")}
            >
              All Subjects
            </button>
            {subjects.map((s) => (
              <button
                key={s.id}
                className={`subject-tab ${selectedSubject.toLowerCase() === s.name.toLowerCase() ? "active" : ""}`}
                style={{ "--tab-color": s.color }}
                onClick={() => setSelectedSubject(s.name)}
              >
                <span>{s.icon}</span> {s.name}
              </button>
            ))}
          </div>

          {/* Search Input Bar with Autocomplete Dropdown */}
          <div className="search-bar-container" ref={dropdownRef}>
            <div className="input-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                className="chapter-search-input"
                placeholder="Type or pick a chapter (e.g. Thermodynamics, Trigonometry)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
              {searchQuery && (
                <button className="clear-btn" onClick={clearSearch} title="Clear search">
                  <X size={16} />
                </button>
              )}
              <button
                className="dropdown-toggle-btn"
                onClick={() => setShowDropdown((prev) => !prev)}
                title="Show suggestions"
              >
                <ChevronDown size={18} />
              </button>
            </div>

            <button
              className="generate-btn"
              onClick={() => handleSearch()}
              disabled={!searchQuery.trim() || loading}
            >
              <Sparkles size={16} />
              <span>{loading ? "Generating..." : "Generate"}</span>
            </button>

            {/* Suggestions Dropdown */}
            {showDropdown && filteredSuggestions.length > 0 && (
              <div className="suggestions-dropdown">
                <div className="dropdown-header">Available Chapters</div>
                {filteredSuggestions.map((item) => (
                  <button
                    key={item.id}
                    className="suggestion-item"
                    onClick={() => handleSelectSuggestion(item.chapter, item.subject)}
                  >
                    <span className="suggestion-chapter">{item.chapter}</span>
                    <span className="suggestion-subject">{item.subject}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="chapter-study-body">
        <StudyMaterial
          data={studyData}
          loading={loading}
          selectedChapter={searchQuery}
          onSelectSampleChapter={handleSelectSampleChapter}
        />
      </div>
    </div>
  );
}
