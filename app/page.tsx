const downloadLinks = {
  appStore: process.env.NEXT_PUBLIC_APP_STORE_URL,
  playStore:
    process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
    "https://play.google.com/store/apps/details?id=dev.chihum.persimmon",
  apk: process.env.NEXT_PUBLIC_APK_URL,
} as const;

type DownloadLinkProps = {
  href?: string;
  label: string;
  prefix: string;
};

function DownloadLink({ href, label, prefix }: DownloadLinkProps) {
  const content = (
    <>
      <span className="download-prefix">{href ? prefix : "Coming soon"}</span>
      <span className="download-label">{label}</span>
    </>
  );

  if (!href) {
    return (
      <span className="download-link is-disabled" aria-disabled="true">
        {content}
      </span>
    );
  }

  return (
    <a
      className="download-link"
      href={href}
      rel="noreferrer"
      target="_blank"
      aria-label={`${prefix} ${label}`}
    >
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
          <DownloadLink
            href={downloadLinks.appStore}
            prefix="Download on the"
            label="App Store"
          />
          <DownloadLink
            href={downloadLinks.playStore}
            prefix="Get it on"
            label="Google Play"
          />
          <DownloadLink
            href={downloadLinks.apk}
            prefix="Direct download"
            label="Android APK"
          />
        </nav>
      </footer>
    </main>
  );
}
