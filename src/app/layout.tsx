import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Eurowings Baggage Claims",
    template: "%s | Eurowings Baggage Claims",
  },
  description:
    "File your baggage damage claim with Eurowings. AI-powered processing with results in under 24 hours. No paperwork, no waiting.",
  keywords: [
    "Eurowings",
    "baggage claim",
    "luggage damage",
    "compensation",
    "AI claims",
    "Gepäckschaden",
    "Entschädigung",
  ],
  authors: [{ name: "Eurowings" }],
  openGraph: {
    title: "Eurowings Baggage Claims",
    description:
      "File your baggage damage claim in under 5 minutes. AI-powered processing with results in 24 hours.",
    type: "website",
    locale: "en_US",
    alternateLocale: "de_DE",
    siteName: "Eurowings Baggage Claims",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eurowings Baggage Claims",
    description:
      "File your baggage damage claim in under 5 minutes. AI-powered processing with results in 24 hours.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
