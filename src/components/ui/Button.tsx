// src/components/ui/Button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-sans tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-champagne text-ink-deep px-8 py-4 hover:bg-champagne-deep active:scale-[0.98]",
        "outline-champagne":
          "border border-champagne text-champagne px-8 py-4 hover:bg-champagne hover:text-ink-deep active:scale-[0.98]",
        "outline-bone":
          "border border-bone text-bone px-8 py-4 hover:bg-bone hover:text-ink-deep active:scale-[0.98]",
        ghost:
          "text-champagne underline underline-offset-4 hover:text-champagne-deep px-0 py-0",
      },
      size: {
        default: "h-12 px-8 text-xs",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-10 text-xs",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
