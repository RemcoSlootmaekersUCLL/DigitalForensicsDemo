"use client";

export default function FirewallHints() {
  return (
    <div className="bg-gray-900 p-4 rounded-xl w-64 shadow-inner border border-gray-700">
      <h3 className="text-lg mb-3 font-semibold text-yellow-300">🔥 Firewall regels</h3>
      <ul className="text-sm text-gray-300 space-y-2">
        <li>🔹 OUTBOUND mag altijd door</li>
        <li>🔹 INBOUND poorten toegestaan: 80, 443, 587, 993</li>
        <li>🔹 Alles wat niet in deze lijst staat moet worden geblokkeerd</li>
      </ul>
    </div>
  );
}
