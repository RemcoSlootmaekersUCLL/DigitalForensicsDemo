const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const pty = require("node-pty");

const app = express();
app.use(express.static("public"));

const server = http.createServer(app);

const wss = new WebSocket.Server({ server, path: "/term" });

wss.on("connection", (ws) => {
    const shell = process.platform === "win32" ? "powershell.exe" : "bash";

    const p = pty.spawn(shell, [], {
        name: "xterm-color",
        cols: 80,
        rows: 24,
        cwd: process.env.HOME,
        env: process.env,
    });

    p.on("data", (data) => ws.send(data));
    ws.on("message", (msg) => p.write(msg));

    ws.on("close", () => p.kill());
});

server.listen(3001, () =>
    console.log("Local terminal server running on http://localhost:3001")
);