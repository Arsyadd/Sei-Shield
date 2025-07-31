"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-8 md:py-12 lg:py-16 border-t bg-muted/30">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div className="flex flex-col items-start gap-3 md:gap-4 sm:col-span-2 md:col-span-1 lg:col-span-2">
          <div className="flex items-center gap-2 font-bold">
            <div className="size-6 md:size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-xs md:text-sm">
              SS
            </div>
            <span className="text-white text-sm md:text-base">SeiShield</span>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground">
            Your autonomous SEI meme coin guardian. Analyze, track, and stay ahead.
          </p>
          <div className="flex gap-3 md:gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <Facebook className="size-4 md:size-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <Twitter className="size-4 md:size-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <Instagram className="size-4 md:size-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <Linkedin className="size-4 md:size-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              <Github className="size-4 md:size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
        <nav className="grid gap-1 md:gap-2 text-xs md:text-sm">
          <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Product</h3>
          <Link href="/benefit" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Benefits
          </Link>
          <Link href="/roadmap" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Roadmap
          </Link>
          <Link href="/security" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Security
          </Link>
          <Link href="/faq" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            FAQ
          </Link>
          <Link href="/docs" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Docs
          </Link>
        </nav>
        <nav className="grid gap-1 md:gap-2 text-xs md:text-sm">
          <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Company</h3>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Careers
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Press
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Contact
          </Link>
        </nav>
        <nav className="grid gap-1 md:gap-2 text-xs md:text-sm">
          <h3 className="font-semibold text-foreground mb-1 md:mb-2 text-sm md:text-base">Legal</h3>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Disclaimer
          </Link>
        </nav>
      </div>
      <div className="container mt-6 md:mt-8 text-center text-xs text-muted-foreground">
        © 2025 SeiShield. All rights reserved.
      </div>
    </footer>
  )
}
