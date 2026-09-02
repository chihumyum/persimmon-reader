import { ResponsiveBackgroundVideo } from "./ResponsiveBackgroundVideo";

const downloadLinks = {
  appStore: "https://apps.apple.com/us/app/persimmon-reader/id6800041021",
  apk: process.env.NEXT_PUBLIC_APK_URL,
} as const;

const appRepositoryUrl = "https://github.com/chihumyum/Persimmon";

type StoreBadgeProps = {
  href?: string;
  image: {
    alt: string;
    height: number;
    src: string;
    width: number;
  };
  label: string;
  store: "app-store";
};

function StoreBadge({ href, image, label, store }: StoreBadgeProps) {
  const artwork = (
    // Store artwork should be served byte-for-byte rather than optimized.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt={image.alt}
      height={image.height}
      src={image.src}
      width={image.width}
    />
  );

  if (!href) {
    return (
      <span
        className={`store-badge store-badge-${store} is-disabled`}
        aria-disabled="true"
        aria-label={`${label}, coming soon`}
      >
        {artwork}
      </span>
    );
  }

  return (
    <a
      className={`store-badge store-badge-${store}`}
      href={href}
      rel="noreferrer"
      target="_blank"
      aria-label={image.alt}
    >
      {artwork}
    </a>
  );
}

function ApkBadge({ href }: { href?: string }) {
  const artwork = (
    <span className="apk-badge-artwork" aria-hidden="true">
      <span className="apk-badge-prefix">Download</span>
      <span className="apk-badge-label">Android APK</span>
    </span>
  );

  if (!href) {
    return (
      <span
        className="store-badge apk-badge is-disabled"
        aria-disabled="true"
        aria-label="Android APK, coming soon"
      >
        {artwork}
      </span>
    );
  }

  return (
    <a
      className="store-badge apk-badge"
      href={href}
      download
      aria-label="Download Android APK"
    >
      {artwork}
    </a>
  );
}

function GitHubBadge() {
  return (
    <a
      className="store-badge github-badge"
      href={appRepositoryUrl}
      rel="noreferrer"
      target="_blank"
      aria-label="View the Persimmon app source on GitHub"
    >
      <span className="github-badge-artwork" aria-hidden="true">
        {/* Use GitHub's official Mark from Primer Octicons. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/github-mark.svg" width="16" height="16" alt="" />
        <span className="github-badge-copy">
          <span className="github-badge-prefix">View on</span>
          <span className="github-badge-label">GitHub</span>
        </span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="landing">
      <div className="media" aria-hidden="true">
        <ResponsiveBackgroundVideo />
      </div>

      <div className="scrim" aria-hidden="true" />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-message">
          <h1 id="hero-title">Read</h1>
          <p>Nothing else.</p>
        </div>

        <p className="brand-name">persimmon</p>

        <nav className="download-list" aria-label="Download options">
          <StoreBadge
            href={downloadLinks.appStore}
            image={{
              alt: "Download on the App Store",
              height: 40,
              src: "/badges/download-on-the-app-store.svg",
              width: 120,
            }}
            label="App Store"
            store="app-store"
          />
          <ApkBadge href={downloadLinks.apk} />
          <GitHubBadge />
        </nav>
      </section>

      <footer className="landing-legal-links">
        <a href="/support">Support</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </footer>
    </main>
  );
}
