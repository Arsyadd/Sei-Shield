"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => (window.scrollY > 10 ? setIsScrolled(true) : setIsScrolled(false))
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <header className={`sticky top-4 z-50 w-full transition-all duration-300 ${isScrolled ? "shadow-sm" : ""}`}>
      <div className="container flex h-16 md:h-20 items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-screen-xl bg-black/70 backdrop-blur-md rounded-full px-4 py-3 md:px-6 md:py-4 border border-primary/20 shadow-lg">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-7 md:size-9 rounded-full bg-primary flex items-center justify-center text-white text-xs md:text-sm">
              SS
            </div>
            <span className="text-white text-base md:text-lg">SeiShield</span>
          </div>
          <nav className="hidden md:flex gap-6 lg:gap-8">
            <Link href="/" className="text-base font-medium text-white transition-colors hover:text-gray-300">
              Home
            </Link>
            <Link href="/benefit" className="text-base font-medium text-white transition-colors hover:text-gray-300">
              Benefits
            </Link>
            <Link href="/roadmap" className="text-base font-medium text-white transition-colors hover:text-gray-300">
              Roadmap
            </Link>
            <Link href="/security" className="text-base font-medium text-white transition-colors hover:text-gray-300">
              Security
            </Link>
            <Link href="/faq" className="text-base font-medium text-white transition-colors hover:text-gray-300">
              FAQ
            </Link>
            <Link href="/docs" className="text-base font-medium text-white transition-colors hover:text-gray-300">
              Docs
            </Link>
          </nav>
          <div className="hidden md:flex gap-2 lg:gap-4 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-white hover:bg-white/10"
            >
              {mounted && theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="/app">
              <Button className="rounded-full btn-purple-glow border-0 h-10 px-5 text-base md:h-11 md:px-6 md:text-lg">
                Launch App
                <ChevronRight className="ml-1 size-4 lg:size-5" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full text-white hover:bg-white/10"
            >
              {mounted && theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-[4.5rem] w-full max-w-screen-xl mx-auto bg-black/70 backdrop-blur-md border border-primary/20 shadow-lg rounded-2xl"
        >
          <div className="py-4 flex flex-col gap-3 px-4 md:px-6">
            <Link
              href="/"
              className="py-2.5 text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/benefit"
              className="py-2.5 text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </Link>
            <Link
              href="/roadmap"
              className="py-2.5 text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              href="/security"
              className="py-2.5 text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Security
            </Link>
            <Link
              href="/faq"
              className="py-2.5 text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/docs"
              className="py-2.5 text-base font-medium text-white hover:text-gray-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-white/20">
              <Link href="/app" onClick={() => setMobileMenuOpen(false)}>
                <Button size="sm" className="rounded-full w-full btn-purple-glow border-0 text-sm">
                  Launch App
                  <ChevronRight className="ml-1 size-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
