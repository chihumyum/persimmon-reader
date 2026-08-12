"use client";

import type { AnchorHTMLAttributes, PointerEvent } from "react";

type SpotlightBadgeLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

function updateSpotlight(event: PointerEvent<HTMLAnchorElement>) {
  if (event.pointerType === "touch") return;

  const badge = event.currentTarget;
  const bounds = badge.getBoundingClientRect();

  badge.style.setProperty(
    "--badge-highlight-x",
    `${event.clientX - bounds.left}px`,
  );
  badge.style.setProperty(
    "--badge-highlight-y",
    `${event.clientY - bounds.top}px`,
  );
}

export function SpotlightBadgeLink(props: SpotlightBadgeLinkProps) {
  return (
    <a
      {...props}
      onPointerEnter={updateSpotlight}
      onPointerMove={updateSpotlight}
    />
  );
}
