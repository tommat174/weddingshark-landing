import { Eyebrow } from "./Eyebrow";
import { Icon } from "./Icon";
import { IconButton } from "./IconButton";

type Category = {
  label: string;
  vendor: string;
  status: "BOOKED" | "QUOTED" | "TASTING" | "PAID" | "DEPOSIT";
  amount: number;
  est: number;
  tint: string;
};

const total = 48000;
const spent = 17400;
const est = 32200;
const pct = Math.round((spent / total) * 100);
const estPct = Math.round((est / total) * 100);

const categories: Category[] = [
  { label: "Venue", vendor: "Hayfield House", status: "BOOKED", amount: 12000, est: 12000, tint: "#c4827a" },
  { label: "Photography", vendor: "North Light Photo", status: "QUOTED", amount: 0, est: 5800, tint: "#333132" },
  { label: "Florals", vendor: "Bloom & Branch", status: "QUOTED", amount: 0, est: 3400, tint: "#b4dbbb" },
  { label: "Catering", vendor: "Orangery Kitchen", status: "TASTING", amount: 0, est: 8200, tint: "#c4827a" },
  { label: "Music", vendor: "Aria Strings", status: "PAID", amount: 2400, est: 2800, tint: "#333132" },
  { label: "Stationery", vendor: "Paper & Press", status: "DEPOSIT", amount: 3000, est: 0, tint: "#7D7975" },
];

const fmt = (n: number) => n.toLocaleString();

function statusStyle(status: Category["status"]) {
  if (status === "PAID")
    return { color: "#2F6B3E", bg: "rgba(180,219,187,0.3)" };
  if (status === "BOOKED")
    return { color: "#c4827a", bg: "rgba(196,130,122,0.08)" };
  return { color: "#7D7975", bg: "#EFECE5" };
}

export function BudgetScreen() {
  return (
    <div className="flex-1 overflow-hidden bg-ws-canvas font-sans">
      <div className="px-6 pb-1.5 pt-3">
        <div className="flex items-end justify-between">
          <div>
            <Eyebrow>Budget</Eyebrow>
            <div className="mt-1 font-serif text-[32px] font-bold tracking-[-0.02em] text-ws-fg">
              The ledger
            </div>
          </div>
          <IconButton>
            <Icon name="plus" size={18} color="#c4827a" />
          </IconButton>
        </div>
      </div>

      {/* Total card */}
      <div
        className="mx-5 mt-3.5 rounded-ws-xl bg-ws-surface p-5 shadow-ws-card"
        style={{ border: "1px solid rgba(234,229,219,0.4)" }}
      >
        <div className="flex items-baseline justify-between">
          <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ws-fg-warm">
            Total budget
          </div>
          <div className="text-[11px] text-ws-fg-warm">Oct 12, 2026</div>
        </div>
        <div className="mt-1 font-serif text-[40px] font-bold tracking-[-0.02em] text-ws-fg">
          {fmt(total)}
          <span className="ml-1.5 text-[18px] font-medium text-ws-fg-warm">
            GBP
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="relative h-2.5 overflow-hidden bg-ws-secondary"
          style={{ borderRadius: 6, marginTop: 18 }}
        >
          <div
            className="absolute left-0 top-0 h-full"
            style={{
              width: `${estPct}%`,
              background: "rgba(196,130,122,0.25)",
              borderRadius: 6,
            }}
          />
          <div
            className="absolute left-0 top-0 h-full bg-ws-rose"
            style={{ width: `${pct}%`, borderRadius: 6 }}
          />
        </div>

        <div className="mt-3.5 flex justify-between">
          <div>
            <div className="text-[10px] font-bold tracking-[0.12em] text-ws-fg-warm">
              SPENT
            </div>
            <div className="mt-0.5 font-serif text-[18px] font-semibold text-ws-fg">
              {fmt(spent)}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-[0.12em] text-ws-rose">
              ESTIMATED
            </div>
            <div className="mt-0.5 font-serif text-[18px] font-semibold text-ws-fg">
              {fmt(est)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-bold tracking-[0.12em] text-ws-fg-warm">
              REMAINING
            </div>
            <div className="mt-0.5 font-serif text-[18px] font-semibold text-ws-fg">
              {fmt(total - est)}
            </div>
          </div>
        </div>
      </div>

      {/* By vendor */}
      <div className="mx-5 mb-1.5 mt-5 flex items-baseline justify-between">
        <Eyebrow>By Vendor</Eyebrow>
        <span className="text-[11px] text-ws-fg-warm">6 of 12</span>
      </div>

      <div className="flex flex-col gap-2.5 px-5 pb-10 pt-1.5">
        {categories.map((c) => {
          const s = statusStyle(c.status);
          return (
            <div
              key={c.label}
              className="flex items-center gap-3 rounded-ws-lg bg-ws-surface px-4 py-3.5 shadow-ws-card"
              style={{ border: "1px solid rgba(234,229,219,0.4)" }}
            >
              <div
                className="h-9 w-1.5"
                style={{ background: c.tint, borderRadius: 3 }}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-[14px] font-bold text-ws-fg">
                    {c.label}
                  </span>
                  <span
                    className="rounded-ws-xs px-1.5 py-0.5 text-[9px] font-bold tracking-[0.1em]"
                    style={{ color: s.color, background: s.bg }}
                  >
                    {c.status}
                  </span>
                </div>
                <div className="mt-0.5 text-[12px] text-ws-fg-muted">
                  {c.vendor}
                </div>
              </div>
              <div className="text-right">
                <div className="font-serif text-[16px] font-semibold text-ws-fg">
                  {c.amount > 0 ? fmt(c.amount) : fmt(c.est)}
                </div>
                <div className="mt-px text-[10px] text-ws-fg-warm">
                  {c.amount > 0 ? "paid" : "quoted"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
