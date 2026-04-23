export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative bg-[#111] shadow-ws-phone"
      style={{ width: 400, height: 850, borderRadius: 54, padding: 12 }}
    >
      <div
        className="relative flex h-full w-full flex-col overflow-hidden bg-ws-canvas"
        style={{ borderRadius: 44 }}
      >
        {/* Notch */}
        <div
          className="absolute z-50 bg-[#111]"
          style={{
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 118,
            height: 30,
            borderRadius: 18,
          }}
        />
        {/* Status bar */}
        <div className="flex h-12 shrink-0 items-center justify-between px-9 pl-9 font-sans text-[14px] font-semibold text-ws-fg">
          <span>9:41</span>
          <span className="flex items-center gap-1.5">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <rect x="0" y="3" width="3" height="4" rx="1" fill="#1a1a1a" />
              <rect x="4" y="2" width="3" height="6" rx="1" fill="#1a1a1a" />
              <rect x="8" y="1" width="3" height="8" rx="1" fill="#1a1a1a" />
              <rect x="12" y="0" width="3" height="10" rx="1" fill="#1a1a1a" />
            </svg>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
              <rect
                x="0.5"
                y="0.5"
                width="18"
                height="10"
                rx="2.5"
                stroke="#1a1a1a"
              />
              <rect x="2" y="2" width="14" height="7" rx="1" fill="#1a1a1a" />
              <rect
                x="19.5"
                y="3"
                width="1.5"
                height="5"
                rx="0.5"
                fill="#1a1a1a"
              />
            </svg>
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
