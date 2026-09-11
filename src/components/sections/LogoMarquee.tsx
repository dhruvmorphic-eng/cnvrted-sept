import { Marquee } from "@/components/ui/Marquee";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const logos = [
  "Acme",
  "Globex",
  "Initech",
  "Umbrella",
  "Soylent",
  "Stark",
  "Wayne",
  "Hooli",
];

export function LogoMarquee() {
  return (
    <section className="border-y border-border py-14">
      <RevealOnScroll effect="fade-in">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          500+ companies trust Intellune
        </p>
      </RevealOnScroll>
      <Marquee duration={30}>
        {logos.map((logo) => (
          <span
            key={logo}
            className="font-mono text-lg font-medium text-muted-foreground/70"
          >
            {logo}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
