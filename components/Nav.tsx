import { Logo } from "./Logo";

export function Nav() {
  return (
    <div
      className="sticky top-0 z-50"
      style={{
        background: "rgba(245,240,236,0.85)",
        backdropFilter: "blur(12px) saturate(1.1)",
        WebkitBackdropFilter: "blur(12px) saturate(1.1)",
        borderBottom: "1px solid rgba(234,229,219,0.4)",
      }}
    >
      <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-4 sm:px-8 sm:py-[18px]">
        <Logo size="md" />
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-ws-lg bg-ws-rose font-sans font-bold tracking-[0.01em] text-white shadow-ws-primary transition-transform duration-200 ease-ws-spring hover:scale-[0.97] hover:!text-white active:scale-[0.96]"
          style={{ height: 40, padding: "0 18px", fontSize: 13 }}
        >
          Download
        </a>
      </div>
    </div>
  );
}
