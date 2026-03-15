import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eurowings Baggage Claims",
  description:
    "File your baggage damage claim with Eurowings. AI-powered processing with results in under 24 hours.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
