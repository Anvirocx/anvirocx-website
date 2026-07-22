import Link from "next/link";

export default function NotFound() {
  return (
    <main className="premium-not-found">
      <div>
        <Link href="/" className="completion-logo">ANVIROCX</Link>
        <p>404 — Page not found</p>
        <h1>This page has moved or does not exist.</h1>
        <span>
          Return to the homepage or explore our complete range of business
          solutions.
        </span>

        <section>
          <Link href="/">Return home</Link>
          <Link href="/services">Explore services</Link>
        </section>
      </div>
    </main>
  );
}
