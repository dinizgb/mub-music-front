/** Public site metadata and SEO helpers. */

export const SITE_NAME = "Mub";

export const SITE_TAGLINE = "Music marketplace & instrument discovery";

export function getSiteUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  const fromEnv = process.env.VITE_SITE_URL;
  if (typeof fromEnv === "string" && fromEnv.length > 0) {
    return fromEnv.replace(/\/$/, "");
  }
  return "https://localhost";
}

export function canonicalUrl(pathname: string): string {
  const base = getSiteUrl();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
