"use client";

import { motion } from "framer-motion";
import { Check, Zap, ArrowRight, Sparkles } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { GridBackground } from "@/components/GlowOrb";

const plans = [
  {
    name: "Spark",
    price: 29,
    desc: "For individuals getting started with AI",
    vm: "CX23 (2 vCPU, 4GB RAM)",
    tokens: "3M tokens/month",
    markup: "50% on extra tokens",
    features: [
      "Personal AI assistant",
      "WhatsApp integration",
      "File management & RAG",
      "3 Builder projects",
      "Community support",
    ],
    popular: false,
  },
  {
    name: "Flow",
    price: 59,
    desc: "For developers who build daily",
    vm: "CX33 (4 vCPU, 8GB RAM)",
    tokens: "15M tokens/month",
    markup: "30% on extra tokens",
    features: [
      "Everything in Spark",
      "Smart model routing",
      "10 Builder projects",
      "Priority model access",
      "Email support",
      "Custom tools",
    ],
    popular: true,
  },
  {
    name: "Surge",
    price: 99,
    desc: "For power users and small teams",
    vm: "CX43 (8 vCPU, 16GB RAM)",
    tokens: "50M tokens/month",
    markup: "15% on extra tokens",
    features: [
      "Everything in Flow",
      "Unlimited Builder projects",
      "GPU access (on demand)",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom model routing",
    ],
    popular: false,
  },
  {
    name: "Nova",
    price: 199,
    desc: "For enterprises and heavy workloads",
    vm: "Dedicated (custom config)",
    tokens: "100M tokens/month",
    markup: "10% on extra tokens",
    features: [
      "Everything in Surge",
      "Dedicated VM resources",
      "SLA guarantee (99.9%)",
      "Custom integrations",
      "Dedicated support",
      "On-premise option",
      "Audit logs",
      "Team management",
    ],
    popular: false,
  },
];

const faq = [
  {
    q: "What happens when I exceed my token limit?",
    a: "You can keep using the platform — extra tokens are charged at your plan's markup rate. No surprise cutoffs.",
  },
  {
    q: "Can I switch plans anytime?",
    a: "Yes! Upgrade instantly, downgrade at the end of your billing cycle. Prorated charges apply.",
  },
  {
    q: "What models can I use?",
    a: "All plans include access to 100+ models: Claude, GPT, Gemini, Llama, DeepSeek, and more. Smart routing picks the best one for your task.",
  },
  {
    q: "Is my data private?",
    a: "Absolutely. Each user gets their own isolated VM. Your data never touches another user's machine. AES-256-GCM encryption at rest.",
  },
  {
    q: "How fast is VM provisioning?",
    a: "Under 2 minutes. Sign up, pick a plan, and your personal AI machine is ready to go.",
  },
  {
    q: "What about the Builder feature?",
    a: "Builder lets you create webapps with prompts. AI generates code, pushes to your GitHub, and deploys to Vercel automatically.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GridBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold text-synapsis-400 uppercase tracking-widest mb-4">Pricing</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Simple, <span className="gradient-text">transparent</span> pricing
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              No hidden fees. No surprise charges. Pick a plan and own your AI.
              Break-even at just 24 customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding pt-8">
        <StaggerContainer className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-6 px-6">
          {plans.map((plan, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className={`rounded-2xl p-8 h-full flex flex-col relative ${
                  plan.popular
                    ? "bg-gradient-to-b from-synapsis-500/20 to-cyan-500/10 border-2 border-synapsis-500/50 shadow-2xl shadow-synapsis-500/20"
                    : "glass"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-synapsis-500 to-cyan-500 rounded-full text-xs font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-sm text-white/40">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black">${plan.price}</span>
                    <span className="text-white/40">/mo</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-white/60">
                    <Zap className="w-4 h-4 text-synapsis-400" />
                    {plan.vm}
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Zap className="w-4 h-4 text-synapsis-400" />
                    {plan.tokens}
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Zap className="w-4 h-4 text-synapsis-400" />
                    {plan.markup}
                  </div>
                </div>
                <div className="border-t border-white/10 pt-6 mb-8 flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                        <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-synapsis-500 to-cyan-500 hover:shadow-lg hover:shadow-synapsis-500/30"
                      : "glass glass-hover"
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Unit Economics */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="gradient-text">Unit economics</span> that work
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Gross Margin", value: "52%", desc: "Average across all plans" },
                { label: "Break-even", value: "24", desc: "Customers needed to cover costs" },
                { label: "LTV:CAC", value: "21:1", desc: "World-class ratio (unicorn-level)" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-8 text-center"
                >
                  <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-white/40">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding relative">
        <GridBackground />
        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
          </FadeIn>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="glass rounded-xl p-6">
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-sm text-white/50">{item.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
