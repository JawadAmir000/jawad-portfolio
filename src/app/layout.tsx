import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  title: {
    default: "Jawad Amir - Senior Software Engineer & AI Specialist",
    template: "%s | Jawad Amir",
  },
  description:
    "Senior Software Engineer with 6+ years of experience in .NET, Cloud Architecture, and AI Innovation. Building high-performance, cloud-native, and AI-driven solutions.",
  keywords: [
    "Software Engineer",
    "AI",
    ".NET",
    "Azure",
    "AWS",
    "Microservices",
    "Cloud Architecture",
    "Full Stack Developer",
  ],
  authors: [{ name: "Jawad Amir" }],
  creator: "Jawad Amir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jawadamir.dev",
    title: "Jawad Amir - Senior Software Engineer & AI Specialist",
    description:
      "Building high-performance, cloud-native, and AI-driven solutions across Fortune 500 enterprises and startups.",
    siteName: "Jawad Amir",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawad Amir - Senior Software Engineer & AI Specialist",
    description:
      "Building high-performance, cloud-native, and AI-driven solutions",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
