"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  BookOpen,
  Code,
  GitFork,
  ShieldCheck,
  Brain,
  Activity,
  BellRing,
  ShieldAlert,
  Lock,
  FileText,
  Zap,
  ArrowRight,
  Terminal,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function DocsPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const mainDocSections = [
    {
      title: "Getting Started",
      description:
        "Learn how to set up and start using SeiShield for meme coin protection with our comprehensive onboarding guide.",
      icon: <BookOpen className="w-6 h-6" />,
      link: "#getting-started",
      gradient: "from-green-500/20 to-emerald-500/20",
      featured: true,
    },
    {
      title: "API & Integrations",
      description:
        "Understand how SeiShield integrates with SEI RPC, REST, and other data sources for seamless operation.",
      icon: <Code className="w-6 h-6" />,
      link: "#api-integrations",
      gradient: "from-blue-500/20 to-cyan-500/20",
      featured: true,
    },
    {
      title: "Grok AI Explained",
      description:
        "Dive deep into how Grok AI analyzes community signals and assesses risk with advanced machine learning.",
      icon: <Brain className="w-6 h-6" />,
      link: "#grok-ai",
      gradient: "from-purple-500/20 to-pink-500/20",
      featured: true,
    },
  ]

  const additionalSections = [
    {
      title: "Security Protocols",
      description: "Detailed information on SeiShield's zero-custody and transparency measures.",
      icon: <ShieldCheck className="w-5 h-5" />,
      link: "#security-protocols",
    },
    {
      title: "Custom Alerts Setup",
      description: "Configure personalized notifications for whale movements and market changes.",
      icon: <BellRing className="w-5 h-5" />,
      link: "#custom-alerts",
    },
    {
      title: "Contributing to SeiShield",
      description: "Information for developers interested in contributing to our open-source project.",
      icon: <GitFork className="w-5 h-5" />,
      link: "#contributing",
    },
    {
      title: "Database Schema",
      description: "Complete reference for our data structures and relationships.",
      icon: <Database className="w-5 h-5" />,
      link: "#database",
    },
    {
      title: "CLI Tools",
      description: "Command-line utilities for advanced users and developers.",
      icon: <Terminal className="w-5 h-5" />,
      link: "#cli-tools",
    },
  ]

  const illustrationCards = [
    {
      title: "Real-time Data Streams",
      description: "Access live on-chain data from Sei RPC and REST endpoints for instant market insights.",
      icon: <Activity className="w-5 h-5 text-primary" />,
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage Grok AI for deep sentiment analysis and intelligent risk scoring of meme coins.",
      icon: <Brain className="w-5 h-5 text-primary" />,
    },
    {
      title: "Proactive Threat Detection",
      description:
        "Identify potential rug pulls, honeypots, and malicious contracts before they impact your investments.",
      icon: <ShieldAlert className="w-5 h-5 text-primary" />,
    },
    {
      title: "Zero-Custody Security",
      description: "Your private keys are never stored. Maintain full control over your assets at all times.",
      icon: <Lock className="w-5 h-5 text-primary" />,
    },
  ]

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-20 lg:py-24 overflow-hidden relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 -z-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl opacity-70"></div>
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 -z-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-2xl opacity-70"></div>

          <div className="container relative z-10 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12 space-y-6"
            >
              <Badge className="rounded-full px-4 py-2 text-sm font-medium mb-4" variant="secondary">
                <FileText className="w-4 h-4 mr-2" />
                Documentation
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white-purple-gradient leading-tight">
                Deep Dive into
                <br />
                <span className="text-purple-glow-strong">SeiShield</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive documentation to understand how SeiShield works, from technical integrations
                to AI-powered insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/app">
                  <Button
                    size="lg"
                    className="rounded-full px-8 py-3 text-base btn-purple-glow border-0 w-full sm:w-auto"
                  >
                    Launch App
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Documentation Sections - Hero Cards */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container relative px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 space-y-6"
            >
              <Badge className="rounded-full px-4 py-2 text-sm font-medium" variant="secondary">
                <Zap className="w-4 h-4 mr-2" />
                Quick Start
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                Essential Guides
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Get up and running quickly with our most important documentation sections.
              </p>
            </motion.div>

            <div className="space-y-12 md:space-y-16">
              {mainDocSections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`lg:col-span-6 space-y-6 text-center lg:text-left ${i % 2 === 1 ? "lg:col-start-7" : ""}`}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary">
                      {section.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{section.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {section.description}
                    </p>

                    <div className="flex justify-center lg:justify-start">
                      <Link href={section.link}>
                        <Button
                          variant="outline"
                          className="rounded-full px-6 py-3 text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white bg-transparent"
                        >
                          Read Guide
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative">
                      <div
                        className={`aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${section.gradient} border border-border/40 backdrop-blur`}
                      >
                        <Image
                          src={`/placeholder.svg?height=400&width=600&query=${section.title} documentation interface`}
                          width={600}
                          height={400}
                          alt={`${section.title} documentation`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-primary px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg">
                        Interactive
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Documentation Sections - Grid Layout */}
        <section className="w-full py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 -z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 -z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>

          <div className="container relative z-10 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 space-y-6"
            >
              <Badge className="rounded-full px-4 py-2 text-sm font-medium" variant="secondary">
                <BookOpen className="w-4 h-4 mr-2" />
                Complete Reference
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                Explore All Topics
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Comprehensive documentation covering every aspect of SeiShield.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {additionalSections.map((section, i) => (
                <motion.div key={i} variants={item}>
                  <Link href={section.link}>
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-xl hover:scale-[1.02] group">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/15 dark:bg-primary/25 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            {section.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                              {section.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{section.description}</p>
                          </div>
                        </div>
                        <div className="mt-auto pt-4">
                          <div className="flex items-center text-sm text-purple-glow group-hover:text-purple-glow-strong transition-colors">
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Components Section - Bento Grid */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container relative z-10 px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 space-y-6"
            >
              <Badge className="rounded-full px-4 py-2 text-sm font-medium" variant="secondary">
                <Activity className="w-4 h-4 mr-2" />
                Core Architecture
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                How SeiShield Works
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Understanding the core technologies and functionalities that power SeiShield.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            >
              {illustrationCards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className={`${i === 0 ? "md:col-span-2" : ""} ${i === 1 ? "lg:col-span-2" : ""}`}
                >
                  <Card
                    className={`h-full overflow-hidden border-border/40 bg-gradient-to-br from-background to-primary/5 backdrop-blur transition-all hover:shadow-xl hover:scale-[1.02] group ${i === 0 || i === 1 ? "min-h-[200px]" : ""}`}
                  >
                    <CardContent className="p-6 flex flex-col h-full text-center justify-center">
                      <div
                        className={`mb-4 flex items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 mx-auto group-hover:rotate-12 transition-transform duration-300 ${i === 0 || i === 1 ? "w-16 h-16" : "w-12 h-12"}`}
                      >
                        {card.icon}
                      </div>
                      <h3 className={`font-bold mb-3 text-foreground ${i === 0 || i === 1 ? "text-xl" : "text-lg"}`}>
                        {card.title}
                      </h3>
                      <p
                        className={`text-muted-foreground leading-relaxed ${i === 0 || i === 1 ? "text-base" : "text-sm"}`}
                      >
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          id="cta"
          className="w-full py-16 md:py-20 lg:py-24 text-primary-foreground relative overflow-hidden bg-[rgba(39,23,88,1)]"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-12 -left-12 md:-top-24 md:-left-24 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 md:-bottom-24 md:-right-24 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container relative px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Ready to Learn More?
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/80">
                Dive deeper into our documentation or launch the app to see SeiShield in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                <Link href="/app">
                  <Button size="lg" variant="secondary" className="rounded-full px-8 py-3 text-base w-full sm:w-auto">
                    Launch App
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
