import Link from "next/link"
import { Github, Twitter, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 lg:py-20 bg-muted/30 text-muted-foreground">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link className="flex items-center gap-2 font-bold" href="#">
            <div className="size-8 rounded bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
              S
            </div>
            <span className="text-foreground">SeiShield</span>
          </Link>
          <p className="text-sm">
            Your autonomous SEI meme coin guardian. Protect your investments with AI-powered analysis and real-time
            monitoring.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-foreground transition-colors">
              <Twitter className="size-5" />
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              <Github className="size-5" />
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              <MessageCircle className="size-5" />
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Product</h4>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/app" className="hover:text-foreground transition-colors">
              Launch App
            </Link>
            <Link href="/benefit" className="hover:text-foreground transition-colors">
              Benefits
            </Link>
            <Link href="/security" className="hover:text-foreground transition-colors">
              Security
            </Link>
            <Link href="/roadmap" className="hover:text-foreground transition-colors">
              Roadmap
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Resources</h4>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              API Reference
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Community
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold text-foreground">Stay Updated</h4>
          <p className="text-sm">Get the latest updates on new features and security improvements.</p>
          <div className="flex space-x-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button size="sm" className="px-3">
              <Mail className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 SeiShield. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
