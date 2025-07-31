"use client"
import Link from "next/link"
import { CardDescription } from "@/components/ui/card"

import { CardTitle } from "@/components/ui/card"

import { motion } from "framer-motion"
import {
  ChevronRight,
  Rocket,
  Lightbulb,
  Zap,
  ShieldCheck,
  Users,
  BarChart,
  Code,
  Globe,
  Activity,
  Brain,
  BellRing,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

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

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Core Launch & Foundational Tools",
      description: "Establish the bedrock of SeiShield with essential security and analysis tools for the SEI network.",
      milestones: [
        {
          name: "Smart Token Scanner V1",
          date: "Q1 2024",
          status: "Completed",
          icon: <Rocket className="size-4" />,
        },
        {
          name: "Real-time Wallet Tracker",
          date: "Q1 2024",
          status: "Completed",
          icon: <Activity className="size-4" />,
        },
        {
          name: "Basic Whale Alert System",
          date: "Q1 2024",
          status: "Completed",
          icon: <BarChart className="size-4" />,
        },
        {
          name: "Initial UI/UX Design",
          date: "Q1 2024",
          status: "Completed",
          icon: <Lightbulb className="size-4" />,
        },
      ],
    },
    {
      phase: "Phase 2",
      title: "AI Integration & Enhanced Insights",
      description:
        "Integrate advanced AI capabilities to provide deeper market insights and community sentiment analysis.",
      milestones: [
        {
          name: "Grok AI Community Health Analysis",
          date: "Q2 2024",
          status: "In Progress",
          icon: <Brain className="size-4" />,
        },
        {
          name: "AI-Powered Risk Scoring",
          date: "Q2 2024",
          status: "In Progress",
          icon: <ShieldCheck className="size-4" />,
        },
        {
          name: "Customizable Alert System V2",
          date: "Q2 2024",
          status: "Planned",
          icon: <BellRing className="size-4" />,
        },
        {
          name: "User Dashboard Enhancements",
          date: "Q2 2024",
          status: "Planned",
          icon: <Users className="size-4" />,
        },
      ],
    },
    {
      phase: "Phase 3",
      title: "Autonomous Agent & Ecosystem Expansion",
      description:
        "Develop a fully autonomous protection agent and expand SeiShield's reach within the broader DeFi ecosystem.",
      milestones: [
        {
          name: "Autonomous Suspicious Wallet Tracker",
          date: "Q3 2024",
          status: "Planned",
          icon: <Zap className="size-4" />,
        },
        {
          name: "Rules-Based Protection Agent",
          date: "Q3 2024",
          status: "Planned",
          icon: <ShieldCheck className="size-4" />,
        },
        {
          name: "Cross-Chain Compatibility Research",
          date: "Q4 2024",
          status: "Research",
          icon: <Globe className="size-4" />,
        },
        {
          name: "SeiShield API Public Release",
          date: "Q4 2024",
          status: "Planned",
          icon: <Code className="size-4" />,
        },
      ],
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
              Roadmap
            </Badge>
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-white-purple-gradient leading-tight text-3xl">
              SeiShield's Journey: Our Vision & Milestones
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the exciting future of SeiShield as we evolve to provide unparalleled protection and insights for
              the SEI network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Timeline Section */}
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
              Our Path Forward
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white-purple-gradient">
              Key Phases & Milestones
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              A detailed look at our development roadmap, outlining past achievements and future goals.
            </p>
          </motion.div>

          <div className="relative space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-12 mx-auto">
            {" "}
            {/* Added mx-auto for centering */}
            {/* Vertical line for mobile, horizontal for desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/50 md:hidden"></div>
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0"></div>
            {roadmapPhases.map((phase, phaseIndex) => (
              <motion.div
                key={phaseIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
                className={`relative z-10 flex flex-col items-center text-center space-y-4 ${
                  phaseIndex % 2 === 1 ? "md:mt-16" : ""
                }`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg mb-4">
                  {phase.phase.split(" ")[1]}
                </div>
                <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
                <div className="w-full space-y-3 mt-6">
                  {phase.milestones.map((milestone, milestoneIndex) => (
                    <Card
                      key={milestoneIndex}
                      className="p-4 text-left border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur"
                    >
                      <CardTitle className="text-base font-semibold flex items-center gap-2 justify-center md:justify-start">
                        {" "}
                        {/* Added justify-center for mobile */}
                        {milestone.icon}
                        {milestone.name}
                      </CardTitle>
                      <CardDescription className="text-xs text-muted-foreground mt-1 text-center md:text-left">
                        {" "}
                        {/* Added text-center for mobile */}
                        {milestone.date} -{" "}
                        <Badge
                          variant="outline"
                          className={`px-2 py-0.5 text-xs ${
                            milestone.status === "Completed"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : milestone.status === "In Progress"
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          }`}
                        >
                          {milestone.status}
                        </Badge>
                      </CardDescription>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/app">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base"
              >
                Launch SeiShield App
                <ChevronRight className="ml-2 size-4" />
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">Join Our Journey</h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
              Be a part of the SeiShield community and contribute to the future of DeFi security on SEI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
              {" "}
              {/* Added justify-center */}
              <Link href="/app">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base"
                >
                  Launch SeiShield App
                  <ChevronRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
