import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robot = Roboto({
  weight: "500",subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Next JS",
  description: "This is Sajmul Hossain's practice next js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${robot.style} ${geistMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
