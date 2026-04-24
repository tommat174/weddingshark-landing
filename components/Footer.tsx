import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer
      className="px-5 pb-8 pt-10 sm:px-8"
      style={{
        background: "#EEE7DF",
        borderTop: "1px solid #EAE5DB",
      }}
    >
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-6">
        <Logo size="sm" />
        <div className="flex flex-wrap items-center gap-5 font-sans text-[13px] text-ws-fg-muted">
          <Link href="/privacy" className="transition-colors duration-200">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors duration-200">
            Terms
          </Link>
          <a
            href="mailto:support@weddingshark.co"
            className="transition-colors duration-200"
          >
            support@weddingshark.co
          </a>
        </div>
      </div>
      <div className="mx-auto mt-7 max-w-shell font-sans text-[12px] text-ws-fg-warm">
        © 2026 WeddingShark
      </div>
    </footer>
  );
}
