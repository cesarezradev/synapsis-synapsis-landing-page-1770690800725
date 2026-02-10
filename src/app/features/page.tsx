"use client";

import { motion } from "framer-motion";
import {
  MessageCircle, Brain, Shield, Cpu, Globe, Code2,
  FileText, Search, Zap, Layers, Terminal, Smartphone,
  Lock, BarChart3, Workflow, Database, Cloud, Eye
} from "lucide-react";
import { FadeIn, ScaleIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GridBackground } from "@/components/GlowOrb";

const mainFeatures = [
  {
    icon: MessageCircle,
    title: "AI Chat with Streaming",
    desc: "Real-time streaming responses via WebSocket. Choose between Claude Opus, Sonnet, Haiku, GPT-4o, Gemini, and more. Adjust thinking levels from off to extreme.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "RAG System",
    desc: "Built-in Retrieval-Augmented Generation using LanceDB + OpenAI embeddings. Auto-captures important messages, semantic search with 190ms latency, circuit breaker resilience.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Synapsis Builder",
    desc: "Create full webapps with just a prompt. AI generates the code, pushes to GitHub, deploys to Vercel automatically. From idea to live URL in minutes.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Shield,
    title: "Individual VMs",
    desc: "Every user gets their own Hetzner Cloud VM. Complete isolation, no shared resources, full privacy. Your data never touches another user's machine.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Workflow,
    title: "Smart Model Router",
    desc: "AI classifies your task (code, chat, analysis, creative) and routes to the optimal model. Fast tier for quick tasks, Smart tier for complex reasoning.",
    gradient: "from-violet-500 to-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile-First App",
    desc: "Native React Native app with 6 tabs: Chat, Files, Tasks, Builder, Diagnostics, Settings. Dark/light themes, real-time WebSocket, and smooth animations.",
    gradient: "from-pink-500 to-rose-500",
  },
];

const techFeatures = [
  { icon: Lock, title: "AES-256-GCM Encryption", desc: "OAuth tokens encrypted at rest" },
  { icon: Globe, title: "Cloudflare Tunnels", desc: "Zero-trust access, DDoS protection" },
  { icon: Database, title: "LanceDB Vector DB", desc: "Embedded vector search for RAG" },
  { icon: FileText, title: "File Management", desc: "Upload, search, semantic discovery" },
  { icon: Search, title: "Semantic Search", desc: "Find files and messages by meaning" },
  { icon: Terminal, title: "Tool Execution", desc: "Run commands, scripts, web searches" },
  { icon: Cloud, title: "Auto-Provisioning", desc: "Lambda → Hetzner → Tunnel in <2min" },
  { icon: BarChart3, title: "Usage Analytics", desc: "Real-time token counting and costs" },
  { icon: Eye, title: "System Diagnostics", desc: "CPU, GPU, RAM, sessions monitoring" },
  { icon: Layers, title: "Multi-Model Access", desc: "100+ models via unified API" },
  { icon: Zap, title: "Circuit Breaker", desc: "Auto-failover on provider outages" },
  { icon: Cpu, title: "Hetzner Cloud", desc: "CX23/33/43 with 77% savings vs AWS" },
];

const whatsappFeatures = [
  "Send and receive messages through WhatsApp",
  "RAG-powered context recall for all conversations",
  "Auto-capture important messages and contacts",
  "Semantic search across entire chat history",
  "File sharing and document management",
  "Voice message support",
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-synapsis-400 uppercase tracking-widest mb-4">
              Features
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Every feature you{" "}
              <span className="gradient-text">actually need</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              No bloat, no gimmicks. Synapsis ships the tools developers need to build with AI,
              backed by real infrastructure and transparent economics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto space-y-24">
          {mainFeatures.map((feat, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              <SlideIn direction={i % 2 === 0 ? "left" : "right"} className="flex-1">
                <p className="text-sm font-semibold text-synapsis-400 uppercase tracking-widest mb-3">
                  Feature {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{feat.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{feat.desc}</p>
              </SlideIn>

              <SlideIn direction={i % 2 === 0 ? "right" : "left"} className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                  className="glass rounded-3xl p-12 flex items-center justify-center aspect-square max-w-[400px] mx-auto"
                >
                  <div
                    className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${feat.gradient} flex items-center justify-center shadow-2xl`}
                  >
                    <feat.icon className="w-16 h-16 text-white" />
                  </div>
                </motion.div>
              </SlideIn>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Grid */}
      <section className="section-padding relative">
        <GridBackground />
        <div className="relative z-10 max-w-7xl mx-auto">
          <FadeIn>
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-3 text-center">
              Under the Hood
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="gradient-text">Technical excellence</span> in every detail
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {techFeatures.map((feat, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass glass-hover rounded-xl p-6 text-center"
                >
                  <feat.icon className="w-8 h-8 text-synapsis-400 mx-auto mb-3" />
                  <h4 className="text-sm font-semibold mb-1">{feat.title}</h4>
                  <p className="text-xs text-white/40">{feat.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* WhatsApp Integration */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <FadeIn className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm mb-4">
                <MessageCircle className="w-4 h-4" />
                WhatsApp Integration
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your AI assistant,{" "}
                <span className="text-green-400">right in WhatsApp</span>
              </h2>
              <ul className="space-y-4">
                {whatsappFeatures.map((feat, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 text-white/60"
                  >
                    <Zap className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    {feat}
                  </motion.li>
                ))}
              </ul>
            </FadeIn>

            <ScaleIn className="flex-1">
              <div className="glass rounded-3xl p-8 max-w-sm mx-auto">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <div className="bg-white/5 rounded-2xl rounded-tl-none p-3 text-sm text-white/70">
                      Who is João and what&apos;s his number?
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-synapsis-500/20 rounded-2xl rounded-tr-none p-3 text-sm text-white/80">
                      <p className="text-synapsis-400 text-xs mb-1">🧠 RAG Context Found</p>
                      João (cousin): +55 11 9444-0202
                      <br />Last talked: Feb 3 about the trip to SP
                    </div>
                    <div className="w-8 h-8 rounded-full bg-synapsis-500/20 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-synapsis-400" />
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>
    </>
  );
}
