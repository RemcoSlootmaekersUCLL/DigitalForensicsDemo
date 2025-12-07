"use client";

import EvidenceService from "@/services/EvidenceService";
import { useEffect, useState } from "react";

const EvidencePage = () => {
  const [files, setFiles] = useState<FileItem[] | null>(null);
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [chatLogs, setChatLogs] = useState<ChatLog[] | null>(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    setFiles(EvidenceService.getFiles());
    setChatLogs(EvidenceService.getChatLogs());
  }, []);

  return (
    <>
      <div className="m-auto w-[800px] p-2">
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

        <h2 className="mt-6">Chat Logs</h2>
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
      </div>
    </>
  );
};

export default EvidencePage;
