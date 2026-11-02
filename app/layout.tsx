import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Carolina Beach Local Vendors & Beach Vibes 411";
const description =
  "Build a Carolina Beach day in three minutes with local vendors, beach essentials, marina access, news links, and locally inspired swag.";
const productionOrigin = "https://carolina-beach-local-411.willyd61.chatgpt.site";

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fbf7ef",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "";
  const isLocalHost = /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/i.test(host);
  const base = new URL(isLocalHost ? `http://${host}` : productionOrigin);

  return {
    metadataBase: base,
    title,
    description,
    applicationName: "Carolina Beach 411",
    category: "travel",
    keywords: ["Carolina Beach", "local vendors", "beach guide", "Carolina Beach Boardwalk", "marina", "North Carolina travel"],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: base,
      siteName: "Carolina Beach 411",
      title,
      description,
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 1024, alt: "Carolina Beach local vendors and beach vibes guide" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", base).toString()],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
