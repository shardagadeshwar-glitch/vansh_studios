import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060709",
};

export const metadata: Metadata = {
  title: "VANSH STUDIOS — Beyond Ordinary Digital",
  description:
    "A premium creative technology & digital experience studio specialising in interactive 3D websites, cinematic web experiences, and brand transformation.",
  keywords: [
    "VANSH STUDIOS",
    "Creative Studio",
    "Interactive 3D Websites",
    "Digital Experiences",
    "Web Development",
    "Next.js Three.js",
  ],
  authors: [{ name: "VANSH STUDIOS" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
    >
      <body className="min-h-screen bg-[#060709] text-[#F5E6BE] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#060709]">
        {children}
      </body>
    </html>
  );
}
