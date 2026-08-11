import type { ReactNode } from "react";
import Link from "next/link";

type LegalShellProps = {
  children: ReactNode;
  lastUpdated: string;
  subtitle: string;
  title: string;
};

export function LegalShell({
  children,
  lastUpdated,
  subtitle,
  title,
}: LegalShellProps) {
  return (
    <main className="legal-page">
      <header className="legal-topbar">
        <Link className="legal-wordmark" href="/" aria-label="Persimmon home">
          persimmon
        </Link>
        <nav className="legal-nav" aria-label="Information pages">
          <a href="/support">Support</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
      </header>

      <article className="legal-shell">
        <header className="legal-heading">
          <p className="legal-kicker">Persimmon</p>
          <h1>{title}</h1>
          <p className="legal-subtitle">{subtitle}</p>
          <p className="legal-updated">Last updated · {lastUpdated}</p>
        </header>

        {children}

        <footer className="legal-footer">
          <a href="mailto:support@persimmon.cc">support@persimmon.cc</a>
          <Link href="/">Back to Persimmon</Link>
        </footer>
      </article>
    </main>
  );
}
