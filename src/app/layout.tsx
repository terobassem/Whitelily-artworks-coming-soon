import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WHITELILY | Coming Soon — Heritage Gypsum Craftsmanship by Lydia Malak",
  description: "WHITELILY by Lydia Malak — Heritage-inspired gypsum creations including architectural gypsum tiles, stained-glass gypsum windows, carved relief panels, gypsum mosaics, and fresco paintings. Coming Soon.",
  keywords: ["WHITELILY", "Lydia Malak", "Gypsum Art", "Traditional Arts", "Heritage Craftsmanship", "Interior Design", "Jameel House", "King's Foundation"],
  openGraph: {
    title: "WHITELILY | Coming Soon — Heritage Gypsum Craftsmanship by Lydia Malak",
    description: "Heritage-inspired gypsum creations — architectural tiles, stained-glass windows, carved relief panels, mosaics, and fresco paintings.",
    url: "https://whitelily-artworks.com",
    siteName: "WHITELILY",
    images: [
      {
        url: "/logo.png",
        width: 1000,
        height: 1000,
        alt: "WHITELILY by Lydia Malak",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-brand-teal-dark antialiased">
        {/* Main Application Content */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
