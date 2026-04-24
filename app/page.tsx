import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { FeatureBlock } from "@/components/FeatureBlock";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-ws-canvas font-sans">
      <Nav />
      <Hero />
      <SectionTitle />

      <FeatureBlock
        eyebrow="Vendors"
        heading="Vendors, without the hunt."
        italicWord="without the hunt."
        body="Find local photographers, florists, and venues right in the app — or save the ones you've already discovered. WeddingShark keeps them organized — so you can compare quotes, send well-crafted emails, and never miss a follow-up."
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
        heading="Know what's next with every vendor."
        italicWord="vendor."
        body="Researching → Contacted → Quoted → Booked → Paid. See exactly where each vendor stands — and what needs your attention this week."
        phoneScreen="home"
      />

      <FeatureBlock
        eyebrow="Budget"
        heading="Every dollar, tracked."
        italicWord="tracked."
        body="Log every quote, mark deposits as paid, and never miss a payment deadline. Your budget stays accurate without the spreadsheet."
        phoneScreen="budget"
        reverse
      />

      <ClosingCTA />
      <Footer />
    </main>
  );
}
