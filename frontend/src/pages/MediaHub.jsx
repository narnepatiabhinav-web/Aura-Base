import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Mic, Headphones, Play, Clock, Users, ArrowRight } from 'lucide-react';
import { mockMedia } from '../mock/mockData';
import './MediaHub.css';

export default function MediaHub() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  let activeTab = 'reading';
  if (path.includes('voice-cast')) activeTab = 'voiceCast';
  if (path.includes('podcast')) activeTab = 'podcast';

  const items = mockMedia[activeTab] || mockMedia.reading;

  const tabTitles = {
    reading: { title: 'Reading Materials & Articles', icon: <BookOpen size={24} /> },
    voiceCast: { title: 'AI Voice Cast Summaries', icon: <Mic size={24} /> },
    podcast: { title: 'Aura Knowledge Podcasts', icon: <Headphones size={24} /> },
  };

  const currentTabInfo = tabTitles[activeTab];

  return (
    <div className="media-hub-page">
      <div className="media-header">
        <div className="tab-title-group">
          {currentTabInfo.icon}
          <h1>{currentTabInfo.title}</h1>
        </div>
        
        <div className="tab-pills">
          <button
            className={`tab-pill ${activeTab === 'reading' ? 'active' : ''}`}
            onClick={() => navigate('/reading')}
          >
            Reading
          </button>
          <button
            className={`tab-pill ${activeTab === 'voiceCast' ? 'active' : ''}`}
            onClick={() => navigate('/voice-cast')}
          >
            Voice Cast
          </button>
          <button
            className={`tab-pill ${activeTab === 'podcast' ? 'active' : ''}`}
            onClick={() => navigate('/podcast')}
          >
            Podcasts
          </button>
        </div>
      </div>

      <div className="media-grid">
        {items.map((item) => (
          <div key={item.id} className="media-card">
            <div className="media-card-icon-box">
              {activeTab === 'reading' && <BookOpen size={28} />}
              {activeTab === 'voiceCast' && <Mic size={28} />}
              {activeTab === 'podcast' && <Headphones size={28} />}
            </div>

            <div className="media-card-content">
              <h3>{item.title}</h3>
              {item.author && <p className="media-meta">Author: {item.author}</p>}
              {item.host && <p className="media-meta">Host: {item.host}</p>}
              {item.listeners && <p className="media-meta"><Users size={14} /> {item.listeners} Listeners</p>}
              
              <div className="media-card-footer">
                <span className="duration-pill">
                  <Clock size={12} /> {item.duration}
                </span>

                <button className="play-btn">
                  <Play size={14} fill="currentColor" />
                  <span>{activeTab === 'reading' ? 'Read' : 'Listen'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
