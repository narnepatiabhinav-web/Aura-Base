import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Landing from './pages/Landing';
import Upload from './pages/Upload';
import Discovery from './pages/Discovery';
import SubjectBoard from './pages/SubjectBoard';
import Books from './pages/Books';
import HistoryPage from './pages/HistoryPage';
import AskAIChat from './pages/AskAIChat';
import MediaHub from './pages/MediaHub';
import ChapterStudy from './pages/ChapterStudy';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container" style={{ minHeight: '100vh', width: '100%', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
          <Navbar />
          <main style={{ minWidth: 0 }}>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/upload" element={<Upload />} />
              <Route path="/discovery" element={<Discovery />} />
              <Route path="/subjects/:subjectId" element={<SubjectBoard />} />
              <Route path="/dashboard" element={<Books />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/chat" element={<AskAIChat />} />
              <Route path="/study" element={<ChapterStudy />} />
              <Route path="/reading" element={<MediaHub />} />
              <Route path="/voice-cast" element={<MediaHub />} />
              <Route path="/podcast" element={<MediaHub />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


