export function Eyebrow({
  children,
  className = "",
  tone = "rose",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "rose" | "muted";
}) {
  const color = tone === "rose" ? "text-ws-rose" : "text-ws-fg-muted";
  return (
    <div
      className={`font-sans text-[10px] font-bold uppercase tracking-[0.2em] ${color} ${className}`}
    >
      {children}
    </div>
  );
}
