import Image from "next/image";
import Link from "next/link";

export function Logo({
  size = "md",
  showWordmark = true,
}: {
  size?: "sm" | "md";
  showWordmark?: boolean;
}) {
  const tileSize = size === "sm" ? 34 : 44;
  const tileRadius = size === "sm" ? 10 : 12;
  const markSize = size === "sm" ? 28 : 38;
  const wordSize = size === "sm" ? 17 : 22;

  return (
    <Link
      href="/"
      aria-label="WeddingShark home"
      className="inline-flex items-center no-underline transition-opacity duration-200 ease-ws-spring hover:opacity-85"
      style={{ gap: size === "sm" ? 10 : 12 }}
    >
      <div
        className="flex items-center justify-center bg-ws-rose"
        style={{
          width: tileSize,
          height: tileSize,
          borderRadius: tileRadius,
        }}
      >
        <Image
          src="/logo-mark.png"
          alt="WeddingShark"
          width={markSize}
          height={markSize}
          className="block object-contain"
          style={{ width: markSize, height: markSize }}
          priority
        />
      </div>
      {showWordmark && (
        <span
          className="font-serif font-semibold tracking-[-0.015em] text-ws-fg"
          style={{ fontSize: wordSize }}
        >
          WeddingShark
        </span>
      )}
    </Link>
  );
}
