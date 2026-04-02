export default function Page() {
  return (
    <article className="max-w-3xl space-y-6">
      <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">About us</h1>
      <p className="text-lg text-muted-foreground">
        Mub is being built as a music marketplace and knowledge hub so anyone can find reliable information about
        instruments and the businesses that support musicians.
      </p>
      <h2 className="text-xl font-semibold tracking-tight">Our focus</h2>
      <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
        <li>Clear, searchable instrument information</li>
        <li>A trustworthy space for buyers, sellers, and educators</li>
        <li>Performance and SEO so content is easy to find</li>
      </ul>
      <p className="text-muted-foreground">
        This page is a skeleton for the product narrative—you can replace it with your story, team, and roadmap.
      </p>
    </article>
  );
}
