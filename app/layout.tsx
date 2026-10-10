import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IRIS Living Spaces | Private Real Estate Advisory",
  description:
    "A private real-estate advisory connecting discerning clients with carefully selected opportunities across India, Dubai, London and Scotland.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
