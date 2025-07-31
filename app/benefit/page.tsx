"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronRight,
  ArrowRight,
  Search,
  Wallet,
  BarChart,
  Users,
  ShieldAlert,
  BellRing,
  Lock,
  GitFork,
  CheckCircle,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function BenefitsPage() {
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

  const coreBenefits = [
    {
      title: "Smart Token Scanner",
      description: "Scan meme coins on SEI, get instant AI risk scores, and detect potential scams.",
      icon: <Search className="size-5" />,
    },
    {
      title: "Real-time Wallet Tracker",
      description: "Monitor inflows, outflows, and suspicious activity from large wallets.",
      icon: <Wallet className="size-5" />,
    },
    {
      title: "Automated Whale Alerts",
      description: "Detect sudden dumps & whale movements in real-time for quick decisions.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Grok AI Community Health Analysis",
      description: "Grok AI analyzes X/Twitter community signals to gauge sentiment and organic growth.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Proactive Threat Detection",
      description:
        "Identify potential rug pulls, honeypots, and malicious contracts before they impact your investments.",
      icon: <ShieldAlert className="size-5" />,
    },
    {
      title: "Zero-Custody Security",
      description: "We never store your private keys. Your assets remain securely in your wallet.",
      icon: <Lock className="size-5" />,
    },
    {
      title: "Customizable Alerts",
      description: "Set personalized notifications for whale movements, liquidity changes, and token listings.",
      icon: <BellRing className="size-5" />,
    },
    {
      title: "Transparent & Open-Source",
      description: "Our core scanning logic is open-source for community audit and verification.",
      icon: <GitFork className="size-5" />,
    },
  ]

  const comparisonFeatures = [
    {
      name: "Smart Token Scanner",
      seiShield: true,
      competitorA: false,
      competitorB: true,
    },
    {
      name: "Real-time Wallet Tracker",
      seiShield: true,
      competitorA: true,
      competitorB: false,
    },
    {
      name: "Automated Whale Alerts",
      seiShield: true,
      competitorA: false,
      competitorB: false,
    },
    {
      name: "Grok AI Community Analysis",
      seiShield: true,
      competitorA: false,
      competitorB: false,
    },
    {
      name: "Zero-Custody",
      seiShield: true,
      competitorA: true,
      competitorB: true,
    },
    {
      name: "Open-Source Core",
      seiShield: true,
      competitorA: false,
      competitorB: false,
    },
    {
      name: "Customizable Alerts",
      seiShield: true,
      competitorA: true,
      competitorB: false,
    },
  ]

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 -z-10 h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl md:blur-3xl opacity-70"></div>
        <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 -z-10 h-[150px] w-[150px] md:h-[300px] md:w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-2xl md:blur-3xl opacity-70"></div>

        <div className="container px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium mb-4" variant="secondary">
              Our Advantages
            </Badge>
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-white-purple-gradient leading-tight text-3xl">
              Unlock Unrivaled Protection & Insights
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              SeiShield offers a suite of powerful features designed to keep your investments safe and give you an edge
              in the dynamic SEI meme coin market.
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
          </motion.div>
        </div>
      </section>

      {/* Core Benefits Section */}
      <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Core Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white-purple-gradient">
              Comprehensive Protection & Market Edge
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              SeiShield provides a robust set of tools to safeguard your assets and empower your trading decisions.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-auto" // Added mx-auto for centering
          >
            {coreBenefits.map((benefit, i) => (
              <motion.div key={i} variants={item}>
                <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02]">
                  <CardContent className="p-6 flex flex-col h-full items-center text-center">
                    {" "}
                    {/* Added items-center and text-center */}
                    <div className="size-12 rounded-full bg-primary/15 dark:bg-primary/25 flex items-center justify-center text-primary mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
        <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          >
            <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
              Comparison
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white-purple-gradient">
              SeiShield vs. Any Competitors
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              See how SeiShield stands out with its unique features and commitment to user security.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 md:p-4 text-left text-sm md:text-base font-semibold text-foreground rounded-tl-lg">
                    Feature
                  </th>
                  <th className="p-3 md:p-4 text-center text-sm md:text-base font-semibold text-foreground">
                    SeiShield
                  </th>
                  <th className="p-3 md:p-4 text-center text-sm md:text-base font-semibold text-foreground">
                    Competitor
                  </th>
                  <th className="p-3 md:p-4 text-center text-sm md:text-base font-semibold text-foreground rounded-tr-lg">
                    Competitor
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="border-b border-border/40 last:border-b-0">
                    <td className="p-3 md:p-4 text-sm md:text-base text-muted-foreground font-medium">
                      {feature.name}
                    </td>
                    <td className="p-3 md:p-4 text-center">
                      {feature.seiShield ? (
                        <CheckCircle className="size-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="size-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-3 md:p-4 text-center">
                      {feature.competitorA ? (
                        <CheckCircle className="size-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="size-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="p-3 md:p-4 text-center">
                      {feature.competitorB ? (
                        <CheckCircle className="size-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="size-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/docs">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base bg-transparent text-purple-glow border-purple-glow hover:bg-purple-glow hover:text-white"
              >
                Read Our Whitepaper
                <ChevronRight className="ml-1 size-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="cta"
        className="w-full py-20 md:py-32 bg-[rgba(39,23,88,1)] text-primary-foreground relative overflow-hidden"
      >
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-6 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ready to Experience SeiShield?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
              Join the growing community of SEI users who trust SeiShield for their meme coin security and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/app">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base"
                >
                  Launch SeiShield App
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
