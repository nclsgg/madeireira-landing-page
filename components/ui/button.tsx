import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-none font-light transition-all duration-300",
          "disabled:pointer-events-none disabled:opacity-50",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8B6F47]",
          variant === "default" && "bg-[#8B6F47] text-white px-12 py-4 hover:bg-[#A0826D]",
          variant === "outline" && "border border-[#2C2C2C] text-[#2C2C2C] px-12 py-4 hover:bg-[#2C2C2C] hover:text-white",
          variant === "ghost" && "text-[#2C2C2C] hover:text-[#8B6F47]",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
