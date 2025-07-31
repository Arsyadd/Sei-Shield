"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Search,
  FileText,
  Code,
  Lightbulb,
  HelpCircle,
  Rocket,
  Wallet,
  BarChart,
  ShieldCheck,
  BellRing,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

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

  const docCategories = [
    {
      title: "Getting Started",
      description: "Learn how to set up and start using SeiShield.",
      icon: <Rocket className="size-5" />,
      link: "/app", // Changed from "#" to "/app"
    },
    {
      title: "Token Scanner",
      description: "Detailed guide on using the smart token scanner.",
      icon: <Search className="size-5" />,
      link: "/app", // Changed from "#" to "/app"
    },
    {
      title: "Wallet Tracker",
      description: "Understand how to monitor wallets and detect suspicious activity.",
      icon: <Wallet className="size-5" />,
      link: "/app", // Changed from "#" to "/app"
    },
    {
      title: "Whale Alerts",
      description: "Configure and receive real-time whale movement alerts.",
      icon: <BarChart className="size-5" />,
      link: "/app", // Changed from "#" to "/app"
    },
    {
      title: "Grok AI Integration",
      description: "Explore how Grok AI enhances community health analysis.",
      icon: <Lightbulb className="size-5" />,
      link: "/app", // Changed from "#" to "/app"
    },
    {
      title: "API Reference",
      description: "Documentation for developers integrating with SeiShield API.",
      icon: <Code className="size-5" />,
      link: "/app", // Changed from "#" to "/app"
    },
    {
      title: "Security Best Practices",
      description: "Tips and guidelines for maximizing your security on SEI.",
      icon: <ShieldCheck className="size-5" />,
      link: "/app", // Changed from "#" to "/app"
    },
    {
      title: "Troubleshooting",
      description: "Solutions to common issues and frequently asked questions.",
      icon: <HelpCircle className="size-5" />,
      link: "/app", // Changed from "#" to "/app"
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
              Documentation
            </Badge>
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-white-purple-gradient leading-tight text-3xl">
              Comprehensive Guides & API Reference
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Dive deep into how SeiShield works, from core functionalities to advanced integrations.
            </p>
            <div className="relative max-w-md mx-auto">
              {" "}
              {/* Added mx-auto for centering */}
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="w-full pl-10 pr-4 py-2 rounded-full h-12 text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation Categories */}
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
              Explore Topics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white-purple-gradient">
              Find What You Need
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Browse through our organized documentation categories to quickly find answers and guides.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-auto" // Added mx-auto for centering
          >
            {docCategories.map((category, i) => (
              <motion.div key={i} variants={item}>
                <Link href={category.link} className="block h-full">
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02]">
                    <CardContent className="p-6 flex flex-col h-full items-center text-center">
                      {" "}
                      {/* Added items-center and text-center */}
                      <div className="size-12 rounded-full bg-primary/15 dark:bg-primary/25 flex items-center justify-center text-primary mb-4">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{category.title}</h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Articles Section */}
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
              Featured
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Popular Articles & Guides
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-lg">
              Check out our most frequently accessed and helpful documentation articles.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto" // Added mx-auto for centering
          >
            {[
              {
                title: "Understanding SEI Meme Coin Risks",
                description: "A deep dive into common risks and how SeiShield identifies them.",
                icon: <FileText className="size-5" />,
              },
              {
                title: "Setting Up Real-time Alerts",
                description: "Step-by-step guide to configuring custom whale and liquidity alerts.",
                icon: <BellRing className="size-5" />,
              },
              {
                title: "Integrating SeiShield API",
                description: "For developers: connect your dApps with SeiShield's powerful API.",
                icon: <Code className="size-5" />,
              },
            ].map((article, i) => (
              <motion.div key={i} variants={item}>
                <Link href="/app" className="block h-full">
                  {" "}
                  {/* Changed from "#" to "/app" */}
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-primary/5 backdrop-blur transition-all hover:shadow-lg hover:scale-[1.02]">
                    <CardContent className="p-6 flex flex-col h-full items-center text-center">
                      {" "}
                      {/* Added items-center and text-center */}
                      <div className="size-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {article.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{article.title}</h3>
                      <p className="text-muted-foreground text-sm">{article.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section
        id="support-cta"
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">Need More Help?</h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
              If you can't find what you're looking for, our support team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center">
              {" "}
              {/* Added justify-center */}
              <Link href="/app">
                {" "}
                {/* Changed from "/contact" to "/app" */}
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-full h-10 md:h-12 px-6 md:px-8 text-sm md:text-base"
                >
                  Contact Support
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
