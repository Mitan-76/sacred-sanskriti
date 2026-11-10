import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative mb-12 flex h-[70vh] max-h-[640px] min-h-[420px] items-end overflow-hidden rounded-2xl">
      <Image
        src="/home-banner.png"
        alt="Sacred lotus flower symbolizing spiritual enlightenment and Hindu philosophy"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/20 to-transparent" />
      <div className="relative z-10 max-w-xl px-6 pb-12 sm:px-10">
        <h1 className="font-heading text-3xl font-bold text-white sm:text-5xl">
          Where Science Meets the Sacred
        </h1>
        <p className="mt-4 text-base text-white/90 sm:text-lg">
          An evidence-based exploration of religious phenomena — the psychological,
          biological, and acoustic mechanisms behind spiritual experiences. Written for
          the Hindu diaspora and curious readers everywhere, with clear answers checked
          against original texts and named sources.
        </p>
        <Button className="mt-6" render={<a href="#explore" />}>
          Explore the Pillars
        </Button>
      </div>
    </section>
  );
}
