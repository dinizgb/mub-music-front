import "./Layout.css";

import "./tailwind.css";

import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/contexts/theme-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="page-container" className="flex-1">
          <div id="page-content" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}
