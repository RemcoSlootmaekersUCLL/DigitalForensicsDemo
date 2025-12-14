"use client";

type Connection = {
  id: number;
  direction: "INBOUND" | "OUTBOUND";
  from: string;
  to: string;
  protocol: string;
  correct: "ALLOW" | "BLOCK";
};

export default function ConnectionRow({
  connection,
  selected,
  onSelect,
  disabled = false,
}: {
  connection: Connection;
  selected: "ALLOW" | "BLOCK" | null;
  onSelect: (choice: "ALLOW" | "BLOCK") => void;
  disabled?: boolean;
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl w-80 shadow-lg flex flex-col gap-2">
      <div>
        <span className="font-semibold">{connection.direction}</span> | {connection.from} → {connection.to}
      </div>
      <div>Protocol: {connection.protocol}</div>
      <div className="flex gap-4 mt-2">
        <button
          onClick={() => onSelect("ALLOW")}
          className={`flex-1 py-1 rounded-md font-semibold transition ${
            selected === "ALLOW" ? "bg-green-500 text-white" : "bg-gray-700 hover:bg-green-600"
          }`}
          disabled={disabled}
        >
          ALLOW
        </button>
        <button
          onClick={() => onSelect("BLOCK")}
          className={`flex-1 py-1 rounded-md font-semibold transition ${
            selected === "BLOCK" ? "bg-red-500 text-white" : "bg-gray-700 hover:bg-red-600"
          }`}
          disabled={disabled}
        >
          BLOCK
        </button>
      </div>
    </div>
  );
}
