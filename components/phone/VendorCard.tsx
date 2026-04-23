import { Icon } from "./Icon";

export type Vendor = {
  name: string;
  cat: string;
  tint?: string;
  activity: string;
  img: string;
};

export type InboxThread = {
  name: string;
  cat: string;
  time: string;
  msg: string;
  unread: number;
  ai?: string;
  img: string;
};

export function VendorCard({ vendor }: { vendor: Vendor }) {
  return (
    <div
      className="flex items-center gap-3 rounded-ws-lg bg-ws-surface p-3 font-sans"
      style={{ border: "1px solid rgba(234,229,219,0.4)" }}
    >
      <div
        className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden"
        style={{ borderRadius: 12, background: vendor.tint || "#c4827a" }}
      >
        <img
          src={vendor.img}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="truncate text-[14px] font-bold text-ws-fg">
          {vendor.name}
        </div>
        <div
          className="self-start rounded-ws-sm bg-ws-secondary px-2 py-[3px] text-[10px] text-ws-fg-warm"
        >
          {vendor.cat}
        </div>
        <div className="mt-0.5 text-[11px] text-ws-fg-warm">
          {vendor.activity}
        </div>
      </div>
      <Icon name="chevR" size={16} color="#7D7975" />
    </div>
  );
}

export function VendorRow({ thread }: { thread: InboxThread }) {
  return (
    <div
      className="mb-2.5 flex gap-3.5 rounded-ws-xl bg-ws-surface p-4 font-sans shadow-ws-card"
      style={{ border: "1px solid rgba(234,229,219,0.4)" }}
    >
      <div className="relative">
        <img
          src={thread.img}
          alt=""
          className="h-[52px] w-[52px] rounded-full object-cover"
        />
        {thread.unread > 0 && (
          <div
            className="absolute right-0 top-0 h-3 w-3 rounded-full bg-ws-rose"
            style={{ border: "2px solid #fff" }}
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <div
            className={`flex-1 truncate text-[15px] ${
              thread.unread > 0 ? "font-bold" : "font-semibold"
            } text-ws-fg`}
          >
            {thread.name}
          </div>
          <div className="rounded-ws-xs bg-ws-secondary px-1.5 py-0.5">
            <span className="text-[8px] font-bold tracking-[0.05em] text-ws-fg-warm">
              {thread.cat.toUpperCase()}
            </span>
          </div>
          <span className="text-[11px] text-ws-fg-warm">{thread.time}</span>
        </div>
        <div
          className={`truncate text-[13px] ${
            thread.unread > 0
              ? "font-medium text-ws-fg"
              : "font-normal text-ws-fg-muted"
          }`}
        >
          {thread.msg}
        </div>
        <div className="mt-1 flex items-center justify-between gap-2">
          {thread.ai && (
            <div className="inline-flex flex-1 items-center gap-1 truncate rounded-ws-sm bg-ws-rose-tint-8 px-2 py-1 text-[11px] font-semibold text-ws-rose">
              <span>✦</span>
              {thread.ai}
            </div>
          )}
          {thread.unread > 0 && (
            <span className="inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-[11px] bg-ws-rose px-1.5 text-[11px] font-bold text-white">
              {thread.unread}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
