import { Button, buttonVariants } from "@/components/ui/button";
import { redirect } from "next/navigation";

type ServerActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
};

// Server action to handle navigation with fresh server-side rendering
async function navigateAction(href: string) {
  "use server";
  redirect(href);
}

export function ServerActionLink({ href, children, variant = "default", className = "" }: ServerActionLinkProps) {
  return (
    <form action={navigateAction.bind(null, href)}>
      <Button type="submit" className={buttonVariants({ variant, className })}>
        {children}
      </Button>
    </form>
  );
}
