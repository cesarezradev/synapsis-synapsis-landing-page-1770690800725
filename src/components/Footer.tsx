"use client";

import Link from "next/link";
import { Zap, Github, Twitter, MessageCircle } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Architecture", href: "/architecture" },
    { label: "Builder", href: "/builder" },
    { label: "Pricing", href: "/pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Status", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-synapsis-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-synapsis-500 to-cyan-400 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">Synapsis</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Your AI, Your Machine, Your Rules. The all-in-one AI platform that
              gives you a private VM with smart model routing and transparent pricing.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-white/40 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white/80 mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Synapsis. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Built with ⚡ by the Synapsis team
          </p>
        </div>
      </div>
    </footer>
  );
}
