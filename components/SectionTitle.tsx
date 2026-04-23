export function SectionTitle() {
  return (
    <section className="px-5 pb-10 pt-24 sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-[900px] text-center">
        <h2
          className="font-serif font-medium tracking-[-0.02em] text-ws-fg"
          style={{
            fontSize: "clamp(36px, 4.8vw, 60px)",
            lineHeight: 1.05,
          }}
        >
          Everything you need to manage{" "}
          <span className="italic">your vendors.</span>
        </h2>
      </div>
    </section>
  );
}
