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
  Star,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

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
      icon: <Activity className="size-6 text-primary" />,
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage Grok AI for deep sentiment analysis and intelligent risk scoring of meme coins.",
      icon: <Brain className="size-6 text-primary" />,
    },
    {
      title: "Proactive Threat Detection",
      description:
        "Identify potential rug pulls, honeypots, and malicious contracts before they impact your investments.",
      icon: <ShieldAlert className="size-6 text-primary" />,
    },
    {
      title: "Zero-Custody Security",
      description: "Your private keys are never stored. Maintain full control over your assets at all times.",
      icon: <Lock className="size-6 text-primary" />,
    },
    {
      title: "Customizable Alerts",
      description: "Set personalized notifications for whale movements, liquidity changes, and token listings.",
      icon: <BellRing className="size-6 text-primary" />,
    },
    {
      title: "Transparent & Open-Source",
      description: "Our core scanning logic is open-source, fostering trust and community-driven security.",
      icon: <GitFork className="size-6 text-primary" />,
    },
  ]

  const stats = [
    { label: "Tokens Scanned", value: "10,000+", icon: <Search className="size-4" /> },
    { label: "Wallets Tracked", value: "5,000+", icon: <Wallet className="size-4" /> },
    { label: "Alerts Sent", value: "25,000+", icon: <BellRing className="size-4" /> },
    { label: "Users Protected", value: "1,200+", icon: <ShieldCheck className="size-4" /> },
  ]

  return (
    <>
      <main className="flex-1">
        {/* Hero Section - Mobile Optimized */}
        <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32 overflow-hidden relative">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-2 -right-2 md:-bottom-6 md:-right-6 -z-10 h-[100px] w-[100px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl md:blur-2xl lg:blur-3xl opacity-70"></div>
          <div className="absolute -top-2 -left-2 md:-top-6 md:-left-6 -z-10 h-[100px] w-[100px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-xl md:blur-2xl lg:blur-3xl opacity-70"></div>

          <div className="container relative z-10 px-4">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 items-center">
              {/* Left Content - Mobile First */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
              >
                <div className="space-y-4 md:space-y-6">
                  <Badge
                    className="rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium"
                    variant="secondary"
                  >
                    <Star className="size-3 md:size-4 mr-1 md:mr-2" />
                    SeiShield v1.0
                  </Badge>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white-purple-gradient leading-tight">
                    Your Autonomous
                    <br />
                    <span className="text-purple-glow-strong">SEI Guardian</span>
                  </h1>
                  <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Analyze, track, and stay ahead with zero-custody, AI-powered protection. 100% SEI Native security
                    for your meme coin investments.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                  <Link href="/app">
                    <Button
                      size="lg"
                      className="rounded-full h-11 md:h-12 lg:h-14 px-6 md:px-8 lg:px-10 text-sm md:text-base lg:text-lg btn-purple-glow border-0 w-full sm:w-auto"
                    >
                      Launch App
                      <ArrowRight className="ml-2 size-4 md:size-5" />
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-11 md:h-12 lg:h-14 px-6 md:px-8 lg:px-10 text-sm md:text-base lg:text-lg bg-transparent w-full sm:w-auto"
                  >
                    Watch Demo
                  </Button>
                </div>

                {/* Stats Row - Mobile Optimized */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-6 md:pt-8">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                      className="text-center space-y-1 md:space-y-2"
                    >
                      <div className="flex items-center justify-center text-primary">{stat.icon}</div>
                      <div className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Content - Mobile Optimized */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5 mt-8 lg:mt-0"
              >
                <div className="relative">
                  <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl border border-border/40 bg-gradient-to-b from-background to-muted/20">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      width={800}
                      height={600}
                      alt="SeiShield dashboard"
                      className="w-full h-auto"
                      priority
                    />
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl ring-1 ring-inset ring-black/10 dark:ring-white/10"></div>
                  </div>
                  {/* Floating elements - Mobile Responsive */}
                  <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-green-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium">
                    Live
                  </div>
                  <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 bg-primary px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-white">
                    AI Powered
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logos Section - Mobile Optimized */}
        <section className="w-full py-8 md:py-12 lg:py-16 border-y bg-muted/30">
          <div className="container px-4">
            <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center">
              <p className="text-sm md:text-base font-medium text-muted-foreground">Trusted by the SEI community</p>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14 xl:gap-20">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder.svg?height=60&width=120&query=abstract blockchain network logo ${i}`}
                    alt={`Community logo ${i}`}
                    width={120}
                    height={60}
                    className="h-8 md:h-10 w-auto opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Top SEI Coins - Mobile First Design */}
        <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem]"></div>

          <div className="container px-4">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              {/* Header - Mobile Centered */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-4 space-y-4 md:space-y-6 text-center lg:text-left"
              >
                <Badge
                  className="rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium"
                  variant="secondary"
                >
                  <TrendingUp className="size-3 md:size-4 mr-1 md:mr-2" />
                  Market Insights
                </Badge>
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient sm:text-4xl">
                  Trending SEI
                  <br />
                  Meme Coins
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Stay updated with the top-performing and most discussed meme coins on the SEI network. Real-time data
                  powered by our advanced scanning technology.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link href="/app">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base bg-transparent text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white"
                    >
                      Explore All Coins
                      <ChevronRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Coins Grid - Mobile Optimized */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
                  {topSeiCoins.map((coin, i) => (
                    <motion.div key={i} variants={item}>
                      <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-br from-background to-muted/10 backdrop-blur transition-all hover:shadow-xl hover:scale-[1.02] hover:translate-y-[-2px]">
                        <CardContent className="p-4 md:p-6">
                          <div className="flex items-center justify-between mb-3 md:mb-4">
                            <div className="flex items-center gap-2 md:gap-3">
                              <Image
                                src={coin.icon || "/placeholder.svg"}
                                alt={`${coin.name} icon`}
                                width={32}
                                height={32}
                                className="size-8 md:size-10 rounded-full"
                              />
                              <div>
                                <h3 className="text-base md:text-lg font-bold text-foreground">{coin.name}</h3>
                                <p className="text-xs md:text-sm text-muted-foreground">SEI Network</p>
                              </div>
                            </div>
                            <div
                              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs md:text-sm font-medium ${
                                coin.change >= 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                              }`}
                            >
                              {coin.change >= 0 ? (
                                <ArrowUpRight className="size-3 md:size-4" />
                              ) : (
                                <ArrowDownRight className="size-3 md:size-4" />
                              )}
                              {coin.change.toFixed(2)}%
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="text-xl md:text-2xl font-bold text-foreground">${coin.price}</p>
                            <div className="w-full bg-muted rounded-full h-1.5 md:h-2">
                              <div
                                className="bg-primary h-1.5 md:h-2 rounded-full transition-all duration-500"
                                style={{ width: `${Math.abs(coin.change) * 3}%` }}
                              ></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits - Mobile Optimized Alternating Layout */}
        <section id="benefits" className="w-full py-12 md:py-16 lg:py-24 xl:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12 md:mb-16 space-y-4 md:space-y-6"
            >
              <Badge
                className="rounded-full px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-medium"
                variant="secondary"
              >
                Why Choose SeiShield
              </Badge>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient sm:text-4xl">
                Advanced Protection
                <br />
                <span className="text-purple-glow-strong">Made Simple</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Protect your investments and navigate the SEI meme coin market with confidence through our cutting-edge
                analysis tools and AI-powered insights.
              </p>
            </motion.div>

            <div className="space-y-12 md:space-y-16">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`grid lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`lg:col-span-6 space-y-4 md:space-y-6 text-center lg:text-left ${i % 2 === 1 ? "lg:col-start-7" : ""}`}
                  >
                    <div className="inline-flex items-center justify-center size-12 md:size-16 rounded-xl md:rounded-2xl bg-primary/15 dark:bg-primary/25 text-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{benefit.title}</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {benefit.description}
                    </p>
                    <div className="flex justify-center lg:justify-start">
                      <Button
                        variant="outline"
                        className="rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-2 size-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative">
                      <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/40">
                        <Image
                          src={`/placeholder.svg?height=400&width=600&query=${benefit.title} interface mockup`}
                          width={600}
                          height={400}
                          alt={`${benefit.title} mockup`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-primary px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-white">
                        Live
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12 md:mt-16">
              <Link href="/benefit">
                <Button
                  size="lg"
                  className="rounded-full h-12 md:h-14 px-8 md:px-10 text-base md:text-lg btn-purple-glow"
                >
                  Explore All Benefits
                  <ChevronRight className="ml-2 size-4 md:size-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works - Mobile Optimized Grid */}
        <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl md:blur-3xl opacity-70"></div>
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-2xl md:blur-3xl opacity-70"></div>

          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12 md:mb-16 space-y-4 md:space-y-6"
            >
              <Badge
                className="rounded-full px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-medium"
                variant="secondary"
              >
                How It Works
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white-purple-gradient">
                Powerful Protection,
                <br />
                <span className="text-purple-glow-strong">Simplified</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                SeiShield combines cutting-edge technology with user-centric design to deliver unparalleled security and
                insights for your SEI investments.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {illustrationCards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className={`${i === 0 || i === 3 ? "md:col-span-2 lg:col-span-2" : ""}`}
                >
                  <Card
                    className={`h-full overflow-hidden border-border/40 bg-gradient-to-br from-background to-primary/5 backdrop-blur transition-all hover:shadow-xl hover:scale-[1.02]`}
                  >
                    <CardContent
                      className={`p-4 md:p-6 ${i === 0 || i === 3 ? "lg:p-8" : ""} flex flex-col h-full text-center`}
                    >
                      <div
                        className={`mb-4 md:mb-6 flex items-center justify-center rounded-xl md:rounded-2xl bg-primary/10 dark:bg-primary/20 mx-auto ${
                          i === 0 || i === 3 ? "size-16 md:size-20" : "size-12 md:size-16"
                        }`}
                      >
                        {card.icon}
                      </div>
                      <h3
                        className={`font-bold mb-3 md:mb-4 text-foreground ${
                          i === 0 || i === 3 ? "text-xl md:text-2xl lg:text-3xl" : "text-lg md:text-xl lg:text-2xl"
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-muted-foreground leading-relaxed ${
                          i === 0 || i === 3 ? "text-base md:text-lg" : "text-sm md:text-base"
                        }`}
                      >
                        {card.description}
                      </p>
                      {(i === 0 || i === 3) && (
                        <div className="mt-4 md:mt-6">
                          <Button
                            variant="ghost"
                            className="text-purple-glow hover:text-purple-glow hover:bg-purple-glow/10 p-0 text-sm md:text-base"
                          >
                            Learn More
                            <ArrowRight className="ml-2 size-4" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Roadmap - Mobile Optimized Timeline */}
        <section id="roadmap" className="w-full py-12 md:py-16 lg:py-24 xl:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12 md:mb-20 space-y-4 md:space-y-6"
            >
              <Badge
                className="rounded-full px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-medium"
                variant="secondary"
              >
                Roadmap
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white-purple-gradient">
                SeiShield
                <br />
                <span className="text-purple-glow-strong">Evolution</span>
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover how SeiShield evolves over time to provide the most comprehensive protection on the SEI
                network.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line - Hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

              <div className="space-y-8 md:space-y-12 lg:space-y-16">
                {roadmapMilestones.map((milestone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className={`grid lg:grid-cols-12 gap-6 md:gap-8 items-center ${i % 2 === 0 ? "" : "lg:grid-flow-col-dense"}`}
                  >
                    {/* Timeline dot - Hidden on mobile */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                    {/* Content */}
                    <div className={`lg:col-span-5 ${i % 2 === 0 ? "" : "lg:col-start-8"}`}>
                      <Card className="overflow-hidden border-border/40 bg-gradient-to-br from-background to-muted/10 backdrop-blur">
                        <CardContent className="p-4 md:p-6 lg:p-8">
                          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                            <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary text-primary-foreground">
                              {milestone.icon}
                            </div>
                            <div>
                              <div className="text-xs md:text-sm font-medium text-primary mb-1">Phase {i + 1}</div>
                              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                                {milestone.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Visual placeholder */}
                    <div
                      className={`lg:col-span-6 ${i % 2 === 0 ? "lg:col-start-7" : "lg:col-start-1"} hidden lg:block`}
                    >
                      <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/40">
                        <Image
                          src={`/placeholder.svg?height=300&width=500&query=roadmap phase ${i + 1} visualization`}
                          width={500}
                          height={300}
                          alt={`Phase ${i + 1} visualization`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12 md:mt-20">
              <Link href="/roadmap">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 md:h-14 px-8 md:px-10 text-base md:text-lg bg-transparent text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white"
                >
                  View Full Roadmap
                  <ChevronRight className="ml-2 size-4 md:size-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Security - Mobile Optimized */}
        <section id="security" className="w-full py-12 md:py-16 lg:py-24 xl:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl md:blur-3xl opacity-70"></div>
          <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 -z-10 h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-2xl md:blur-3xl opacity-70"></div>

          <div className="container px-4">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Visual - Mobile First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6 order-2 lg:order-1"
              >
                <div className="relative">
                  <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/40">
                    <Image
                      src="/placeholder.svg?height=600&width=600"
                      width={600}
                      height={600}
                      alt="Security visualization"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-green-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                    100% Secure
                  </div>
                </div>
              </motion.div>

              {/* Content - Mobile First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-6 space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left"
              >
                <div className="space-y-4 md:space-y-6">
                  <Badge
                    className="rounded-full px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-medium"
                    variant="secondary"
                  >
                    <ShieldCheck className="size-3 md:size-4 mr-1 md:mr-2" />
                    Security First
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white-purple-gradient">
                    How We Keep
                    <br />
                    <span className="text-purple-glow-strong">You Safe</span>
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    SeiShield is built with your security as the top priority, ensuring complete peace of mind while you
                    navigate the SEI ecosystem.
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  {securityPoints.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-background to-muted/10 border border-border/40 text-left"
                    >
                      <div className="flex-shrink-0 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary h-12 w-12">
                        {point.icon}
                      </div>
                      <div className="space-y-1 md:space-y-2">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground">{point.title}</h3>
                        <p className="text-sm md:text-base text-muted-foreground">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Link href="/security">
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base bg-transparent text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white"
                    >
                      Learn More About Security
                      <ChevronRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ - Mobile Optimized */}
        <section id="faq" className="w-full py-12 md:py-16 lg:py-24 xl:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
              {/* Header - Mobile First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-5 space-y-4 md:space-y-6 text-center lg:text-left"
              >
                <Badge
                  className="rounded-full px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-medium"
                  variant="secondary"
                >
                  FAQ
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white-purple-gradient">
                  Got
                  <br />
                  <span className="text-purple-glow-strong">Questions?</span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Find answers to common questions about SeiShield and how our advanced protection system works to keep
                  your investments safe.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Link href="/faq">
                    <Button
                      size="lg"
                      className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base btn-purple-glow"
                    >
                      View All FAQs
                      <ChevronRight className="ml-2 size-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* FAQ Accordion - Mobile Optimized */}
              <div className="lg:col-span-7">
                <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                  {faqSamples.map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <AccordionItem
                        value={`item-${i}`}
                        className="border border-border/40 rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-background to-muted/10"
                      >
                        <AccordionTrigger className="text-left font-semibold hover:no-underline text-base md:text-lg text-foreground py-4 md:py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4 md:pb-6 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Docs CTA - Mobile Optimized */}
        <section
          id="docs"
          className="w-full py-12 md:py-16 lg:py-20 xl:py-32 text-primary-foreground relative overflow-hidden bg-[rgba(39,23,88,1)]"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-12 -left-12 md:-top-24 md:-left-24 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-2xl md:blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 md:-bottom-24 md:-right-24 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full blur-2xl md:blur-3xl"></div>

          <div className="container relative px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-5xl mx-auto space-y-6 md:space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">
                Ready to Dive Deeper?
              </h2>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Explore our comprehensive documentation to learn how SeiShield integrates with SEI endpoints, RPC, REST,
                and how Grok AI analyzes community risk patterns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center pt-2 md:pt-4">
                <Link href="/docs">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-full h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-semibold w-full sm:w-auto"
                  >
                    Read Documentation
                    <ArrowRight className="ml-2 size-4 md:size-5" />
                  </Button>
                </Link>
                <Link href="/app">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-semibold border-white/20 text-white hover:bg-white hover:text-primary bg-transparent w-full sm:w-auto"
                  >
                    Try SeiShield Now
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
