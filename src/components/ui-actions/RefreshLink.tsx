"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { forwardRef } from "react";

type RefreshLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "primary" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "none";
  className?: string;
  // New props for enhanced functionality
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  "aria-label"?: string;
  title?: string;
  id?: string;
  // Control refresh behavior
  disableRefresh?: boolean;
  // Control navigation behavior
  replace?: boolean;
  scroll?: boolean;
  // Additional HTML anchor attributes
  download?: boolean | string;
  hrefLang?: string;
  ping?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  type?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "onClick" | "className">;

export const RefreshLink = forwardRef<HTMLAnchorElement, RefreshLinkProps>(
  (
    {
      href,
      children,
      variant = "none",
      className = "",
      onClick,
      target,
      rel,
      disableRefresh = false,
      replace = false,
      scroll = true,
      ...props
    },
    ref
  ) => {
    const router = useRouter();

    const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Call custom onClick first if provided
      if (onClick) {
        onClick(e);
      }

      // Handle external links or specific targets
      if (target === "_blank" || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        // Let the default Link behavior handle external links
        return;
      }

      // Handle internal navigation with optional refresh
      if (!e.defaultPrevented) {
        e.preventDefault();

        if (replace) {
          router.replace(href, { scroll });
        } else {
          router.push(href, { scroll });
        }

        // Only refresh if not disabled
        if (!disableRefresh) {
          router.refresh();
        }
      }
    };

    // Determine rel attribute for external links
    const linkRel = target === "_blank" ? rel || "noopener noreferrer" : rel;

    return (
      <Link
        ref={ref}
        href={href}
        className={buttonVariants({ variant, className })}
        onClick={handleClick}
        target={target}
        rel={linkRel}
        {...props}
      >
        {children}
      </Link>
    );
  }
);

RefreshLink.displayName = "RefreshLink";
