import Image from "next/image";
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[-120px] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-[-120px] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
            Trusted local service • Same-day availability
          </p>

          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Plumbing, Drain & Sewer, and Electrical — done right.
          </h1>

          <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">
            Fast response. Transparent pricing. Licensed & insured technicians. We fix problems once — and
            stand behind our work.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-400"
              href="tel:+17473061917"
            >
              Call +1 (747) 306-1917
            </a>

            <a
              className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/15"
              href="#schedule"
            >
              Schedule Online
            </a>
          </div>

          <p className="mt-4 text-xs text-white/60">
            *Replace phone, hours, and service area with your client’s info later.
          </p>
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
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-900/70 p-4 backdrop-blur">
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