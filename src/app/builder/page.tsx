"use client";

import { motion } from "framer-motion";
import {
  MessageSquare, Code2, GitBranch, Rocket, Eye,
  Trash2, ArrowRight, Sparkles, Zap, CheckCircle2
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GridBackground } from "@/components/GlowOrb";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe Your App",
    desc: "Tell the AI what you want in plain language. \"Create a recipe app with search and categories.\"",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "AI Generates Code",
    desc: "The AI generates a complete Next.js + TypeScript + Tailwind project. Multiple files, proper structure.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: GitBranch,
    title: "Push to GitHub",
    desc: "One tap to create a repository on your GitHub account and push the generated code. OAuth integration built-in.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Rocket,
    title: "Deploy Automatically",
    desc: "Auto-deploy via your preferred platform. Your app gets a live preview URL instantly. Zero configuration.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Eye,
    title: "Preview & Iterate",
    desc: "View your live app, check the code, and request changes. Each update triggers a new deployment.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Trash2,
    title: "Full Lifecycle",
    desc: "Delete projects from the app — cleans up local storage, repository, and deployment in one tap.",
    color: "from-red-500 to-orange-500",
  },
];

const techStack = [
  { label: "Frontend Framework", value: "Next.js 14 + TypeScript" },
  { label: "Styling", value: "Tailwind CSS" },
  { label: "AI Model", value: "Claude Opus" },
  { label: "Version Control", value: "GitHub (OAuth)" },
  { label: "Deployment", value: "Auto-deploy on push" },
  { label: "Token Encryption", value: "AES-256-GCM" },
  { label: "Real-time", value: "WebSocket notifications" },
];

export default function BuilderPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Prompt → Code → Deploy
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Build webapps</span>
              <br />with just words
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Synapsis Builder turns your ideas into live websites. Describe what you want,
              AI writes the code, and it deploys automatically. No terminal needed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">
              From idea to <span className="gradient-text">live URL</span> in 6 steps
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-synapsis-500/50 via-cyan-500/50 to-transparent hidden md:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex gap-8 items-start"
                  >
                    <div className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl relative z-10`}>
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="glass glass-hover rounded-2xl p-6 flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-white/30">STEP {String(i + 1).padStart(2, "0")}</span>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-white/50">{step.desc}</p>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Terminal */}
      <section className="section-padding relative">
        <GridBackground />
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">See it in action</h2>
            <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-synapsis-500/10">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-white/30 font-mono">synapsis builder</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-3">
                {[
                  { text: "You: Create a recipe app with grandma's recipes", color: "text-white/60" },
                  { text: "⚡ Routing to AI model...", color: "text-synapsis-400" },
                  { text: "📦 Generating code: Next.js + TypeScript + Tailwind", color: "text-cyan-400" },
                  { text: "✓ Generated 15 files", color: "text-green-400" },
                  { text: "", color: "" },
                  { text: "→ Confirm push to GitHub? [Yes]", color: "text-yellow-400" },
                  { text: "📤 Pushing to repository...", color: "text-cyan-400" },
                  { text: "✓ Repository created and code pushed", color: "text-green-400" },
                  { text: "", color: "" },
                  { text: "→ Confirm deploy? [Yes]", color: "text-yellow-400" },
                  { text: "🚀 Deploying...", color: "text-purple-400" },
                  { text: "✓ Live at: https://your-app.vercel.app", color: "text-green-400" },
                ].map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={line.color}
                  >
                    {line.text || "\u00A0"}
                  </motion.p>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding relative">
        <GridBackground />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
            <div className="glass rounded-2xl divide-y divide-white/5">
              {techStack.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between px-6 py-4"
                >
                  <span className="text-sm text-white/50">{item.label}</span>
                  <span className="text-sm font-medium font-mono">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
