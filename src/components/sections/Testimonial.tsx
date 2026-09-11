import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Testimonial({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <section id="testimonials" className="px-6 py-20 md:py-28">
      <RevealOnScroll effect="fade-in-up" className="mx-auto max-w-2xl text-center">
        <p className="text-xl font-normal leading-relaxed tracking-tight text-foreground md:text-2xl">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-6 flex flex-col items-center gap-0.5">
          <span className="text-sm font-semibold text-foreground">{author}</span>
          <span className="text-xs text-muted-foreground">{role}</span>
        </div>
      </RevealOnScroll>
    </section>
  );
}
