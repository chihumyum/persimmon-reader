import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Persimmon — Read. Nothing else.",
  description:
    "A beautifully simple EPUB reader with meticulously tuned page turns and free Google Drive sync.",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Persimmon — Read. Nothing else.",
    description:
      "A beautifully simple EPUB reader with meticulously tuned page turns and free Google Drive sync.",
    type: "website",
    url: "https://persimmon.cc",
    images: [
      {
        url: "https://persimmon.cc/og.png",
        width: 1200,
        height: 630,
        alt: "Persimmon — Read. Nothing else.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Persimmon — Read. Nothing else.",
    description:
      "A beautifully simple EPUB reader with meticulously tuned page turns and free Google Drive sync.",
    images: ["https://persimmon.cc/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#17120e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
