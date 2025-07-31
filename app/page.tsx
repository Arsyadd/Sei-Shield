"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ArrowRight,
  Lock,
  Search,
  Wallet,
  BarChart,
  Users,
  GitFork,
  ShieldCheck,
  Lightbulb,
  Rocket,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Brain,
  ShieldAlert,
  BellRing,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
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

  const benefits = [
    {
      title: "Smart Token Scanner",
      description: "Scan meme coins on SEI, get instant AI risk scores, and detect potential scams.",
      icon: <Search className="size-6" />,
    },
    {
      title: "Real-time Wallet Tracker",
      description: "Monitor inflows, outflows, and suspicious activity from large wallets.",
      icon: <Wallet className="size-6" />,
    },
    {
      title: "Automated Whale Alerts",
      description: "Detect sudden dumps & whale movements in real-time for quick decisions.",
      icon: <BarChart className="size-6" />,
    },
    {
      title: "Grok AI Community Health Analysis",
      description: "Grok AI analyzes X/Twitter community signals to gauge sentiment and organic growth.",
      icon: <Users className="size-6" />,
    },
  ]

  const roadmapMilestones = [
    {
      step: "01",
      title: "Phase 1: Core Launch",
      description: "Launch of the foundational token scanner, wallet tracker, and basic whale alert system.",
      icon: <Rocket className="size-6" />,
    },
    {
      title: "Phase 2: Grok AI Integration",
      description: "Integration of Grok AI for deeper community sentiment analysis and risk assessment.",
      icon: <Lightbulb className="size-6" />,
    },
    {
      title: "Phase 3: Autonomous Agent",
      description: "Development of a full suspicious wallet tracker & rules-based agent for proactive protection.",
      icon: <Zap className="size-6" />,
    },
  ]

  const securityPoints = [
    {
      icon: <Lock className="size-6" />,
      title: "Zero-Custody",
      description: "We never store your private keys. Your assets remain securely in your wallet.",
    },
    {
      icon: <GitFork className="size-6" />,
      title: "Data Stays on SEI",
      description: "No third-party data storage. All analysis is based on public on-chain data.",
    },
    {
      icon: <ShieldCheck className="size-6" />,
      title: "Full Transparency",
      description: "Our core scanner is open-source for community audit and verification.",
    },
  ]

  const faqSamples = [
    {
      question: "How does SeiShield get real-time data?",
      answer: "We use Sei RPC & REST and DEX Screener for fast on-chain data.",
    },
    {
      question: "Do I need to connect my wallet?",
      answer: "No, SeiShield operates on a zero-custody basis. You don't need to connect a wallet to scan.",
    },
    {
      question: "What is Grok AI's role in SeiShield?",
      answer: "Grok AI is used to analyze community signals and assess meme coin risks.",
    },
  ]

  const topSeiCoins = [
    { name: "SEI Doge", price: "0.000123", change: 5.2, icon: "/placeholder.svg?height=24&width=24" },
    { name: "SEI Cat", price: "0.000087", change: -2.1, icon: "/placeholder.svg?height=24&width=24" },
    { name: "SEI Pepe", price: "0.000345", change: 12.8, icon: "/placeholder.svg?height=24&width=24" },
    { name: "SEI Moon", price: "0.000051", change: 0.9, icon: "/placeholder.svg?height=24&width=24" },
  ]

  const illustrationCards = [
    {
      title: "Real-time Data Streams",
      description: "Access live on-chain data from Sei RPC and REST endpoints for instant market insights.",
      icon: <Activity className="size-10 text-primary w-6 h-[2] shadow-inner" />,
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage Grok AI for deep sentiment analysis and intelligent risk scoring of meme coins.",
      icon: <Brain className="size-10 text-primary h-6 w-6" />,
    },
    {
      title: "Proactive Threat Detection",
      description:
        "Identify potential rug pulls, honeypots, and malicious contracts before they impact your investments.",
      icon: <ShieldAlert className="size-10 text-primary h-6 w-6" />,
    },
    {
      title: "Zero-Custody Security",
      description: "Your private keys are never stored. Maintain full control over your assets at all times.",
      icon: <Lock className="size-10 text-primary h-6 w-6" />,
    },
    {
      title: "Customizable Alerts",
      description: "Set personalized notifications for whale movements, liquidity changes, and token listings.",
      icon: <BellRing className="size-10 text-primary h-6 w-6" />,
    },
    {
      title: "Transparent & Open-Source",
      description: "Our core scanning logic is open-source, fostering trust and community-driven security.",
      icon: <GitFork className="size-10 text-primary w-6 h-6" />,
    },
  ]

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-40 overflow-hidden relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 -z-10 h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl md:blur-3xl opacity-70"></div>
          <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 -z-10 h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-2xl md:blur-3xl opacity-70"></div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-8 md:mb-12"
            >
              <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-white-purple-gradient leading-tight text-3xl">
                Your Autonomous SEI Meme Coin Guardian
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                Analyze, track, and stay ahead. Zero-custody, AI-powered, 100% SEI Native. Protect your investments on
                the SEI network.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                <Link href="/app">
                  <Button
                    size="lg"
                    className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base btn-purple-glow border-0 w-full sm:w-auto"
                  >
                    Launch App
                    <ArrowRight className="ml-2 size-3 md:size-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-4 md:mt-6">
                Join the future of safe on-chain meme coin exploration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >
              <div className="rounded-lg md:rounded-xl overflow-hidden shadow-xl md:shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                <Image
                  src="/placeholder.svg?height=720&width=1280"
                  width={1280}
                  height={720}
                  alt="SeiShield dashboard"
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 rounded-lg md:rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Logos Section (Conceptual: Trusted by SEI community) */}
        <section className="w-full py-16 border-y bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <p className="text-base font-medium text-muted-foreground">Trusted by the SEI community</p>
              <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-20">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder.svg?height=60&width=120&query=abstract blockchain network logo ${i}`}
                    alt={`Community logo ${i}`}
                    width={120}
                    height={60}
                    className="h-10 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top SEI Meme Coins Section */}
        <section className="w-full py-16 md:py-24 lg:py-40 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 -z-10 h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl md:blur-3xl opacity-70"></div>
          <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 -z-10 h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-2xl md:blur-3xl opacity-70"></div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center mb-8 md:mb-12"
            >
              <Badge
                className="rounded-full px-4 md:px-5 py-1.5 md:py-2 text-sm md:text-base font-medium"
                variant="secondary"
              >
                Top Coins
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white-purple-gradient">
                Trending SEI Meme Coins
              </h2>
              <p className="max-w-[600px] md:max-w-[800px] text-base md:text-xl text-muted-foreground">
                Stay updated with the top-performing and most discussed meme coins on the SEI network.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 md:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mx-auto justify-center"
            >
              {topSeiCoins.map((coin, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02] hover:translate-y-[-2px] md:hover:translate-y-[-5px]">
                    <CardContent className="p-3 md:p-4 flex flex-col items-center text-center">
                      <Image
                        src={coin.icon || "/placeholder.svg"}
                        alt={`${coin.name} icon`}
                        width={32}
                        height={32}
                        className="size-10 md:size-14 rounded-full mb-2 md:mb-3"
                      />
                      <h3 className="text-base md:text-2xl font-bold mb-1 text-foreground truncate w-full">
                        {coin.name}
                      </h3>
                      <p className="text-foreground text-base md:text-xl font-semibold">${coin.price}</p>
                      <div
                        className={`flex items-center gap-1 text-sm md:text-base font-medium ${
                          coin.change >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {coin.change >= 0 ? (
                          <ArrowUpRight className="size-4 md:size-5" />
                        ) : (
                          <ArrowDownRight className="size-4 md:size-5" />
                        )}
                        {coin.change.toFixed(2)}%
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-8 md:mt-12">
              <Link href="/app">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base bg-transparent text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white"
                >
                  Explore More Coins
                  <ChevronRight className="ml-1 size-3 md:size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Benefits Preview */}
        <section id="benefits" className="w-full py-24 md:py-40 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-5 py-2 text-base font-medium" variant="secondary">
                Key Benefits
              </Badge>
              <h2 className="md:text-5xl font-bold tracking-tight text-white-purple-gradient text-3xl">
                Why Choose SeiShield?
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Protect your investments and navigate the SEI meme coin market with confidence through our advanced
                analysis tools.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mx-auto" // Added mx-auto for centering
            >
              {benefits.map((benefit, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02]">
                    <CardContent className="p-6 flex flex-col h-full items-center text-center">
                      {" "}
                      {/* Added items-center and text-center */}
                      <div className="size-14 rounded-full bg-primary/15 dark:bg-primary/25 flex items-center justify-center text-primary mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground text-base">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <div className="flex justify-center mt-12">
              <Link href="/benefit">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base bg-transparent text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white"
                >
                  See All Benefits
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works / Illustration Cards Section */}
        <section className="w-full py-24 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-5 py-2 text-base font-medium" variant="secondary">
                How It Works
              </Badge>
              <h2 className="md:text-5xl font-bold tracking-tight text-white-purple-gradient text-3xl">
                Powerful Protection, Simplified
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                SeiShield combines cutting-edge technology with user-centric design to deliver unparalleled security and
                insights.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto" // Added mx-auto for centering
            >
              {illustrationCards.map((card, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-primary/5 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02]">
                    <CardContent className="p-6 flex flex-col h-full items-center text-center">
                      {" "}
                      {/* Added items-center and text-center */}
                      <div className="mb-4 flex items-center justify-center size-20 rounded-full bg-primary/10 dark:bg-primary/20 h-14 w-14">
                        {card.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{card.title}</h3>
                      <p className="text-muted-foreground text-base">{card.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Roadmap Preview */}
        <section id="roadmap" className="w-full py-24 md:py-40 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-5 py-2 text-base font-medium" variant="secondary">
                Roadmap
              </Badge>
              <h2 className="md:text-5xl font-bold tracking-tight text-white-purple-gradient text-3xl">
                SeiShield Evolution
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                How SeiShield evolves over time to provide the best protection on the SEI network.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative mx-auto">
              {" "}
              {/* Added mx-auto for centering */}
              {/* Abstract connecting line/path */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0"></div>
              {roadmapMilestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg mb-4 w-14 h-14">
                    {milestone.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground text-base">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/roadmap">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base bg-transparent text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white"
                >
                  View Full Roadmap
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Security Preview */}
        <section id="security" className="w-full py-24 md:py-40 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
          <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-5 py-2 text-base font-medium" variant="secondary">
                Security
              </Badge>
              <h2 className="md:text-5xl font-bold tracking-tight text-white-purple-gradient text-3xl">
                How We Keep You Safe
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                SeiShield is built with your security as the top priority, ensuring your peace of mind.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 mx-auto">
              {" "}
              {/* Added mx-auto for centering */}
              {securityPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02]">
                    <CardContent className="p-6 flex flex-col h-full items-center text-center">
                      {" "}
                      {/* Added items-center and text-center */}
                      <div className="size-14 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {point.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground">{point.title}</h3>
                      <p className="text-muted-foreground text-base">{point.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/security">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base bg-transparent text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white"
                >
                  Read More
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section id="faq" className="w-full py-24 md:py-40 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-5 py-2 text-base font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="md:text-5xl font-bold tracking-tight text-white-purple-gradient text-3xl">Questions?</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Find answers to common questions about SeiShield and how it works.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {faqSamples.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline text-lg text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/faq">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base bg-transparent text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white"
                >
                  View All FAQs
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Docs Preview */}
        <section
          id="docs"
          className="w-full py-20 md:py-32 text-primary-foreground relative overflow-hidden bg-[rgba(39,23,88,1)]"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="mx-auto max-w-[700px] md:text-2xl text-muted-foreground"></div>

          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-3xl">
                How SeiShield Works
              </h2>
              <p className="mx-auto max-w-[700px] md:text-2xl text-muted-foreground">
                Read our documentation to learn how SeiShield integrates with SEI endpoints, RPC, REST, and how Grok AI
                scans community risk.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
                {" "}
                {/* Added justify-center */}
                <Link href="/docs">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base"
                  >
                    Read Documentation
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
