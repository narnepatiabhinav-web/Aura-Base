import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Sparkles, FileText } from 'lucide-react';
import { mockBooks } from '../mock/mockData';
import './Books.css';

export default function Books() {
  const navigate = useNavigate();

  return (
    <div className="books-page">
      <div className="books-header">
        <div>
          <h1>Books & Digital Manuals</h1>
          <p>Access indexed textbooks, reference manuals, and interactive literature.</p>
        </div>
        <button className="upload-book-btn" onClick={() => navigate('/upload')}>
          <BookOpen size={16} />
          <span>Add New Book</span>
        </button>
      </div>

      <div className="books-grid">
        {mockBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-cover" style={{ background: book.coverColor }}>
              <span className="book-subject-badge">{book.subject}</span>
              <BookOpen size={36} className="book-cover-icon" />
              <div className="book-cover-text">
                <span className="book-cover-title">{book.title}</span>
                <span className="book-cover-author">{book.author}</span>
              </div>
            </div>
            
            <div className="book-info">
              <h3>{book.title}</h3>
              <p className="book-author">By {book.author} • {book.pages} Pages</p>
              <p className="book-summary">{book.summary}</p>
              
              <div className="book-actions">
                <button
                  className="query-book-btn"
                  onClick={() => navigate(`/subjects/${book.subject.toLowerCase()}`)}
                >
                  <Sparkles size={14} />
                  <span>Query with AI</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
