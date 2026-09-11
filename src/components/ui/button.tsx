import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-500/30 disabled:pointer-events-none disabled:opacity-50 active:scale-[.98]",
  {
    variants: {
      variant: {
        default: "bg-ink-950 text-white shadow-sm hover:bg-ink-800",
        coral: "bg-coral-500 text-white shadow-[0_8px_20px_-8px_rgba(129,86,217,.65)] hover:bg-coral-600",
        outline: "border border-ink-200 bg-white text-ink-800 hover:border-ink-300 hover:bg-ink-50",
        ghost: "text-ink-600 hover:bg-ink-100 hover:text-ink-950",
        soft: "bg-coral-50 text-coral-700 hover:bg-coral-100",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 px-5",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
