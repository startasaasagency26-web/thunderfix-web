import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-editorial",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thunderfix | Premium Device Repair & Restoration",
  description: "Experience the pinnacle of specialist tech repair. Luxury-minimalist smartphone and iPhone restoration service. Fast, precise, and guaranteed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        
        <footer className="border-t border-black/[0.05] py-24 lg:py-32">
          <div className="container-width flex flex-col gap-5 text-[11px] text-black/35 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <span className="font-extrabold text-black/60 uppercase tracking-[0.1em] text-[10px]">Thunderfix</span>
              <span>·</span>
              <span className="font-medium">Terms of Service</span>
              <span className="font-medium">Privacy</span>
            </div>
            <div className="flex items-center gap-4 font-medium">
              <span>© 2026 Thunderfix.my · Powered by Infinita Tech Solutions Sdn Bhd</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
