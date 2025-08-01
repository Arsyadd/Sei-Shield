"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, HelpCircle, MessageSquare, Search, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  const popularFaqs = [
    {
      question: "What is SeiShield?",
      answer:
        "SeiShield is an autonomous SEI meme coin guardian that helps you analyze, track, and stay ahead in the SEI network. It provides AI-powered risk scores and detects potential scams.",
      category: "General",
    },
    {
      question: "How does SeiShield get real-time data?",
      answer: "We use Sei RPC & REST and DEX Screener for fast on-chain data to provide real-time insights.",
      category: "Technical",
    },
    {
      question: "Do I need to connect my wallet to use SeiShield?",
      answer:
        "No, SeiShield operates on a zero-custody basis. You don't need to connect a wallet to scan tokens or monitor wallets. Your private keys are never stored.",
      category: "Security",
    },
    {
      question: "What is Grok AI's role in SeiShield?",
      answer:
        "Grok AI is integrated into SeiShield to analyze X/Twitter community signals, gauge sentiment, assess meme coin risks, and detect organic growth patterns.",
      category: "AI Features",
    },
  ]

  const additionalFaqs = [
    {
      question: "Can I set up custom alerts?",
      answer:
        "Yes, SeiShield allows you to set personalized notifications for whale movements, liquidity changes, and new token listings, ensuring you never miss critical market events.",
      category: "Features",
    },
    {
      question: "Is SeiShield open-source?",
      answer:
        "Our core scanning logic is open-source, fostering trust and enabling community audit and verification of our security measures.",
      category: "Development",
    },
    {
      question: "What kind of scams can SeiShield detect?",
      answer:
        "SeiShield is designed to identify potential rug pulls, honeypots, malicious contracts, and other suspicious activities before they impact your investments.",
      category: "Security",
    },
    {
      question: "How does SeiShield protect my privacy?",
      answer:
        "SeiShield operates with zero-custody, meaning we never store your private keys. All analysis is based on public on-chain data, and no third-party data storage is involved.",
      category: "Privacy",
    },
    {
      question: "What is the future roadmap for SeiShield?",
      answer:
        "Our roadmap includes phases like advanced analytics, cross-chain expansion, and community governance to continuously evolve and provide the best protection on the SEI network.",
      category: "Roadmap",
    },
    {
      question: "How accurate are the AI risk scores?",
      answer:
        "Our AI risk scores are continuously improved through machine learning and community feedback. While highly accurate, they should be used as one factor in your investment decisions.",
      category: "AI Features",
    },
    {
      question: "Can SeiShield track multiple wallets simultaneously?",
      answer:
        "Yes, SeiShield can monitor multiple wallets at once, providing real-time alerts for suspicious activities across all tracked addresses.",
      category: "Features",
    },
    {
      question: "Is there a mobile app for SeiShield?",
      answer:
        "Currently, SeiShield is available as a web application optimized for both desktop and mobile browsers. A dedicated mobile app is planned for future releases.",
      category: "Platform",
    },
  ]

  const categories = [
    { name: "General", icon: <HelpCircle className="w-4 h-4" />, count: 3 },
    { name: "Security", icon: <MessageSquare className="w-4 h-4" />, count: 4 },
    { name: "Features", icon: <Star className="w-4 h-4" />, count: 2 },
    { name: "AI Features", icon: <Users className="w-4 h-4" />, count: 2 },
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
                <HelpCircle className="w-4 h-4 mr-2" />
                FAQ
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white-purple-gradient leading-tight">
                Frequently Asked
                <br />
                <span className="text-purple-glow-strong">Questions</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Find quick answers to common questions about SeiShield, its features, security, and how it works.
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

        {/* Categories Overview */}
        <section className="w-full py-16 md:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container relative px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12 space-y-6"
            >
              <Badge className="rounded-full px-4 py-2 text-sm font-medium" variant="secondary">
                <Search className="w-4 h-4 mr-2" />
                Browse by Category
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white-purple-gradient">
                Find What You Need
              </h2>
            </motion.div>

            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16">
              {categories.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-xl hover:scale-[1.02] group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} questions</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular FAQs - Featured Layout */}
        <section className="w-full py-16 md:py-20 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:1rem_1rem] md:bg-[size:2rem_2rem] lg:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 -z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
          <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 -z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>

          <div className="container relative px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16 space-y-6"
            >
              <Badge className="rounded-full px-4 py-2 text-sm font-medium" variant="secondary">
                <Star className="w-4 h-4 mr-2" />
                Most Popular
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                Top Questions
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                The most frequently asked questions about SeiShield and its features.
              </p>
            </motion.div>

            <div className="mx-auto max-w-4xl">
              <Accordion type="single" collapsible className="w-full space-y-6">
                {popularFaqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <AccordionItem
                      value={`popular-${i}`}
                      className="border border-border/40 rounded-2xl px-6 py-2 bg-gradient-to-r from-background to-muted/10 backdrop-blur shadow-sm"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:no-underline text-lg text-foreground py-6 group">
                        <div className="flex items-start gap-4 text-left">
                          <Badge variant="secondary" className="text-xs px-2 py-1 mt-1 flex-shrink-0">
                            {faq.category}
                          </Badge>
                          <span className="group-hover:text-primary transition-colors">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed pl-20">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* All FAQs Section - Two Column Layout */}
        <section id="all-faqs" className="w-full py-16 md:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
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
                <MessageSquare className="w-4 h-4 mr-2" />
                Complete Guide
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white-purple-gradient">
                All Your Questions Answered
              </h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Browse through our comprehensive list of frequently asked questions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {additionalFaqs.slice(0, Math.ceil(additionalFaqs.length / 2)).map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <AccordionItem
                        value={`additional-1-${i}`}
                        className="border border-border/40 rounded-xl px-6 py-2 bg-gradient-to-r from-background to-muted/10"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline text-base text-foreground py-6">
                          <div className="flex items-start gap-3 text-left">
                            <Badge variant="outline" className="text-xs px-2 py-1 mt-1 flex-shrink-0">
                              {faq.category}
                            </Badge>
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm pb-6 leading-relaxed pl-16">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </div>

              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {additionalFaqs.slice(Math.ceil(additionalFaqs.length / 2)).map((faq, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (i + Math.ceil(additionalFaqs.length / 2)) * 0.05 }}
                    >
                      <AccordionItem
                        value={`additional-2-${i}`}
                        className="border border-border/40 rounded-xl px-6 py-2 bg-gradient-to-r from-background to-muted/10"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline text-base text-foreground py-6">
                          <div className="flex items-start gap-3 text-left">
                            <Badge variant="outline" className="text-xs px-2 py-1 mt-1 flex-shrink-0">
                              {faq.category}
                            </Badge>
                            <span>{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-sm pb-6 leading-relaxed pl-16">
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
                Still Have Questions?
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-white/80">
                Contact our support team or launch the app to explore SeiShield directly.
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
