import PuzzleLayout from "../layout";

export default function RecoveryPuzzle() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <PuzzleLayout>
        <div className="text-white text-center p-10">
        <h1 className="text-3xl font-bold mb-4">Recovery</h1>
        <p className="text-gray-300 mb-6">Recovery puzzel placeholder</p>
        <p className="mt-4 text-green-400">Gefeliciteerd! Je hebt alle puzzels doorlopen.</p>
      </div>
      </PuzzleLayout>
    </div>
  );
}
