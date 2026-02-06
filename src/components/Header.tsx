import Link from "next/link";
export function Header() {
  return (
    <header className="border-b">
      {/* Top bar */}
      <div className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-3">
            <span className="font-semibold">Rare Plumbing</span>
            <span className="hidden opacity-80 md:inline">Serving Your Area</span>
          </div>

          <div className="flex items-center gap-3">
            <a className="opacity-90 hover:opacity-100" href="tel:+11234567890">
             +1 (747) 306-1917
            </a>
            <a
              className="rounded-md bg-white/10 px-3 py-1 font-semibold hover:bg-white/20"
              href="#schedule"
            >
              Schedule Online
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-lg font-extrabold tracking-tight">
            Rare <span className="text-sky-600">Plumbing</span>
          </Link>
            {/* Rare <span className="text-sky-600">Plumbing</span> */}

      <nav className="hidden items-center gap-6 md:flex">
        <Link className="text-sm font-semibold hover:text-sky-700" href="/services/plumbing">
          Plumbing
        </Link>
        <Link className="text-sm font-semibold hover:text-sky-700" href="/services/drain-sewer">
          Drain &amp; Sewer
        </Link>
        <Link className="text-sm font-semibold hover:text-sky-700" href="/services/electrical">
          Electrical
        </Link>
        <Link className="text-sm font-semibold hover:text-sky-700" href="/contact">
          Contact
        </Link>
        <Link className="text-sm font-semibold hover:text-sky-700" href="/services">
          Services
        </Link>
      </nav>

          <div className="flex items-center gap-3">
            <a
              className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold text-white hover:bg-sky-700"
              href="tel:+1747306-1917"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}