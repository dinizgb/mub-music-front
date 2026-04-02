import { usePageContext } from "vike-react/usePageContext";

import { canonicalUrl } from "@/lib/site";

export function Head() {
  const { urlPathname } = usePageContext();
  return <link rel="canonical" href={canonicalUrl(urlPathname)} />;
}
