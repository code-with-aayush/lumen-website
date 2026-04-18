// src/components/ui/Label.tsx
import * as React from "react";
import { cn } from "@/lib/cn";

interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "surface";
}

export function Label({ className, variant = "default", ...props }: LabelProps) {
  return (
    <span
      className={cn(
        "inline-block text-[11px] tracking-[0.2em] uppercase font-sans",
        variant === "default" && "text-stone",
        variant === "surface" && "text-surface-stone",
        className
      )}
      {...props}
    />
  );
}
