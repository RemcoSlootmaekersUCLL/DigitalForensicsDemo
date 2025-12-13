import PuzzleWrapper from "@/components/PuzzleWrapper";

export default function PuzzleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PuzzleWrapper>{children}</PuzzleWrapper>;
}
