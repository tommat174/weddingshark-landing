import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-ws-canvas font-sans">
      <Nav />
      <article className="mx-auto max-w-[720px] px-5 py-14 sm:px-8 sm:py-20">
        <div className="legal-prose">{children}</div>
      </article>
      <Footer />
    </main>
  );
}
