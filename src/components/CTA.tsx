export function CTA() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div id="schedule" className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
                Book your service now
              </h2>
              <p className="mt-3 text-sm text-white/80 md:text-base">
                Tell us what’s going on and we’ll schedule the soonest available technician.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-400"
                href="/contact"
              >
                Schedule appointment
              </a>
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/15"
                href="tel:+17473061917"
              >
                Or call +1 (747) 306-1917
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}