import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Search, MessageSquare, Trash2, ArrowRight } from 'lucide-react';
import { mockHistory } from '../mock/mockData';
import './HistoryPage.css';

export default function HistoryPage() {
  const navigate = useNavigate();
  const [historyItems, setHistoryItems] = useState(mockHistory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHistory = historyItems.filter(
    (item) =>
      item.query.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const deleteItem = (id) => {
    setHistoryItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="history-page">
      <div className="history-header">
        <div>
          <h1>Query History & Syntheses</h1>
          <p>Review past conversations, search results, and neural document extractions.</p>
        </div>

        <div className="history-search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search history..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="history-list">
        {filteredHistory.length === 0 ? (
          <div className="history-empty">
            <Clock size={40} />
            <p>No queries found matching your search.</p>
          </div>
        ) : (
          filteredHistory.map((item) => (
            <div key={item.id} className="history-card">
              <div className="history-card-header">
                <div className="history-meta">
                  <span className="history-subject">{item.subject}</span>
                  <span className="history-time">{item.timestamp}</span>
                </div>
                <button
                  className="history-delete-btn"
                  onClick={() => deleteItem(item.id)}
                  title="Remove entry"
                >
                  <Trash2 size={15} />
                </button>
              </div>

              <h3 className="history-query">{item.query}</h3>
              <p className="history-preview">{item.preview}</p>

              <div className="history-footer">
                <button
                  className="resume-query-btn"
                  onClick={() => navigate('/chat')}
                >
                  <span>Resume Conversation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
