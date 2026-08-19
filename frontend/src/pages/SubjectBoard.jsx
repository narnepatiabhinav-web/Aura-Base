import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, FileText, Send, Trash2 } from "lucide-react";
import { subjects } from "../mock/mockData";
import AuraOrb from "../components/AuraOrb";
import "./SubjectBoard.css";

export default function SubjectBoard() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const subject = subjects.find((s) => s.id === subjectId);

  const [files, setFiles] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const fileInputRef = useRef(null);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, thinking]);

  const handleFiles = (e) => {
    const newFiles = Array.from(e.target.files).map((f) => ({
      id: Date.now() + Math.random(),
      name: f.name,
      size: (f.size / 1024).toFixed(0) + " KB",
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: userMsg }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, {
        id: Date.now() + 1, role: "assistant",
        text: `Based on your ${subject?.name} notes: Here is a detailed synthesis of "${userMsg}". Upload more PDFs to deepen context.`,
      }]);
      setThinking(false);
    }, 1000);
  };

  if (!subject) return <div style={{ color: "var(--text-primary)", padding: 32 }}>Subject not found.</div>;

  return (
    <div className="board-page" style={{ "--accent": subject.color }}>
      <div className="board-header">
        <button className="board-back" onClick={() => navigate("/discovery")} title="Back to discovery">
          <ArrowLeft size={18} />
        </button>
        <span className="board-icon">{subject.icon}</span>
        <h1>{subject.name}</h1>
      </div>

      <div className="board-layout">
        {/* Left: uploaded files */}
        <div className="board-panel">
          <p className="board-panel-title">Uploaded materials</p>

          <label className="upload-zone">
            <Upload size={22} />
            <span>Click to upload PDFs</span>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              multiple
              hidden
              onChange={handleFiles}
            />
          </label>

          <div className="file-list">
            {files.length === 0 && <p className="file-empty">No files yet.</p>}
            {files.map((f) => (
              <div key={f.id} className="file-item">
                <FileText size={16} />
                <span className="file-name">{f.name}</span>
                <span className="file-size">{f.size}</span>
                <button
                  className="file-remove-btn"
                  onClick={() => removeFile(f.id)}
                  title="Remove file"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: chat/text area */}
        <div className="board-panel board-chat">
          <div className="board-orb-row">
            <AuraOrb state={thinking ? "thinking" : "idle"} size={48} />
          </div>

          <div className="chat-messages">
            {messages.length === 0 && (
              <p className="file-empty">Ask something about {subject.name} once you've uploaded notes.</p>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`chat-bubble ${m.role}`}>
                {m.text}
              </div>
            ))}
            <div ref={chatBottomRef} />
          </div>

          <div className="chat-input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={`Ask about ${subject.name}...`}
            />
            <button onClick={sendMessage} title="Send message"><Send size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
