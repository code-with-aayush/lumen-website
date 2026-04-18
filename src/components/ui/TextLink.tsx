// src/components/ui/TextLink.tsx
import Link from "next/link";
import { cn } from "@/lib/cn";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function TextLink({ href, children, className, external }: TextLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-1 text-champagne text-sm font-sans tracking-wide group transition-colors hover:text-champagne-deep",
    className
  );

  const inner = (
    <>
      {children}
      <span
        className="transition-transform group-hover:translate-x-1"
        aria-hidden="true"
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
