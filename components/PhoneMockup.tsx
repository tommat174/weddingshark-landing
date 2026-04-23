import { PhoneFrame } from "./phone/PhoneFrame";
import { TabBar, type TabKey } from "./phone/TabBar";
import { HomeScreen } from "./phone/HomeScreen";
import { VendorsScreen } from "./phone/VendorsScreen";
import { InboxScreen } from "./phone/InboxScreen";
import { BudgetScreen } from "./phone/BudgetScreen";

export type Screen = "home" | "vendors" | "inbox" | "budget";

export function PhoneMockup({
  screen,
  activeTab,
  scale = 1,
  className,
  style,
}: {
  screen: Screen;
  activeTab?: TabKey;
  scale?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const tab: TabKey =
    activeTab ?? (screen === "budget" ? "home" : (screen as TabKey));

  let body: React.ReactNode = null;
  if (screen === "home") body = <HomeScreen />;
  else if (screen === "vendors") body = <VendorsScreen />;
  else if (screen === "inbox") body = <InboxScreen />;
  else if (screen === "budget") body = <BudgetScreen />;

  return (
    <div
      className={className}
      style={{
        width: 400 * scale,
        height: 850 * scale,
        flexShrink: 0,
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: 400,
          height: 850,
        }}
      >
        <PhoneFrame>
          <div className="flex h-full flex-col">
            {body}
            <TabBar active={tab} />
          </div>
        </PhoneFrame>
      </div>
    </div>
  );
}
