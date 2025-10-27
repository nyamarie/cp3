"use client";

import Counter from "@/components/Counter";

export default function Page() {
  return (
    <main className="container">
      <h1 className="title">Next.js Button Counter</h1>

      <section className="card">
        <h2 className="sectionTitle">Default Counter</h2>
        <Counter />
      </section>

      <section className="card">
        <h2 className="sectionTitle">Custom Counter (start 5, step 2)</h2>
        <Counter initialCount={5} initialStep={2} />
      </section>

      <footer className="footer">
        <p>
          Built with Next.js App Router. Use Tab/Shift+Tab to navigate, Enter/Space to
          activate buttons.
        </p>
      </footer>
    </main>
  );
}