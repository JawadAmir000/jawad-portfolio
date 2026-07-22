import type { Metadata } from "next";
import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jawad Amir — Senior Software Engineer & AI Innovation Specialist",
    template: "%s · Jawad Amir",
  },
  description:
    "Jawad Amir — senior software engineer building production AI agents and cloud platforms. Six years across fintech, healthcare, and agentic analytics. Selected work, writing, and ways to get in touch.",
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
      "Senior software engineer building production AI agents and cloud platforms — fintech, healthcare, and agentic analytics.",
    siteName: "Jawad Amir",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawad Amir — Senior Software Engineer & AI Innovation Specialist",
    description:
      "Senior software engineer building production AI agents and cloud platforms — fintech, healthcare, and agentic analytics.",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
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
