import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Upload as UploadIcon, FileText, CheckCircle2, Trash2, ArrowLeft, Sparkles, BookOpen } from 'lucide-react';
import './Upload.css';

const Upload = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const processFiles = (newFileList) => {
    const validFiles = Array.from(newFileList).map((f) => ({
      id: Date.now() + Math.random(),
      name: f.name,
      size: (f.size / 1024).toFixed(1) + ' KB',
      type: f.name.split('.').pop().toUpperCase(),
    }));

    if (validFiles.length > 0) {
      setUploading(true);
      setProgress(15);
      
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setUploading(false);
            return 100;
          }
          return prev + 25;
        });
      }, 200);

      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processFiles(e.target.files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const handleSelectFilesClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="upload-container">
      <nav className="nav-header">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> <span>Back to Home</span>
        </Link>
        <span className="brand">AURA BASE</span>
      </nav>

      <main className="upload-content">
        <div className="upload-header">
          <h1>Upload Your Documents</h1>
          <p>Drop PDFs, Research Papers, Markdown, or Text files to power your AI Knowledge Engine.</p>
        </div>

        <div
          className={`dropzone-card ${isDragging ? 'dragging' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleSelectFilesClick}
        >
          <div className="dropzone-icon">
            <UploadIcon size={44} className="icon-pulse" />
          </div>
          <h3>Drag & Drop your files here</h3>
          <p>or click anywhere in this box to browse</p>
          <input
            ref={fileInputRef}
            type="file"
            className="file-input"
            accept=".pdf,.doc,.docx,.txt,.md"
            multiple
            onChange={handleFileInputChange}
          />
          <button
            type="button"
            className="upload-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleSelectFilesClick();
            }}
          >
            Browse Files
          </button>
        </div>

        {uploading && (
          <div className="upload-progress-container">
            <div className="progress-bar-track">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
            <span className="progress-text">Indexing and embedding files... {progress}%</span>
          </div>
        )}

        {files.length > 0 && (
          <div className="uploaded-files-section">
            <div className="section-title-row">
              <h3>Uploaded Documents ({files.length})</h3>
              <button className="clear-btn" onClick={() => setFiles([])}>Clear All</button>
            </div>
            
            <div className="files-grid">
              {files.map((file) => (
                <div key={file.id} className="file-card">
                  <div className="file-icon-box">
                    <FileText size={20} />
                  </div>
                  <div className="file-details">
                    <span className="file-name" title={file.name}>{file.name}</span>
                    <span className="file-meta">{file.type} • {file.size}</span>
                  </div>
                  <div className="file-actions">
                    <CheckCircle2 size={18} className="success-icon" />
                    <button
                      className="remove-file-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(file.id);
                      }}
                      title="Remove file"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="upload-actions-row">
              <button
                className="action-primary-btn"
                onClick={() => navigate('/chat')}
              >
                <Sparkles size={18} />
                <span>Ask AI About These Files</span>
              </button>
              <button
                className="action-secondary-btn"
                onClick={() => navigate('/discovery')}
              >
                <BookOpen size={18} />
                <span>Assign to Subject Board</span>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Upload;
