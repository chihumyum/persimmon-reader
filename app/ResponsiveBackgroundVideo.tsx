"use client";

import { useEffect, useRef } from "react";

const MOBILE_MEDIA =
  "(max-width: 760px) and (orientation: portrait), (max-aspect-ratio: 4 / 5)";
const HD_MEDIA = "(min-width: 1600px) and (min-aspect-ratio: 4 / 5)";

const variants = {
  desktop: {
    src: "/media/page-turn-desktop.mp4",
  },
  "desktop-hd": {
    src: "/media/page-turn-desktop-hd.mp4",
  },
  mobile: {
    src: "/media/page-turn-mobile.mp4",
  },
} as const;

const posters = {
  desktop: "/media/page-turn-poster.jpg",
  mobile: "/media/page-turn-mobile-poster.jpg",
} as const;

type VideoVariant = keyof typeof variants;

function selectedVariant(
  mobileQuery: MediaQueryList,
  hdQuery: MediaQueryList,
): VideoVariant {
  if (mobileQuery.matches) return "mobile";
  if (hdQuery.matches) return "desktop-hd";
  return "desktop";
}

export function ResponsiveBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_MEDIA);
    const hdQuery = window.matchMedia(HD_MEDIA);

    const syncVideo = () => {
      const video = videoRef.current;
      if (!video) return;

      const variant = selectedVariant(mobileQuery, hdQuery);
      const source = variants[variant];
      const absoluteSource = new URL(source.src, window.location.href).href;

      if (video.currentSrc === absoluteSource) return;

      video.src = source.src;
      video.load();
      void video.play().catch(() => {
        // Autoplay can be blocked by a visitor's browser policy.
      });
    };

    syncVideo();
    mobileQuery.addEventListener("change", syncVideo);
    hdQuery.addEventListener("change", syncVideo);

    return () => {
      mobileQuery.removeEventListener("change", syncVideo);
      hdQuery.removeEventListener("change", syncVideo);
    };
  }, []);

  return (
    <>
      <picture className="page-turn-poster">
        <source srcSet={posters.mobile} media={MOBILE_MEDIA} />
        {/* Posters should be served directly so the browser can select one before hydration. */}
        <img src={posters.desktop} alt="" />
      </picture>

      <video
        ref={videoRef}
        className="page-turn-video"
        autoPlay
        disablePictureInPicture
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={variants.mobile.src} type="video/mp4" media={MOBILE_MEDIA} />
        <source src={variants["desktop-hd"].src} type="video/mp4" media={HD_MEDIA} />
        <source src={variants.desktop.src} type="video/mp4" />
      </video>
    </>
  );
}
