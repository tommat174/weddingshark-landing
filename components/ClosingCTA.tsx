import { AppStoreBadge } from "./AppStoreBadge";

export function ClosingCTA() {
  return (
    <section className="px-5 pb-28 pt-28 text-center sm:px-8 sm:pb-32 sm:pt-36">
      <div className="mx-auto max-w-[900px]">
        <h2
          className="font-serif font-medium tracking-[-0.025em] text-ws-fg"
          style={{
            fontSize: "clamp(44px, 5.6vw, 72px)",
            lineHeight: 1.03,
          }}
        >
          Every wedding vendor.
          <br />
          <span className="italic">One inbox.</span>
        </h2>
        <p
          className="mt-6 font-sans leading-[1.55] text-ws-fg-muted"
          style={{ fontSize: 18 }}
        >
          Start managing your vendors in minutes.
        </p>
        <div className="mt-9 inline-flex">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
}
