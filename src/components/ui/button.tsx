"use client"

import { ArrowUpRight } from 'lucide-react'
import Link from "next/link"
import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  href?: string
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center uppercase font-bai-jamjuree font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    
    const variants = {
      default: "bg-primary text-white hover:bg-primary/90",
      primary: "bg-hot-pink text-white hover:bg-hot-pink/90",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "hover:bg-accent hover:text-accent-foreground"
    }
    
    const sizes = {
      default: "h-10 px-[30px] py-3.5",
      sm: "h-8 px-4",
      lg: "h-12 px-8"
    }
    
    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    )

    const content = (
      <>
        {children}
        <ArrowUpRight className="ml-2 h-4 w-4" />
      </>
    )

    if (href) {
      return (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button }
