export function IconButton({
  children,
  size = 44,
  fill = "surface",
  className = "",
}: {
  children: React.ReactNode;
  size?: number;
  fill?: "surface" | "rose" | "tinted";
  className?: string;
}) {
  const bg =
    fill === "surface"
      ? "bg-ws-surface border border-ws-border"
      : fill === "rose"
      ? "bg-ws-rose"
      : "bg-ws-rose-tint-8";
  return (
    <div
      className={`inline-flex items-center justify-center ${bg} ${className}`}
      style={{ width: size, height: size, borderRadius: size / 2 }}
    >
      {children}
    </div>
  );
}
