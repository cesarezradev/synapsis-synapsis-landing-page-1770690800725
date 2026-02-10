import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Synapsis — Your AI, Your Machine, Your Rules",
  description:
    "AI as a Service platform. Individual VMs, smart model routing, transparent pricing. Infrastructure + LLM APIs + AI Tools unified.",
  keywords: ["AI", "LLM", "virtual machine", "AI assistant", "developer tools", "Synapsis"],
  openGraph: {
    title: "Synapsis — AI as a Service",
    description: "Your own AI-powered virtual machine with smart model routing and transparent pricing.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
