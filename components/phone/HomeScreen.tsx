import { Eyebrow } from "./Eyebrow";
import { Icon } from "./Icon";
import { IconButton } from "./IconButton";

type PipelineStat = {
  label: string;
  n: number;
  color: string;
};

const pipeline: PipelineStat[] = [
  { label: "Matching", n: 4, color: "#b4dbbb" },
  { label: "Quoted", n: 7, color: "#c4827a" },
  { label: "Booked", n: 3, color: "#333132" },
  { label: "Declined", n: 2, color: "#7D7975" },
];

export function HomeScreen() {
  return (
    <div className="flex-1 overflow-hidden bg-ws-canvas font-sans">
      <div className="px-6 pb-2.5 pt-3">
        <div className="flex items-center justify-between">
          <div>
            <Eyebrow>Good Morning</Eyebrow>
            <div
              className="mt-1 font-serif text-[32px] font-bold leading-[1.1] tracking-[-0.02em] text-ws-fg"
            >
              Elena & Miles
            </div>
          </div>
          <IconButton size={44}>
            <Icon name="settings" size={20} color="#333132" />
          </IconButton>
        </div>
        <div className="mt-1.5 text-[12px] text-ws-fg-muted">
          147 days until October 12th
        </div>
      </div>

      {/* Daily Briefing */}
      <div
        className="mx-5 mt-3 rounded-ws-xl bg-ws-rose-soft p-5"
        style={{ borderLeft: "4px solid #c4827a" }}
      >
        <div className="mb-3.5 flex items-center gap-2">
          <span className="text-[16px] text-ws-rose">✦</span>
          <span className="text-[15px] font-bold text-ws-fg">
            Your Daily Briefing
          </span>
        </div>
        <div className="mb-3.5 flex flex-col gap-2.5">
          <div className="flex items-start gap-2.5">
            <div className="mt-2 h-[5px] w-[5px] rounded-sm bg-ws-rose" />
            <div className="text-[13px] leading-[1.5]" style={{ color: "rgba(26,26,26,.85)" }}>
              <b>Hayfield House</b> — quoted <b>4,200</b> — within budget.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="mt-2 h-[5px] w-[5px] rounded-sm bg-ws-rose" />
            <div className="text-[13px] leading-[1.5]" style={{ color: "rgba(26,26,26,.85)" }}>
              <b>Bloom & Branch</b> — sent 3 floral palettes for review.
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <div className="mt-2 h-[5px] w-[5px] rounded-sm bg-ws-rose" />
            <div className="text-[13px] leading-[1.5]" style={{ color: "rgba(26,26,26,.85)" }}>
              <b>2 vendors</b> —{" "}
              <b className="text-[10px] tracking-[1px] text-ws-rose">
                AWAITING RESPONSE
              </b>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="inline-flex h-9 items-center rounded-[20px] bg-ws-rose px-4 font-sans text-[12px] font-bold text-white">
            Review Inbox
          </div>
        </div>
      </div>

      {/* Pipeline Summary */}
      <div className="mx-5 mt-6">
        <div className="mb-3 flex items-baseline justify-between">
          <div>
            <Eyebrow>Pipeline</Eyebrow>
            <div className="mt-0.5 font-serif text-[22px] font-bold text-ws-fg">
              This week
            </div>
          </div>
          <span className="text-[12px] font-semibold text-ws-rose">
            View all →
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {pipeline.map((s) => (
            <div
              key={s.label}
              className="rounded-ws-lg bg-ws-surface p-3.5 shadow-ws-card"
              style={{ border: "1px solid rgba(234,229,219,0.4)" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-sm"
                  style={{ background: s.color }}
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ws-fg-warm">
                  {s.label}
                </span>
              </div>
              <div className="mt-1.5 font-serif text-[32px] font-bold text-ws-fg">
                {s.n}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shortcut */}
      <div className="mx-5 mb-10 mt-6">
        <Eyebrow className="mb-2.5">Shortcuts</Eyebrow>
        <div
          className="flex items-center gap-3 rounded-ws-lg bg-ws-surface p-3.5 shadow-ws-card"
          style={{ border: "1px solid rgba(234,229,219,0.4)" }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ws-rose-tint-8">
            <Icon name="wand" size={18} color="#c4827a" />
          </div>
          <div className="flex-1">
            <div className="text-[14px] font-bold text-ws-fg">
              Find more vendors
            </div>
            <div className="mt-0.5 text-[12px] text-ws-fg-muted">
              AI-matched to your wedding brief
            </div>
          </div>
          <Icon name="chevR" size={16} color="#7D7975" />
        </div>
      </div>
    </div>
  );
}
