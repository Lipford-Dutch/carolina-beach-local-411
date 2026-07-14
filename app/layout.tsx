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
  "Build a Carolina Beach day in three minutes with current local spots, beach essentials, and locally inspired swag.";

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fbf7ef",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "carolina-beach-local-411.sites.openai.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title,
    description,
    applicationName: "Carolina Beach 411",
    category: "travel",
    keywords: ["Carolina Beach", "local vendors", "beach guide", "Carolina Beach Boardwalk", "North Carolina travel"],
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
