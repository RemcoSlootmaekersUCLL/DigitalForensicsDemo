"use client";

import EvidenceService from "@/services/EvidenceService";
import HintsService from "@/services/HintsService";
import { useEffect, useState } from "react";

export default function Home() {
  const [hints, setHints] = useState<String[] | null>(null);
  const [files, setFiles] = useState<FileItem[] | null>(null);
  const [chatLogs, setChatLogs] = useState<ChatLog[] | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    setHints(HintsService.getHints());
    setFiles(EvidenceService.getFiles());
    setChatLogs(EvidenceService.getChatLogs());
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "2rem",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <h1>Digital Forensics Demo</h1>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Bestanden</h2>
        <ul>
          {files &&
            files?.length > 0 &&
            files?.map((file, i) => (
              <li key={i}>
                <button
                  onClick={() => setSelectedFile(file)}
                  style={{
                    cursor: "pointer",
                    padding: "0.3rem 0.5rem",
                    margin: "0.2rem 0",
                    borderRadius: "4px",
                    border: "1px solid #ccc",
                  }}
                >
                  {file.name}
                </button>
              </li>
            ))}
        </ul>

        {selectedFile && (
          <div
            style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginTop: "1rem",
              borderRadius: "6px",
              backgroundColor: "#5f5f5f",
            }}
          >
            <h3>{selectedFile.name}</h3>
            <p>
              <strong>Owner:</strong> {selectedFile.owner}
            </p>
            <p>
              <strong>Modified by:</strong> {selectedFile.modifiedBy}
            </p>
            <p>
              <strong>Created:</strong> {selectedFile.created}
            </p>
            <p>
              <strong>Modified:</strong> {selectedFile.modified}
            </p>
            <p>
              <strong>Description:</strong> {selectedFile.description}
            </p>
            {selectedFile.suspicious && (
              <p style={{ color: "red" }}>⚠ Suspicious file</p>
            )}
          </div>
        )}
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Chat Logs</h2>
        <button
          onClick={() => setShowChat(!showChat)}
          style={{ marginBottom: "1rem", padding: "0.3rem 0.5rem" }}
        >
          {showChat ? "Verberg chats" : "Bekijk chats"}
        </button>
        {showChat && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {chatLogs &&
              chatLogs.length > 0 &&
              chatLogs.map((chat, i) => (
                <li
                  key={i}
                  style={{
                    borderBottom: "1px solid #eee",
                    padding: "0.5rem 0",
                  }}
                >
                  <strong>{chat.from}</strong> ({chat.time}): {chat.message}
                </li>
              ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Hints</h2>
        <button
          onClick={() => setShowHints(!showHints)}
          style={{ marginBottom: "1rem", padding: "0.3rem 0.5rem" }}
        >
          {showHints ? "Verberg hints" : "Bekijk hints"}
        </button>
        {showHints && (
          <ul style={{ marginTop: "1rem" }}>
            {hints &&
              hints.length > 0 &&
              hints.map((hint, i) => <li key={i}>{hint}</li>)}
          </ul>
        )}
      </section>
    </div>
  );
}
