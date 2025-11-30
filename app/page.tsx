"use client";

import { useState } from "react";

const files = [
  {
    name: "IncidentenVerslag_Sporthal_2025.pdf",
    owner: "Noah S.",
    modifiedBy: "Noah S.",
    created: "2025-02-10 09:00",
    modified: "2025-02-10 09:05",
    description:
      "Rapport over ruzie tussen Emma en Lars tijdens LO-les. Bevat aantekeningen en mogelijke gevolgen.",
    suspicious: true,
  },
  {
    name: "Screenshot_TitlePage.png",
    owner: "Lars D.",
    modifiedBy: "Lars D.",
    created: "2025-02-10 09:10",
    modified: "2025-02-10 09:11",
    description: "Schermafbeelding van de titelpagina van het verslag.",
    suspicious: false,
  },
  {
    name: "Notes_Tuesday.txt",
    owner: "Noah S.",
    modifiedBy: "Noah S.",
    created: "2025-02-09 15:10",
    modified: "2025-02-09 15:11",
    description: 'Noah noteerde: "Als hij weer begint, grijp ik in."',
    suspicious: true,
  },
];

const chatLogs: ChatLog[] = [
  {
    from: "Noah S.",
    message: "Nu zullen ze zien dat hij ook niet zo onschuldig is.",
    time: "2025-02-10 09:06",
  },
  {
    from: "Lars D.",
    message: "Ik maak enkel een screenshot van de titelpagina.",
    time: "2025-02-10 09:12",
  },
];

const hints: string[] = [
  "Eén iemand wilde zijn reputatie redden.",
  "Eén iemand wilde dat anderen de 'ware toedracht' zouden zien.",
  "Eén iemand hoopte te bewijzen dat hij niet de schuldige was.",
];

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<FileItem | null>(null);
  const [showChat, setShowChat] = useState(false);
  const [showHints, setShowHints] = useState(false);

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
          {files.map((file, i) => (
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
            {chatLogs.map((chat, i) => (
              <li
                key={i}
                style={{ borderBottom: "1px solid #eee", padding: "0.5rem 0" }}
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
            {hints.map((hint, i) => (
              <li key={i}>{hint}</li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
