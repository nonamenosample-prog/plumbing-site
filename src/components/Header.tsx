import Link from "next/link";
import { company } from "@/data/company";
export function Header() {
  return (
    <header className="border-b">
      {/* Top bar */}
      <div className="bg-brand-navy text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-3">
            <span className="font-semibold">{company.name}</span>
            <span className="hidden opacity-80 md:inline">{company.tagline}</span>
          </div>

          <div className="flex items-center gap-3">
            <a className="opacity-90 hover:opacity-100" href="tel:+11234567890">
             {company.phoneDisplay}
            </a>
            <a
              className="btn-ghost"

              href="#schedule"
            >
              Get in touch
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

        </div>
      </div>
    </header>
  );
}