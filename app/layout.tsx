import type { Metadata } from "next";
import "./globals.css";
import "./nubian.css";
import "./loan-calculator.css";
import "./nubian-brand.css";
import "./loan-application.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Nubian Entrepreneurship Microfinance | Back your next big move",
  description: "Loans and appointment-based support for Malawi's entrepreneurs.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
