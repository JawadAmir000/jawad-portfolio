import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NoiseOverlay } from "@/components/visual/NoiseOverlay";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jawad Amir — Senior Software Engineer & AI Innovation Specialist",
    template: "%s · Jawad Amir",
  },
  description:
    "Editorial portfolio of Jawad Amir — engineer working at the intersection of .NET, cloud architecture, and AI agents. Selected work, writing, and a long-running build log.",
  keywords: [
    "Software Engineer",
    "AI",
    ".NET",
    "Azure",
    "AWS",
    "Microservices",
    "Cloud Architecture",
    "RAG",
    "Agents",
  ],
  authors: [{ name: "Jawad Amir" }],
  creator: "Jawad Amir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jawadamir000.github.io/jawad-portfolio",
    title: "Jawad Amir — Senior Software Engineer & AI Innovation Specialist",
    description:
      "Editorial portfolio. Engineer working at the intersection of .NET, cloud architecture, and AI agents.",
    siteName: "Jawad Amir",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawad Amir — Senior Software Engineer & AI Innovation Specialist",
    description:
      "Editorial portfolio. Engineer working at the intersection of .NET, cloud architecture, and AI agents.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased scanlines`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NoiseOverlay />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
