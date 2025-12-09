"use client";

import { useState, useEffect } from "react";
import ReactMarkDown from "react-markdown";

const Home = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/RemcoSlootmaekersUCLL/DigitalForensicsDemo/main/README.md"
    )
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div className="w-[800px] mx-auto p-2">
      <div id="readme-md">
        <ReactMarkDown>{markdownContent}</ReactMarkDown>
      </div>
    </div>
  );
};

export default Home;
