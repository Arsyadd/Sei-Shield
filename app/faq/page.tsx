"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { HelpCircle, Mail, Code, ShieldCheck, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function FAQPage() {
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

  const faqCategories = [
    {
      title: "General Questions",
      description: "Common inquiries about SeiShield and its purpose.",
      icon: <HelpCircle className="size-5" />,
      faqs: [
        {
          question: "What is SeiShield?",
          answer:
            "SeiShield is an autonomous guardian for SEI meme coins, providing AI-powered risk assessment, real-time wallet tracking, and whale alerts to protect your investments.",
        },
        {
          question: "Is SeiShield free to use?",
          answer:
            "SeiShield offers a free tier with basic features, and premium plans for advanced functionalities and higher usage limits.",
        },
        {
          question: "What blockchain networks does SeiShield support?",
          answer: "Currently, SeiShield is exclusively focused on the SEI network to provide specialized protection.",
        },
      ],
    },
    {
      title: "Technical Questions",
      description: "Questions related to the technology and integration of SeiShield.",
      icon: <Code className="size-5" />,
      faqs: [
        {
          question: "How does SeiShield get real-time data?",
          answer: "We use Sei RPC & REST endpoints and DEX Screener for fast, accurate on-chain data.",
        },
        {
          question: "What is Grok AI's role in SeiShield?",
          answer:
            "Grok AI is integrated to analyze X/Twitter community signals, gauge sentiment, and provide intelligent risk scores for meme coins.",
        },
        {
          question: "Do I need to connect my wallet?",
          answer:
            "No, SeiShield operates on a zero-custody basis. You don't need to connect your wallet to scan tokens or track wallets.",
        },
      ],
    },
    {
      title: "Security & Privacy",
      description: "Concerns about data security and user privacy.",
      icon: <ShieldCheck className="size-5" />,
      faqs: [
        {
          question: "Does SeiShield store my private keys?",
          answer: "Absolutely not. SeiShield is zero-custody; your private keys are never stored on our servers.",
        },
        {
          question: "Is my data shared with third parties?",
          answer:
            "No, we do not share your personal data with third parties. All analysis is based on public on-chain data.",
        },
        {
          question: "Is SeiShield open-source?",
          answer: "Our core scanning logic is open-source, allowing for community audit and verification.",
        },
      ],
    },
    {
      title: "Account & Billing",
      description: "Questions about your account, subscriptions, and payments.",
      icon: <Wallet className="size-5" />,
      faqs: [
        {
          question: "How can I upgrade my plan?",
          answer: "You can upgrade your plan anytime through your account dashboard settings.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards and popular cryptocurrency payments.",
        },
        {
          question: "Can I cancel my subscription?",
          answer: "Yes, you can cancel your subscription at any time from your account settings.",
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
              FAQ
            </Badge>
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6 text-white-purple-gradient leading-tight text-3xl">
              Frequently Asked Questions
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              Find quick answers to the most common questions about SeiShield, its features, and how it works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories and Accordions */}
      <section className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            {/* Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block sticky top-24 h-fit"
            >
              <Card className="p-6 border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur">
                <h3 className="mb-4 text-xl">FAQ Categories</h3>
                <nav className="space-y-2">
                  {faqCategories.map((category, i) => (
                    <Link
                      key={i}
                      href="/app"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                    >
                      {category.icon}
                      {category.title}
                    </Link>
                  ))}
                </nav>
              </Card>
            </motion.div>

            {/* FAQ Accordions */}
            <div className="space-y-12 mx-auto lg:mx-0">
              {" "}
              {/* Added mx-auto for mobile centering */}
              {faqCategories.map((category, catIndex) => (
                <section key={catIndex} id={category.title.toLowerCase().replace(/\s/g, "-")} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-col items-center gap-3 mb-6 text-center" // Changed to flex-col and added text-center
                  >
                    <div className="size-10 rounded-full bg-primary/15 dark:bg-primary/25 flex items-center justify-center text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  </motion.div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: faqIndex * 0.05 + 0.2 }}
                      >
                        <AccordionItem
                          value={`item-${catIndex}-${faqIndex}`}
                          className="border-b border-border/40 py-2"
                        >
                          <AccordionTrigger className="text-left font-medium hover:no-underline text-foreground">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section
        id="contact-cta"
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
              Still Have Questions?
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
              If you couldn't find the answer you were looking for, feel free to reach out to our support team.
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
                  <Mail className="mr-2 size-4" />
                  Join Our Community
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
