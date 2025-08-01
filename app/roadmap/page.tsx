"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Rocket,
  Lightbulb,
  Zap,
  GitFork,
  Activity,
  Brain,
  ShieldAlert,
  BellRing,
  Users,
  Map,
  Target,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function RoadmapPage() {
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

  const roadmapMilestones = [
    {
      step: "01",
      title: "Phase 1: Core Launch",
      description:
        "Launch of the foundational token scanner, wallet tracker, and basic whale alert system with real-time monitoring capabilities.",
      icon: <Rocket className="w-6 h-6" />,
      status: "completed",
      timeline: "Q1 2025",
      features: ["Token Scanner", "Wallet Tracker", "Basic Alerts", "SEI Integration"],
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      step: "02",
      title: "Phase 2: Grok AI Integration",
      description:
        "Integration of Grok AI for deeper community sentiment analysis and risk assessment with advanced natural language processing.",
      icon: <Lightbulb className="w-6 h-6" />,
      status: "progress",
      timeline: "Q2 2025",
      features: ["Grok AI Integration", "Sentiment Analysis", "Risk Assessment", "Community Health"],
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      step: "03",
      title: "Phase 3: Autonomous Agent",
      description:
        "Development of a full suspicious wallet tracker & rules-based agent for proactive protection and automated responses.",
      icon: <Zap className="w-6 h-6" />,
      status: "planned",
      timeline: "Q3 2025",
      features: ["Autonomous Agent", "Rules Engine", "Proactive Protection", "Advanced Alerts"],
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      step: "04",
      title: "Phase 4: Advanced Analytics",
      description:
        "Introduction of more sophisticated data visualization and predictive analytics for market trends and investment insights.",
      icon: <Activity className="w-6 h-6" />,
      status: "planned",
      timeline: "Q4 2025",
      features: ["Data Visualization", "Predictive Analytics", "Market Trends", "Advanced Dashboards"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      step: "05",
      title: "Phase 5: Cross-Chain Expansion",
      description:
        "Explore integration with other blockchain networks to extend SeiShield's protection capabilities across multiple ecosystems.",
      icon: <GitFork className="w-6 h-6" />,
      status: "future",
      timeline: "Q1 2025",
      features: ["Multi-Chain Support", "Cross-Chain Analytics", "Expanded Coverage", "Universal Protection"],
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      step: "06",
      title: "Phase 6: Community Governance",
      description:
        "Implement a decentralized governance model, allowing the community to shape future development and protocol decisions.",
      icon: <Users className="w-6 h-6" />,
      status: "future",
      timeline: "Q2 2025",
      features: ["DAO Governance", "Community Voting", "Decentralized Decisions", "Token Economics"],
      gradient: "from-teal-500/20 to-green-500/20",
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
      title: "Customizable Alerts",
      description: "Set personalized notifications for whale movements, liquidity changes, and token listings.",
      icon: <BellRing className="w-5 h-5 text-primary" />,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "progress":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20"
      case "planned":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "future":
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
      default:
        return "bg-primary/10 text-primary border-primary/20"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      case "progress":
        return <Clock className="w-4 h-4" />
      case "planned":
        return <Calendar className="w-4 h-4" />
      case "future":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Calendar className="w-4 h-4" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "progress":
        return "In Progress"
      case "planned":
        return "Planned"
      case "future":
        return "Future"
      default:
        return "Unknown"
    }
  }

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
                <Map className="w-4 h-4 mr-2" />
                Roadmap
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white-purple-gradient leading-tight">
                SeiShield Evolution:
                <br />
                <span className="text-purple-glow-strong">Our Path Forward</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Explore the exciting journey of SeiShield, from core features to future innovations, designed to enhance
                your protection on the SEI network.
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

        {/* Full Roadmap Section - Alternating Layout */}
        <section id="full-roadmap" className="w-full py-16 md:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
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
                <Target className="w-4 h-4 mr-2" />
                Development Journey
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                Detailed Roadmap Milestones
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                A comprehensive overview of SeiShield's evolution, from foundational features to cutting-edge
                innovations.
              </p>
            </motion.div>

            <div className="space-y-16 md:space-y-24">
              {roadmapMilestones.map((milestone, i) => (
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
                      {milestone.icon}
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 justify-center lg:justify-start">
                        <Badge
                          className={`rounded-full px-3 py-1 text-xs font-medium border flex items-center gap-2 ${getStatusColor(
                            milestone.status,
                          )}`}
                        >
                          {getStatusIcon(milestone.status)}
                          {getStatusText(milestone.status)}
                        </Badge>
                        <Badge variant="outline" className="text-xs px-3 py-1">
                          {milestone.timeline}
                        </Badge>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">{milestone.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Feature List */}
                    <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
                      {milestone.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          {feature}
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
                        className={`aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${milestone.gradient} border border-border/40 backdrop-blur`}
                      >
                        <Image
                          src={`/placeholder.svg?height=400&width=600&query=roadmap phase ${i + 1} ${milestone.title} visualization dashboard`}
                          width={600}
                          height={400}
                          alt={`Phase ${i + 1} visualization`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-primary px-4 py-2 rounded-full text-sm font-medium text-white shadow-lg">
                        Phase {i + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Technologies Section - Bento Grid */}
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
                <Activity className="w-4 h-4 mr-2" />
                Core Technologies
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                Powering Our Progress
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                The key technologies and principles driving SeiShield&apos;s development and future innovations.
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
                    className={`h-full overflow-hidden border-border/40 bg-gradient-to-br from-background to-primary/5 backdrop-blur transition-all hover:shadow-xl hover:scale-[1.02] group ${i === 1 ? "lg:min-h-[300px]" : ""}`}
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
                            Explore Technology
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">Join Our Journey</h2>
              <p className="mx-auto max-w-3xl text-lg text-white/80">
                Be a part of the SeiShield community and help shape the future of secure meme coin investing.
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
