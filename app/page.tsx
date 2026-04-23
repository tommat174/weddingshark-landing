import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureBlock } from "@/components/FeatureBlock";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-ws-canvas font-sans">
      <Nav />
      <Hero />
      <SectionTitle />

      <FeatureBlock
        eyebrow="Matching"
        heading="Find vendors without the scroll."
        italicWord="without the scroll."
        body="Describe your wedding. We match you with the right photographers, florists, and venues nearby. No endless marketplaces."
        phoneScreen="vendors"
      />

      <FeatureBlock
        eyebrow="Inbox"
        heading="Every vendor email, in one place."
        italicWord="in one place."
        body="Send from your own Gmail. Replies tracked automatically. See who's quoted and who's still thinking — all without leaving the app."
        phoneScreen="inbox"
        reverse
      />

      <FeatureBlock
        eyebrow="Pipeline"
        heading="See every vendor at a glance."
        italicWord="at a glance."
        body="Researching → Contacted → Quoted → Booked → Paid. See exactly where every vendor stands, and what's slipping through the cracks."
        phoneScreen="home"
      />

      <FeatureBlock
        eyebrow="Budget"
        heading="Quotes, contracts, payments — tracked."
        italicWord="tracked."
        body="Keep every quote, signed contract, and payment deadline in one spot. Never scramble for a photographer's deposit again."
        phoneScreen="budget"
        reverse
      />

      <ClosingCTA />
      <Waitlist />
      <Footer />
    </main>
  );
}
