"use client";

import { useState } from "react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setState("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("bad response");
      setState("done");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="px-5 pb-20 pt-10 text-center sm:px-8">
      <div className="mx-auto max-w-[560px]">
        <div
          className="font-sans font-medium text-ws-fg-warm"
          style={{ fontSize: 13, letterSpacing: "0.02em" }}
        >
          Be first to know.
        </div>

        {state !== "done" ? (
          <form
            onSubmit={onSubmit}
            className="mx-auto flex items-center gap-2 rounded-ws-lg bg-ws-surface p-2 shadow-ws-input"
            style={{
              marginTop: 18,
              border: "1px solid #EAE5DB",
              maxWidth: 480,
            }}
          >
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent px-3.5 font-sans outline-none"
              style={{ height: 44, fontSize: 15, color: "#1a1a1a" }}
            />
            <button
              type="submit"
              disabled={state === "submitting"}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-ws-lg bg-ws-rose font-sans font-bold text-white transition-transform duration-200 ease-ws-spring active:scale-[0.97] disabled:opacity-60"
              style={{ height: 44, padding: "0 18px", fontSize: 13 }}
            >
              {state === "submitting" ? "Joining…" : "Join the waitlist"}
            </button>
          </form>
        ) : (
          <div
            className="rounded-ws-lg bg-ws-rose-soft font-sans font-semibold text-ws-rose"
            style={{ marginTop: 18, padding: "18px 20px", fontSize: 14 }}
          >
            ✦ You&apos;re on the list. We&apos;ll be in touch.
          </div>
        )}
        {state === "error" && (
          <div className="mt-3 text-[13px] text-ws-destructive">
            Something went wrong. Try again?
          </div>
        )}
      </div>
    </section>
  );
}
