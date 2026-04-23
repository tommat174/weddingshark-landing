type IconName =
  | "home"
  | "search"
  | "store"
  | "msg"
  | "wand"
  | "plus"
  | "chevL"
  | "chevR"
  | "chevD"
  | "settings"
  | "send"
  | "paperclip"
  | "pen"
  | "x"
  | "camera"
  | "building"
  | "flower"
  | "music"
  | "utensils";

const iconPaths: Record<IconName, string> = {
  home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  search: "M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm10 18-4.3-4.3",
  store: "M2 7 6.5 2.5h11L22 7 M2 7v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7 M2 7h20",
  msg: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  wand: "m15 4-3 8 3 8 6-16-6 4z M3 12l6-4v16l-6-4z",
  plus: "M12 3v18 M3 12h18",
  chevL: "m15 18-6-6 6-6",
  chevR: "m9 18 6-6-6-6",
  chevD: "m6 9 6 6 6-6",
  settings:
    "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9c.3.6.9 1 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z",
  send: "m22 2-7 20-4-9-9-4z M22 2 11 13",
  paperclip:
    "m21.4 11.1-8.5 8.5a6 6 0 0 1-8.5-8.5l8.5-8.5a4 4 0 0 1 5.7 5.7l-8.5 8.5a2 2 0 0 1-2.8-2.8l7.8-7.8",
  pen: "M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z",
  x: "M18 6 6 18 M6 6l12 12",
  camera:
    "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  building:
    "M3 21h18 M5 21V7l8-4v18 M19 21V11l-6-4 M9 9h.01 M9 12h.01 M9 15h.01 M9 18h.01",
  flower:
    "M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12 M12 7.5V9m0 13.5a4.5 4.5 0 1 1-4.5-4.5m4.5 4.5A4.5 4.5 0 1 0 16.5 18M12 22.5V21m7.5-9a4.5 4.5 0 1 0-4.5 4.5m4.5-4.5H18m-10.5 0H6",
  music: "M9 18V5l12-2v13 M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  utensils:
    "M3 2v7c0 1.1.9 2 2 2h3V2 M7 2v20 M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7",
};

export function Icon({
  name,
  size = 20,
  color = "currentColor",
  strokeWidth = 1.75,
  className,
}: {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}) {
  const d = iconPaths[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {d.split(" M").map((part, i) => (
        <path key={i} d={(i === 0 ? "" : "M") + part} />
      ))}
    </svg>
  );
}

export type { IconName };
