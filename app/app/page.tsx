"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden p-4">
      {/* Background grid and gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,hsl(var(--primary)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.1)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--primary)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl opacity-70"></div>
      <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 blur-3xl opacity-70"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-xl mx-auto px-4 md:px-6 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white-purple-gradient">
          Coming Soon!
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          We're working hard to bring you the full SeiShield application. Stay tuned for exciting updates!
        </p>
        <Link href="/">
          <Button className="h-10 md:h-12 px-6 md:px-8 text-sm md:text-base rounded-full btn-purple-glow border-0">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Button>
        </Link>
      </motion.div>
    </main>
  )
}
