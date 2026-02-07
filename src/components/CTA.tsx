export function CTA() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div id="schedule" className="bg-gradient-to-r from-brand-ink to-brand-navy text-white">
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
                className="btn-primary"
                href="/contact"
              >
                Schedule appointment
              </a>
              <a
                className="btn-ghost"
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