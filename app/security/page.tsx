"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Lock,
  GitFork,
  ShieldCheck,
  ShieldAlert,
  Brain,
  Activity,
  BellRing,
  Shield,
  Eye,
  ArrowRight,
  Key,
  Database,
  Code,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function SecurityPage() {
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

  const mainSecurityFeatures = [
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero-Custody Security",
      description:
        "We never store your private keys. Your assets remain securely in your wallet at all times with complete self-custody control.",
      features: ["No key storage", "Self-custody", "Privacy protection", "Secure access"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <GitFork className="w-6 h-6" />,
      title: "Data Stays on SEI",
      description:
        "No third-party data storage. All analysis is based on public on-chain data from SEI network ensuring complete transparency.",
      features: ["On-chain data only", "No third parties", "SEI native", "Transparent analysis"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Full Transparency",
      description:
        "Our core scanner is open-source for community audit and verification of security measures with complete code visibility.",
      features: ["Open source", "Community audit", "Transparent code", "Verifiable security"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ]

  const additionalSecurityPoints = [
    {
      icon: <ShieldAlert className="w-5 h-5" />,
      title: "Proactive Threat Detection",
      description:
        "Identify potential rug pulls, honeypots, and malicious contracts before they impact your investments.",
      features: ["Threat detection", "Risk assessment", "Early warnings", "Protection alerts"],
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI-Powered Risk Scoring",
      description: "Leverage Grok AI for intelligent risk assessment of meme coins, identifying suspicious patterns.",
      features: ["AI analysis", "Risk scoring", "Pattern detection", "Smart insights"],
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of on-chain activity to detect and alert on unusual behavior.",
      features: ["24/7 monitoring", "Real-time alerts", "Activity tracking", "Instant notifications"],
    },
    {
      icon: <Key className="w-5 h-5" />,
      title: "Encrypted Communications",
      description: "All data transmission is encrypted using industry-standard protocols.",
      features: ["End-to-end encryption", "Secure protocols", "Data integrity", "Privacy first"],
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Minimal Data Collection",
      description: "We collect only essential data required for functionality, nothing more.",
      features: ["Data minimization", "Purpose limitation", "User consent", "Regular purging"],
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Regular Security Audits",
      description: "Continuous security assessments and code reviews by independent experts.",
      features: ["Third-party audits", "Vulnerability testing", "Code reviews", "Security updates"],
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
    {
      title: "Customizable Alerts",
      description: "Set personalized notifications for whale movements, liquidity changes, and token listings.",
      icon: <BellRing className="w-5 h-5 text-primary" />,
    },
    {
      title: "Transparent & Open-Source",
      description: "Our core scanning logic is open-source, fostering trust and community-driven security.",
      icon: <GitFork className="w-5 h-5 text-primary" />,
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
                <Shield className="w-4 h-4 mr-2" />
                Security
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white-purple-gradient leading-tight">
                Your Safety,
                <br />
                <span className="text-purple-glow-strong">Our Priority</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                SeiShield is built with robust security measures to protect your investments and privacy on the SEI
                network with enterprise-grade protection.
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

        {/* Main Security Features - Alternating Layout */}
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
                <Eye className="w-4 h-4 mr-2" />
                Core Security Principles
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                Uncompromising Protection
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Built on fundamental security principles that ensure your assets and data remain protected at all times.
              </p>
            </motion.div>

            <div className="space-y-16 md:space-y-24">
              {mainSecurityFeatures.map((feature, i) => (
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
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {feature.description}
                    </p>

                    {/* Feature List */}
                    <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center lg:justify-start">
                      <Button
                        variant="outline"
                        className="rounded-full px-6 py-3 text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white bg-transparent"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <div className="relative">
                      <div
                        className={`aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${feature.gradient} border border-border/40 backdrop-blur`}
                      >
                        <Image
                          src={`/placeholder.svg?height=400&width=600&query=${feature.title} security interface dashboard`}
                          width={600}
                          height={400}
                          alt={`${feature.title} visualization`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-green-500 px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg">
                        Secure
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Security Points - Asymmetric Grid */}
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
                <ShieldCheck className="w-4 h-4 mr-2" />
                Advanced Security
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                Comprehensive Protection
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Additional layers of security ensuring complete protection across all aspects of the platform.
              </p>
            </motion.div>

            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {additionalSecurityPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`${i === 0 ? "md:col-span-2 lg:col-span-1" : ""} ${i === 1 ? "lg:col-span-2" : ""}`}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-xl hover:scale-[1.02] group">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          {point.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-foreground">{point.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{point.description}</p>
                        </div>
                      </div>

                      {/* Feature List */}
                      <div className="grid grid-cols-2 gap-2 mt-auto">
                        {point.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Security in Action Section - Bento Grid */}
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
                Security in Action
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                How We Protect You
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Understanding the mechanisms that make SeiShield a trusted guardian for your SEI investments.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {illustrationCards.map((card, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  className={`${i === 0 || i === 3 ? "md:col-span-2 lg:col-span-1" : ""} ${i === 1 ? "lg:row-span-2" : ""}`}
                >
                  <Card
                    className={`h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-primary/5 backdrop-blur transition-all hover:shadow-xl hover:scale-[1.02] group ${i === 1 ? "lg:min-h-[400px]" : ""}`}
                  >
                    <CardContent className={`p-6 flex flex-col h-full text-center ${i === 1 ? "justify-center" : ""}`}>
                      <div
                        className={`mb-4 flex items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 mx-auto group-hover:rotate-12 transition-transform duration-300 ${i === 1 ? "w-16 h-16" : "w-12 h-12"}`}
                      >
                        {card.icon}
                      </div>
                      <h3 className={`font-bold mb-3 text-foreground ${i === 1 ? "text-2xl" : "text-xl"}`}>
                        {card.title}
                      </h3>
                      <p className={`text-muted-foreground leading-relaxed ${i === 1 ? "text-base" : "text-sm"}`}>
                        {card.description}
                      </p>
                      {i === 1 && (
                        <div className="mt-6">
                          <Button
                            variant="ghost"
                            className="text-purple-glow hover:text-purple-glow hover:bg-purple-glow/10 p-0"
                          >
                            Learn More
                            <ArrowRight className="ml-2 w-4 h-4" />
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
                Secure Your Investments Now
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/80">
                Launch the SeiShield app and experience unparalleled security for your meme coin portfolio.
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
