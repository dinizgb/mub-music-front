import { Button } from "@/components/ui/button";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function Page() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Music marketplace
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {SITE_NAME}: {SITE_TAGLINE}
        </h1>
        <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
          A place to explore instruments, specs, and trusted information as we grow into a full marketplace for
          the music industry.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="/about">About the project</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/contact">Get in touch</a>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 rounded-lg border border-border bg-card p-6 sm:grid-cols-3">
        {[
          { title: "Instrument catalog", body: "Structured data for guitars, keys, drums, winds, and more." },
          { title: "For everyone", body: "Hobbyists, pros, teachers, retailers, and makers." },
          { title: "SEO-first", body: "Fast, prerendered pages with clear titles and descriptions." },
        ].map((item) => (
          <div key={item.title} className="space-y-2">
            <h2 className="text-base font-semibold">{item.title}</h2>
            <p className="text-sm text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
