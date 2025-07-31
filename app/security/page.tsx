"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Lock,
  GitFork,
  ShieldCheck,
  Database,
  Key,
  Fingerprint,
  Activity,
  AlertTriangle,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

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

  const securityPrinciples = [
    {
      title: "Zero-Custody",
      description: "We never store your private keys. Your assets remain securely in your wallet.",
      icon: <Lock className="size-5" />,
    },
    {
      title: "Data Stays on SEI",
      description: "No third-party data storage. All analysis is based on public on-chain data.",
      icon: <Database className="size-5" />,
    },
    {
      title: "Full Transparency",
      description: "Our core scanner is open-source for community audit and verification.",
      icon: <GitFork className="size-5" />,
    },
    {
      title: "Advanced Encryption",
      description: "All communications and sensitive data are protected with industry-leading encryption.",
      icon: <Key className="size-5" />,
    },
    {
      title: "Multi-Factor Authentication",
      description: "Secure your account with an additional layer of protection.",
      icon: <Fingerprint className="size-5" />,
    },
    {
      title: "Regular Security Audits",
      description: "We conduct frequent internal and external audits to ensure robust security.",
      icon: <ShieldCheck className="size-5" />,
    },
  ]

  const threatDetectionFeatures = [
    {
      title: "Real-time Anomaly Detection",
      description: "Instantly identify unusual patterns in transactions and contract interactions.",
      icon: <Activity className="size-5" />,
    },
    {
      title: "Honeypot & Rug Pull Detection",
      description: "Automated analysis to flag contracts exhibiting characteristics of scams.",
      icon: <AlertTriangle className="size-5" />,
    },
    {
      title: "Vulnerability Scanning",
      description: "Proactive scanning of smart contract code for known vulnerabilities.",
      icon: <FileText className="size-5" />,
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
              Security
            </Badge>
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-white-purple-gradient leading-tight text-3xl">
              Your Safety, Our Priority
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              SeiShield is built on a foundation of robust security principles, ensuring your peace of mind in the SEI
              ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
              <Link href="/docs">
                <Button
                  size="lg"
                  className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base btn-purple-glow border-0 w-full sm:w-auto"
                >
                  Read Our Whitepaper
                  <ChevronRight className="ml-2 size-3 md:size-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Principles Section */}
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
              Our Principles
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white-purple-gradient">
              Foundational Security Principles
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              SeiShield adheres to strict security protocols to ensure the integrity and safety of your digital assets.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto" // Added mx-auto for centering
          >
            {securityPrinciples.map((principle, i) => (
              <motion.div key={i} variants={item}>
                <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02]">
                  <CardContent className="p-6 flex flex-col h-full items-center text-center">
                    {" "}
                    {/* Added items-center and text-center */}
                    <div className="size-12 rounded-full bg-primary/15 dark:bg-primary/25 flex items-center justify-center text-primary mb-4">
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{principle.title}</h3>
                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Threat Detection Section */}
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
              Threat Detection
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white-purple-gradient">
              Proactive Threat Identification
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Our advanced systems continuously monitor the SEI network to detect and alert you to potential threats.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 mx-auto" // Added mx-auto for centering
          >
            {threatDetectionFeatures.map((feature, i) => (
              <motion.div key={i} variants={item}>
                <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-primary/5 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02]">
                  <CardContent className="p-6 flex flex-col h-full items-center text-center">
                    {" "}
                    {/* Added items-center and text-center */}
                    <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Metrics Section */}
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
              Metrics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white-purple-gradient">
              Our Commitment to Security
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Transparency in our security performance and continuous improvement.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {" "}
            {/* Added mx-auto for centering */}
            <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
              <CardHeader className="text-center">
                {" "}
                {/* Added text-center */}
                <CardTitle className="text-xl">Vulnerability Scan Coverage</CardTitle>
                <CardDescription className="text-sm">Percentage of code scanned for vulnerabilities.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-foreground">98%</span>
                  <span className="text-sm text-muted-foreground">Industry Average: 85%</span>
                </div>
                <Progress value={98} className="h-2" />
              </CardContent>
            </Card>
            <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
              <CardHeader className="text-center">
                {" "}
                {/* Added text-center */}
                <CardTitle className="text-xl">Real-time Threat Alerts</CardTitle>
                <CardDescription className="text-sm">Average time to detect and alert on threats.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-foreground">{"< 10 seconds"}</span>
                  <span className="text-sm text-muted-foreground">Industry Average: 60 seconds</span>
                </div>
                <Progress value={90} className="h-2" /> {/* Representing speed */}
              </CardContent>
            </Card>
            <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
              <CardHeader className="text-center">
                {" "}
                {/* Added text-center */}
                <CardTitle className="text-xl">Uptime & Reliability</CardTitle>
                <CardDescription className="text-sm">Our system's operational availability.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-foreground">99.99%</span>
                  <span className="text-sm text-muted-foreground">Industry Standard: 99.9%</span>
                </div>
                <Progress value={99.99} className="h-2" />
              </CardContent>
            </Card>
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
              Protect Your Investments Today
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
              Join thousands of users who trust SeiShield to safeguard their digital assets on the SEI network.
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
