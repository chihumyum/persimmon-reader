const downloadLinks = {
  appStore: process.env.NEXT_PUBLIC_APP_STORE_URL,
  playStore: process.env.NEXT_PUBLIC_PLAY_STORE_URL,
  apk: process.env.NEXT_PUBLIC_APK_URL,
} as const;

type StoreBadgeProps = {
  href?: string;
  image: {
    alt: string;
    height: number;
    src: string;
    width: number;
  };
  label: string;
  store: "app-store" | "google-play";
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
        <span className="store-badge-status">Coming soon</span>
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

function ApkDownload({ href }: { href?: string }) {
  const content = (
    <>
      <span className="download-prefix">
        {href ? "Direct download" : "Coming soon"}
      </span>
      <span className="download-label">Android APK</span>
    </>
  );

  if (!href) {
    return (
      <span className="apk-download is-disabled" aria-disabled="true">
        {content}
      </span>
    );
  }

  return (
    <a className="apk-download" href={href} aria-label="Download Android APK">
      {content}
    </a>
  );
}

export default function Home() {
  return (
    <main className="landing">
      <div className="media" aria-hidden="true">
        <video
          className="page-turn-video"
          autoPlay
          disablePictureInPicture
          loop
          muted
          playsInline
          preload="metadata"
          poster="/media/page-turn-poster.jpg"
        >
          <source
            src="/media/page-turn-mobile.webm"
            type="video/webm"
            media="(max-width: 720px)"
          />
          <source
            src="/media/page-turn-mobile.mp4"
            type="video/mp4"
            media="(max-width: 720px)"
          />
          <source src="/media/page-turn.webm" type="video/webm" />
          <source src="/media/page-turn.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="scrim" aria-hidden="true" />

      <header className="topbar">
        <span className="wordmark">Persimmon</span>
        <span className="product-kind">EPUB reader</span>
      </header>

      <section className="hero-copy" aria-labelledby="hero-title">
        <h1 id="hero-title">Pages that move with you.</h1>
      </section>

      <footer className="download-area" aria-label="Download Persimmon">
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
          <StoreBadge
            href={downloadLinks.playStore}
            image={{
              alt: "Get it on Google Play",
              height: 250,
              src: "/badges/get-it-on-google-play.png",
              width: 646,
            }}
            label="Google Play"
            store="google-play"
          />
          <ApkDownload href={downloadLinks.apk} />
        </nav>
      </footer>
    </main>
  );
}
