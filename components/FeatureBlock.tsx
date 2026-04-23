import { PhoneMockup, type Screen } from "./PhoneMockup";
import type { TabKey } from "./phone/TabBar";

export function FeatureBlock({
  eyebrow,
  heading,
  italicWord,
  body,
  phoneScreen,
  phoneTab,
  reverse,
}: {
  eyebrow: string;
  heading: string;
  italicWord?: string;
  body: string;
  phoneScreen: Screen;
  phoneTab?: TabKey;
  reverse?: boolean;
}) {
  // Split heading on italicWord so we can render that fragment in italic serif
  const parts = italicWord ? heading.split(italicWord) : [heading];
  const renderedHeading = italicWord ? (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {p}
          {i < parts.length - 1 && <span className="italic">{italicWord}</span>}
        </span>
      ))}
    </>
  ) : (
    heading
  );

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div
        className={`mx-auto flex max-w-shell flex-col items-center justify-center gap-12 lg:flex-row lg:gap-20 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full max-w-[560px] text-center lg:max-w-[480px] lg:flex-1 lg:text-left">
          <div
            className="font-sans font-bold uppercase text-ws-rose"
            style={{ fontSize: 11, letterSpacing: "0.24em" }}
          >
            {eyebrow}
          </div>
          <h3
            className="mt-4 font-serif font-medium tracking-[-0.02em] text-ws-fg"
            style={{
              fontSize: "clamp(30px, 3.6vw, 44px)",
              lineHeight: 1.08,
            }}
          >
            {renderedHeading}
          </h3>
          <p
            className="mx-auto mt-5 font-sans leading-[1.6] text-ws-fg-muted lg:mx-0"
            style={{ fontSize: 17, maxWidth: 440 }}
          >
            {body}
          </p>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <PhoneMockup
            screen={phoneScreen}
            activeTab={phoneTab}
            scale={0.78}
          />
        </div>
      </div>
    </section>
  );
}
