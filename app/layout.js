import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Artistly",
    template: "%s | Artistly",
  },
  description: "Discover, onboard, and manage top-tier artists effortlessly with Artistly.",
  keywords: [
    "Artist onboarding",
    "Artist management",
    "React forms",
    "Next.js project",
    "Talent discovery",
    "Creative platform",
    "Artistly app"
  ],
  authors: [{ name: "Vikhyat gupta", url: "https://your-portfolio-or-github.com" }],
  creator: "Vikhyat gupta",
  openGraph: {
    title: "Artistly",
    description: "An intuitive platform to discover and manage creative talent.",
    url: "https://your-deployment-url.vercel.app",
    siteName: "Artistly",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <Toaster />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
