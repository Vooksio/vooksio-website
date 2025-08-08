import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
};

export function LinkButton({ href, children, variant = "default", className = "" }: LinkButtonProps) {
  return (
    <Link href={href} className={buttonVariants({ variant, className })}>
      {children}
    </Link>
  );
}
