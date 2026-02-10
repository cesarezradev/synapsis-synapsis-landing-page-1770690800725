"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap, Shield, Cpu, Globe, MessageCircle, Code2,
  ArrowRight, Sparkles, Brain, BarChart3, Lock,
  Layers, Workflow, Terminal, Smartphone
} from "lucide-react";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GridBackground } from "@/components/GlowOrb";

const highlights = [
  {
    icon: Shield,
    title: "Privacy-First",
    desc: "Your own isolated VM. No shared infrastructure, no data leaks.",
  },
  {
    icon: Brain,
    title: "Smart Routing",
    desc: "AI classifies your task and picks the best model automatically.",
  },
  {
    icon: BarChart3,
    title: "Transparent Pricing",
    desc: "See exactly what you pay per token. No hidden fees, ever.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    desc: "Native mobile app with WhatsApp integration. AI on the go.",
  },
];

const features = [
  { icon: Cpu, label: "Individual VMs", desc: "Hetzner Cloud instances provisioned in under 2 minutes" },
  { icon: Workflow, label: "100+ AI Models", desc: "Access Claude, GPT, Gemini, Llama, DeepSeek and more" },
  { icon: Lock, label: "AES-256 Encryption", desc: "Tokens encrypted at rest, Cloudflare Tunnels in transit" },
  { icon: Layers, label: "RAG Built-In", desc: "LanceDB + OpenAI embeddings for context-aware conversations" },
  { icon: Terminal, label: "Builder", desc: "Create & deploy webapps with just a prompt" },
  { icon: Globe, label: "Cloudflare CDN", desc: "Global edge network, DDoS protection, zero-trust access" },
];

const stats = [
  { value: "52%", label: "Gross Margin" },
  { value: "21:1", label: "LTV:CAC Ratio" },
  { value: "<2min", label: "VM Provisioning" },
  { value: "6", label: "Repositories" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <GridBackground />

        {/* Animated orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-synapsis-500/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[130px]"
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 mb-8"
          >
            <Sparkles className="w-4 h-4 text-synapsis-400" />
            Now in private beta — join the waitlist
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8"
          >
            Your AI.
            <br />
            <span className="gradient-text">Your Machine.</span>
            <br />
            Your Rules.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Synapsis gives you a fully managed, isolated virtual machine running your personal AI assistant. 
            Smart model routing, transparent pricing, and all the tools — unified.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/pricing"
              className="group px-8 py-4 bg-gradient-to-r from-synapsis-500 to-cyan-500 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-synapsis-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/architecture"
              className="px-8 py-4 glass glass-hover rounded-xl font-semibold text-lg flex items-center justify-center gap-2"
            >
              <Code2 className="w-5 h-5" />
              See Architecture
            </Link>
          </motion.div>

          {/* Terminal preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-synapsis-500/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-white/30 font-mono">synapsis — your VM</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2 text-left">
                <p className="text-white/40">$ synapsis provision --plan flow</p>
                <p className="text-synapsis-400">⚡ Provisioning VM on Hetzner CX33...</p>
                <p className="text-synapsis-400">⚡ Installing OpenClaw + Synapsis Backend...</p>
                <p className="text-synapsis-400">⚡ Setting up Cloudflare Tunnel...</p>
                <p className="text-green-400">✓ VM ready in 87 seconds</p>
                <p className="text-green-400">✓ Connected: gateway.synapsis.chat</p>
                <p className="text-white/40 mt-4">$ synapsis chat &quot;Build me a todo app&quot;</p>
                <p className="text-cyan-400">🧠 Routing to Claude Opus 4.6 (code task)...</p>
                <p className="text-cyan-400">📦 Generated 12 files, 340 lines</p>
                <p className="text-green-400">✓ Deployed: https://my-todo.vercel.app</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section-padding relative">
        <GridBackground />
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-sm font-semibold text-synapsis-400 uppercase tracking-widest mb-3 text-center">
              Why Synapsis
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Everything you need.{" "}
              <span className="gradient-text">Nothing you don&apos;t.</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass glass-hover rounded-2xl p-8 h-full group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-synapsis-500/20 to-cyan-500/20 flex items-center justify-center mb-5 group-hover:from-synapsis-500/40 group-hover:to-cyan-500/40 transition-colors">
                    <item.icon className="w-6 h-6 text-synapsis-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="section-padding relative">
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3 text-center">
              Core Features
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Built for developers who{" "}
              <span className="gradient-text">demand more</span>
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feat, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="glass glass-hover rounded-2xl p-8 group cursor-default"
                >
                  <feat.icon className="w-8 h-8 text-synapsis-400 mb-4 group-hover:text-cyan-400 transition-colors" />
                  <h3 className="text-lg font-semibold mb-2">{feat.label}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{feat.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* STATS */}
      <section className="section-padding relative">
        <GridBackground />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="glass rounded-3xl p-12 md:p-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/40 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-synapsis-500/10 via-transparent to-cyan-500/10"
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to own your AI?
            </h2>
            <p className="text-lg text-white/50 mb-10">
              Stop renting intelligence. Get your own machine, your own models, your own rules.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-synapsis-500 to-cyan-500 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-synapsis-500/30 transition-all duration-300 hover:scale-105"
            >
              Start Building <ArrowRight className="w-6 h-6" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
