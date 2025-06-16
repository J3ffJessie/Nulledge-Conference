"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/*<div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">*/}
          <div>
            <Image
              src="/nullEDGElogo.jpg"
              alt="nullEDGE Logo"
              width={200}
              height={50}
            />
          </div>
          {/*<span className="font-bold text-xl">Nulledge</span>*/}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#speakers" className="text-sm font-medium hover:text-primary transition-colors">
            Speakers
          </Link>
          <Link href="/#schedule" className="text-sm font-medium hover:text-primary transition-colors">
            Schedule
          </Link>
          <Link href="/#cfp" className="text-sm font-medium hover:text-primary transition-colors">
            Call for Proposals
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />
          {/* <Button className="hidden md:inline-flex">Register Now</Button> */}
          <Button
            asChild
            size="lg"
            className="text-lg px-8"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfJx1aIUdkiQc0RLlU0D3ZZIiYO-WJRosxst7s5F5g7FMDzEw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register to Attend
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            <Link
              href="/#about"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#speakers"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="/#schedule"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="/#cfp"
              className="block text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Call for Proposals
            </Link>
            <Button className="w-full">Register to Attend</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
