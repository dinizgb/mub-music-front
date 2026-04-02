import { canonicalUrl } from "@/lib/site";

describe("canonicalUrl", () => {
  it("builds an absolute URL from the current origin", () => {
    expect(canonicalUrl("/about")).toBe(`${window.location.origin}/about`);
  });

  it("normalizes paths without a leading slash", () => {
    expect(canonicalUrl("contact")).toBe(`${window.location.origin}/contact`);
  });
});
