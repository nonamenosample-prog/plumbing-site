import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Caccia Plumbing — Service Company Website",
  description: "Plumbing, drain & sewer, electrical, water heaters, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-slate-900">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}