import { Eyebrow } from "./Eyebrow";
import { Icon } from "./Icon";
import { IconButton } from "./IconButton";
import { VendorRow, type InboxThread } from "./VendorCard";

const threads: InboxThread[] = [
  {
    name: "Hayfield House",
    cat: "Venue",
    time: "2h",
    msg: "Still available that weekend — I'll send options.",
    unread: 3,
    ai: "✦ Quoted 4,200 · Oct 12",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=200&q=80",
  },
  {
    name: "Bloom & Branch",
    cat: "Florist",
    time: "5h",
    msg: "Here are three palettes inspired by your mood board.",
    unread: 1,
    ai: "3 palettes · awaiting choice",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=200&q=80",
  },
  {
    name: "North Light Photo",
    cat: "Photo",
    time: "Yest.",
    msg: "Sending the contract shortly with payment terms.",
    unread: 0,
    ai: "Quoted 5,800 · ready to sign",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&q=80",
  },
  {
    name: "Aria Strings",
    cat: "Music",
    time: "Mon",
    msg: "Here is the demo reel from last summer.",
    unread: 0,
    img: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=200&q=80",
  },
  {
    name: "Orangery Kitchen",
    cat: "Catering",
    time: "Mon",
    msg: "Confirming your tasting for Thursday 2pm.",
    unread: 0,
    ai: "Tasting Thu 2pm",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=200&q=80",
  },
];

export function InboxScreen() {
  return (
    <div className="flex-1 overflow-hidden bg-ws-canvas font-sans">
      <div className="flex items-end justify-between px-6 pb-1 pt-3">
        <div>
          <Eyebrow>Inbox</Eyebrow>
          <div className="mt-1 font-serif text-[32px] font-bold tracking-[-0.02em] text-ws-fg">
            Conversations
          </div>
        </div>
        <IconButton>
          <Icon name="pen" size={18} color="#c4827a" />
        </IconButton>
      </div>
      <div className="px-5 pb-10 pt-4">
        {threads.map((t) => (
          <VendorRow key={t.name} thread={t} />
        ))}
      </div>
    </div>
  );
}
