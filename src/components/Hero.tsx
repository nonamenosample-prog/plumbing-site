import Image from "next/image";
import { company } from "@/data/company";
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy text-white">
      
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-120px] h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl" />
        <div className="absolute -bottom-24 right-[-120px] h-80 w-80 rounded-full bg-brand-orange/15 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">
            Trusted local service • Same-day availability
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Plumbing, Drain & Sewer, and Electrical — done right.
          </h1>

          <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">
            Fast response. Transparent pricing. Licensed & insured technicians. We fix problems once — and
            stand behind our work.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="btn-primary"
              href="tel:+17473061917"
            >
              Call +1 (747) 306-1917
            </a>

            <a
              className="btn-ghost"
            >
              Get in touch
            </a>
          </div>

        </div>

        {/* right side "image" placeholder */}
        <div className="relative">
          <div className="relative aspect-[16/10] md:aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
            <Image
              src="/images/hero-plumber.png"
              alt="Professional plumber working on home plumbing system"
              fill
              priority
              className="object-cover"
            />
          </div>

        {/* Overlay CTA */}
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-primary p-4 backdrop-blur text-white/80">
          <div className="text-sm font-bold">Same-day service in most areas</div>
          <div className="mt-1 text-sm text-white/70">
            Call now — we’ll schedule the soonest available technician.
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}