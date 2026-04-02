import type { ReactNode } from "react";

import { usePageContext } from "vike-react/usePageContext";

type LinkProps = {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
};

export function Link({ href, children, onNavigate }: LinkProps) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);

  return (
    <a
      href={href}
      className={
        isActive
          ? "rounded-md bg-muted px-3 py-2 text-sm font-medium text-foreground"
          : "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      }
      onClick={onNavigate}
    >
      {children}
    </a>
  );
}
