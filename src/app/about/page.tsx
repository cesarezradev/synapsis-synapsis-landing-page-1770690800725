"use client";

import { motion } from "framer-motion";
import {
  Linkedin, Twitter, Code2, Zap, Brain,
  Heart, Target, Rocket, Shield
} from "lucide-react";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem, SlideIn } from "@/components/AnimatedSection";
import { GridBackground } from "@/components/GlowOrb";

const values = [
  {
    icon: Shield,
    title: "Privacy-First",
    desc: "Your data is yours. Individual VMs, encrypted storage, zero-trust networking. We don't peek.",
  },
  {
    icon: Target,
    title: "Transparency",
    desc: "No hidden fees, no mystery pricing. See exactly what every token costs and where your money goes.",
  },
  {
    icon: Heart,
    title: "Developer Love",
    desc: "Built by developers, for developers. Every feature exists because we needed it ourselves.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    desc: "From idea to production in days, not months. Our builder proves it — prompt to deployed URL in minutes.",
  },
];

const timeline = [
  {
    date: "2026",
    title: "Project Inception",
    desc: "Started as a personal AI assistant project. The core idea: what if everyone had their own AI-powered VM?",
  },
  {
    date: "2026",
    title: "Platform Development",
    desc: "Built the complete platform: mobile app, backend infrastructure, AI integration, and deployment pipeline.",
  },
  {
    date: "2026",
    title: "Beta Launch",
    desc: "Opening up to early adopters with a focus on developer experience and privacy.",
  },
  {
    date: "Coming Soon",
    title: "Public Launch",
    desc: "Skills marketplace, team features, and enterprise-ready infrastructure.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React Native", "Expo", "TypeScript", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "TypeScript", "WebSocket", "Vector DB"] },
  { category: "AI", items: ["Claude", "GPT-4", "Gemini", "Embeddings API"] },
  { category: "Infrastructure", items: ["Cloud VMs", "CDN", "Serverless", "Auth"] },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-synapsis-400 uppercase tracking-widest mb-4">About</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Built by developers
              <br />
              <span className="gradient-text">who wanted more</span>
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Synapsis started as a personal project: an AI assistant that actually runs on your own machine.
              It grew into a platform that gives every developer the same power.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <ScaleIn className="shrink-0">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative"
              >
                <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-synapsis-500 to-cyan-500 p-1 shadow-2xl shadow-synapsis-500/30">
                  <div className="w-full h-full rounded-3xl bg-synapsis-950 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-synapsis-500/30 to-cyan-500/30 flex items-center justify-center mx-auto mb-4">
                        <span className="text-5xl font-black gradient-text">C</span>
                      </div>
                      <h3 className="text-xl font-bold">Cesar Ades</h3>
                      <p className="text-sm text-white/50 mt-1">Founder & Developer</p>
                    </div>
                  </div>
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 px-3 py-1.5 glass rounded-lg text-xs font-medium flex items-center gap-1"
                >
                  <Code2 className="w-3 h-3 text-synapsis-400" />
                  Full-Stack
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 px-3 py-1.5 glass rounded-lg text-xs font-medium flex items-center gap-1"
                >
                  <Brain className="w-3 h-3 text-purple-400" />
                  AI Builder
                </motion.div>
              </motion.div>
            </ScaleIn>

            <SlideIn direction="right" className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Meet <span className="gradient-text">Cesar</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Full-stack developer based in São Paulo, Brazil. Passionate about AI, infrastructure,
                  and building tools that give developers superpowers.
                </p>
                <p>
                  Synapsis was born from a simple frustration: existing AI platforms either charge too much,
                  share your data, or lack real developer tools. So instead of waiting for someone to build
                  the right thing, he built it himself.
                </p>
                <p>
                  The entire platform — mobile app, backend, RAG system, builder, infrastructure — was built
                  with a focus on developer experience and privacy.
                </p>
                <p className="text-white/40 italic">
                  &quot;I wanted an AI that runs on my machine, knows my context, and helps me build things.
                  Now everyone can have that.&quot;
                </p>
              </div>
              <div className="flex gap-3 mt-8">
                <a href="#" className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center text-white/40 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg glass glass-hover flex items-center justify-center text-white/40 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">
              What we <span className="gradient-text">believe in</span>
            </h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ scale: 1.03 }} className="glass glass-hover rounded-2xl p-8">
                  <v.icon className="w-10 h-10 text-synapsis-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-white/50">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding relative">
        <GridBackground />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">
              The <span className="gradient-text">journey</span>
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-synapsis-500/50 via-cyan-500/30 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`flex gap-8 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      <span className="text-xs font-mono text-synapsis-400">{item.date}</span>
                      <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                      <p className="text-sm text-white/50 mt-2">{item.desc}</p>
                    </div>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-synapsis-500 to-cyan-500 flex items-center justify-center z-10 shadow-lg shadow-synapsis-500/30">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((cat, i) => (
              <StaggerItem key={i}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-synapsis-400 uppercase tracking-wider mb-4">{cat.category}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item, j) => (
                      <li key={j} className="text-sm text-white/60 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-synapsis-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="gradient-text">revolution</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
            Be among the first to own your AI. Private beta starting soon.
          </p>
          <motion.a
            href="/pricing"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-synapsis-500 to-cyan-500 rounded-xl font-bold text-xl shadow-2xl shadow-synapsis-500/30"
          >
            Get Early Access <Rocket className="w-6 h-6" />
          </motion.a>
        </FadeIn>
      </section>
    </>
  );
}
