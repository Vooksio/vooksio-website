"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";

type RefreshLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "none";
  className?: string;
};

export function RefreshLink({ href, children, variant = "none", className = "" }: RefreshLinkProps) {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
    router.refresh();
  };

  return (
    <Link href={href} className={buttonVariants({ variant, className })} onClick={handleClick}>
      {children}
    </Link>
  );
}
