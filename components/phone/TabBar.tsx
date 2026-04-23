import { Icon, type IconName } from "./Icon";

type TabKey = "home" | "vendors" | "pipeline" | "inbox";

const tabs: { key: TabKey; label: string; icon: IconName }[] = [
  { key: "home", label: "Home", icon: "home" },
  { key: "vendors", label: "Vendors", icon: "search" },
  { key: "pipeline", label: "Pipeline", icon: "store" },
  { key: "inbox", label: "Inbox", icon: "msg" },
];

export function TabBar({ active }: { active: TabKey }) {
  return (
    <div
      className="flex shrink-0 justify-around bg-ws-canvas"
      style={{
        borderTop: "0.5px solid #EAE5DB",
        paddingTop: 8,
        paddingBottom: 24,
      }}
    >
      {tabs.map((t) => {
        const isActive = active === t.key;
        const color = isActive ? "#c4827a" : "#7D7975";
        return (
          <div
            key={t.key}
            className="flex flex-col items-center gap-[3px] px-[14px] py-1.5 font-sans text-[10px] font-semibold"
            style={{ color }}
          >
            <Icon name={t.icon} size={22} color={color} />
            {t.label}
          </div>
        );
      })}
    </div>
  );
}

export type { TabKey };
