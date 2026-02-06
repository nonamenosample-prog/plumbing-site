export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-extrabold">
            Rare <span className="text-sky-400">Plumbing</span>
          </div>
          <p className="mt-3 text-sm text-white/80">
            Licensed • Insured • Same-day service. We’ll make it right.
          </p>

          <div className="mt-4 space-y-1 text-sm">
            <div>
              <span className="text-white/70">Phone: </span>
              <a className="font-semibold hover:underline" href="tel:+17473061917">
               +1 (747) 306-1917
              </a>
            </div>
            <div>
              <span className="text-white/70">Hours: </span>
              <span className="font-semibold">08:00 - 20:00</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-bold">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li><a className="hover:text-white" href="/services/water-heaters">Water Heaters</a></li>
            <li><a className="hover:text-white" href="/services/leak-detection">Leak Detection</a></li>
            <li><a className="hover:text-white" href="/services/drain-cleaning">Drain Cleaning</a></li>
            <li><a className="hover:text-white" href="/services/electrical">Electrical</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold">Service Area</div>
          <p className="mt-3 text-sm text-white/80">
            Pasadena • LA • CA
          </p>

          <div className="mt-4 rounded-2xl bg-white/5 p-4">
            <div className="text-sm font-bold">Need service today?</div>
            <p className="mt-1 text-sm text-white/80">
              Call now and we’ll schedule the soonest available technician.
            </p>
            <a
              className="mt-3 inline-block rounded-xl bg-sky-500 px-4 py-2 text-sm font-bold text-white hover:bg-sky-400"
              href="tel:+17473061917"
            >
              Call +1 (747) 306-1917
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Rare Plumbing. All rights reserved.</span>
          <span>Privacy • Terms</span>
        </div>
      </div>
    </footer>
  );
}