const columns = [
  {
    title: "Platform",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "API Reference", "Community", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-medium text-foreground">{col.title}</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Intellune. All rights reserved.
      </div>
    </footer>
  );
}
