import { AppStoreBadge } from "./AppStoreBadge";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-20 sm:px-8 sm:pb-28 sm:pt-24">
      <div className="mx-auto max-w-shell text-center">
        <div
          className="font-sans font-bold uppercase"
          style={{
            fontSize: 11,
            letterSpacing: "0.24em",
            color: "#c4827a",
          }}
        >
          The vendor CRM for couples
        </div>
        <h1
          className="mx-auto mt-5 font-serif font-medium tracking-[-0.025em] text-ws-fg"
          style={{
            fontSize: "clamp(48px, 7vw, 92px)",
            lineHeight: 1.02,
            maxWidth: 900,
          }}
        >
          Every wedding vendor.
          <br />
          <span className="italic">One inbox.</span>
        </h1>
        <p
          className="mx-auto font-sans leading-[1.55] text-ws-fg-muted"
          style={{
            fontSize: "clamp(16px, 1.4vw, 19px)",
            marginTop: 28,
            maxWidth: 620,
          }}
        >
          Track every photographer, florist, and venue from first email to
          signed contract.
        </p>
        <div className="mt-9 inline-flex">
          <AppStoreBadge />
        </div>
      </div>

      {/* Staggered phones — desktop */}
      <div
        className="relative mx-auto mt-24 hidden lg:block"
        style={{ height: 640, maxWidth: 1200 }}
      >
        {/* Left — Inbox */}
        <div
          className="absolute"
          style={{
            left: "calc(50% - 420px)",
            top: 70,
            transform: "rotate(-6deg)",
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.08))",
          }}
        >
          <PhoneMockup screen="inbox" scale={0.72} />
        </div>
        {/* Right — Vendors */}
        <div
          className="absolute"
          style={{
            left: "calc(50% + 100px)",
            top: 70,
            transform: "rotate(6deg)",
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.08))",
          }}
        >
          <PhoneMockup screen="vendors" scale={0.72} />
        </div>
        {/* Center — Home */}
        <div
          className="absolute"
          style={{
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            zIndex: 5,
            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.12))",
          }}
        >
          <PhoneMockup screen="home" scale={0.82} />
        </div>
      </div>

      {/* Mobile — single stacked phone */}
      <div className="mt-16 flex justify-center lg:hidden">
        <div
          style={{
            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.12))",
          }}
        >
          <PhoneMockup screen="home" scale={0.72} />
        </div>
      </div>
    </section>
  );
}
