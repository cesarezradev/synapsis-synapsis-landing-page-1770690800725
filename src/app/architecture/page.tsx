"use client";

import { motion } from "framer-motion";
import {
  Smartphone, Server, Cloud, Shield, Zap,
  ArrowDown, ArrowRight, Layers, Globe, Lock, Cpu
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GridBackground } from "@/components/GlowOrb";

const layers = [
  {
    title: "Mobile App",
    subtitle: "React Native + Expo",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    items: ["6 screens: Chat, Files, Tasks, Builder, Diagnostics, Settings", "Real-time streaming via WebSocket", "Model & thinking level selection", "Dark/light themes"],
  },
  {
    title: "User VM",
    subtitle: "Cloud Virtual Machine",
    icon: Server,
    color: "from-purple-500 to-violet-500",
    items: ["AI Gateway", "Backend Services", "Vector Database for RAG", "File storage & management"],
  },
  {
    title: "Gateway API",
    subtitle: "Smart Model Router",
    icon: Zap,
    color: "from-orange-500 to-amber-500",
    items: ["Task classification", "Route to optimal model per task", "Token accounting & billing", "Failover & resilience"],
  },
  {
    title: "Infrastructure",
    subtitle: "Cloud + Security",
    icon: Cloud,
    color: "from-emerald-500 to-teal-500",
    items: ["Zero-trust networking", "Serverless provisioning", "Encrypted storage", "DDoS protection & CDN"],
  },
];

const models = [
  { name: "Claude Opus", provider: "Anthropic", tier: "Smart", desc: "Complex reasoning" },
  { name: "Claude Sonnet", provider: "Anthropic", tier: "Regular", desc: "Balanced performance" },
  { name: "Claude Haiku", provider: "Anthropic", tier: "Fast", desc: "Quick responses" },
  { name: "GPT-4o", provider: "OpenAI", tier: "Regular", desc: "Multimodal tasks" },
  { name: "GPT-4o-mini", provider: "OpenAI", tier: "Fast", desc: "Affordable quality" },
  { name: "Gemini Pro", provider: "Google", tier: "Regular", desc: "Long context" },
  { name: "Gemini Flash", provider: "Google", tier: "Fast", desc: "Ultra-fast" },
];

const securityLayers = [
  { icon: Globe, title: "Network Isolation", desc: "Each user runs in their own isolated environment" },
  { icon: Lock, title: "Token Security", desc: "AES-256-GCM encryption, auto-refresh, never exposed" },
  { icon: Shield, title: "Security Scanning", desc: "Automated security checks and monitoring" },
  { icon: Cpu, title: "VM Isolation", desc: "Complete separation between users" },
];

export default function ArchitecturePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-synapsis-400 uppercase tracking-widest mb-4">Architecture</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Built to <span className="gradient-text">scale securely</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Four-layer architecture with individual VM isolation, smart routing, and zero-trust networking.
              Every component designed for resilience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Layers */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto space-y-8">
          {layers.map((layer, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass rounded-2xl p-8 md:p-10"
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-xl`}>
                        <layer.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-4">
                        <h3 className="text-2xl font-bold">{layer.title}</h3>
                        <span className="text-sm text-white/40 font-mono">{layer.subtitle}</span>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-3">
                        {layer.items.map((item, j) => (
                          <div key={j} className="flex items-start gap-2 text-sm text-white/60">
                            <Zap className="w-4 h-4 text-synapsis-400 mt-0.5 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowDown className="w-6 h-6 text-white/20" />
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Model Router */}
      <section className="section-padding relative">
        <GridBackground />
        <div className="relative z-10 max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3 text-center">Model Router</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">Multiple models</span>, one smart API
            </h2>
            <p className="text-white/50 text-center max-w-2xl mx-auto mb-12">
              Send any request. Our classifier picks the best model for your task.
            </p>
          </FadeIn>

          <div className="glass rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-6 py-4 text-white/40 font-medium">Model</th>
                    <th className="text-left px-6 py-4 text-white/40 font-medium">Provider</th>
                    <th className="text-left px-6 py-4 text-white/40 font-medium">Tier</th>
                    <th className="text-left px-6 py-4 text-white/40 font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((m, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-3 font-medium">{m.name}</td>
                      <td className="px-6 py-3 text-white/50">{m.provider}</td>
                      <td className="px-6 py-3">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                          m.tier === "Smart" ? "bg-purple-500/20 text-purple-400" :
                          m.tier === "Regular" ? "bg-blue-500/20 text-blue-400" :
                          "bg-green-500/20 text-green-400"
                        }`}>
                          {m.tier}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-white/60">{m.desc}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3 text-center">Security</p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Defense in <span className="gradient-text">depth</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {securityLayers.map((layer, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ scale: 1.03 }} className="glass glass-hover rounded-2xl p-8">
                  <layer.icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{layer.title}</h3>
                  <p className="text-sm text-white/50">{layer.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="section-padding relative">
        <GridBackground />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Request Flow</h2>
            <div className="glass rounded-2xl p-8 font-mono text-sm space-y-3">
              {[
                { step: "01", text: "User sends message from mobile app", color: "text-blue-400" },
                { step: "02", text: "WebSocket delivers to user's VM", color: "text-cyan-400" },
                { step: "03", text: "RAG enriches with context", color: "text-purple-400" },
                { step: "04", text: "Gateway classifies task type", color: "text-orange-400" },
                { step: "05", text: "Routes to optimal AI model", color: "text-yellow-400" },
                { step: "06", text: "Streams response back in real-time", color: "text-green-400" },
                { step: "07", text: "Accounts tokens, updates billing", color: "text-emerald-400" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-white/20 w-8">{item.step}</span>
                  <ArrowRight className="w-4 h-4 text-white/20" />
                  <span className={item.color}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
