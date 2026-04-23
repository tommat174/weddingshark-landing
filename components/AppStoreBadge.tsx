export function AppStoreBadge({ dark = true }: { dark?: boolean }) {
  const bg = dark ? "#111" : "#fff";
  const fg = dark ? "#fff" : "#111";
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 px-5 font-sans transition-transform duration-200 ease-ws-spring hover:scale-[0.99] active:scale-[0.97]"
      style={{
        height: 56,
        background: bg,
        color: fg,
        borderRadius: 14,
        border: dark ? "none" : "1px solid #EAE5DB",
      }}
      aria-label="Download on the App Store"
    >
      <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
        <path
          d="M19.3 14.9c0-3.2 2.6-4.7 2.7-4.8-1.5-2.2-3.8-2.5-4.6-2.5-2-.2-3.8 1.1-4.8 1.1-1 0-2.5-1.1-4.1-1-2.1 0-4.1 1.2-5.2 3.1-2.2 3.8-.6 9.5 1.6 12.6 1.1 1.5 2.3 3.2 4 3.1 1.6-.1 2.2-1 4.1-1 1.9 0 2.5 1 4.1 1 1.7 0 2.8-1.5 3.8-3 1.2-1.7 1.7-3.4 1.7-3.5-.1 0-3.3-1.3-3.3-5.1zM16.2 5.4c.9-1.1 1.5-2.6 1.3-4-1.3 0-2.8.9-3.7 1.9-.8 1-1.5 2.5-1.3 3.9 1.4.1 2.8-.7 3.7-1.8z"
          fill={fg}
        />
      </svg>
      <div className="flex flex-col leading-[1.1]">
        <span className="text-[10px] font-medium opacity-90">
          Download on the
        </span>
        <span className="mt-0.5 text-[20px] font-semibold tracking-[-0.01em]">
          App Store
        </span>
      </div>
    </a>
  );
}
