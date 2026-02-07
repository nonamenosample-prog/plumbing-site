import Link from "next/link";
import { company } from "@/data/company";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* 1) Brand / Trust */}
          <div>
            <div className="text-base font-extrabold tracking-tight">
              {company.name}
            </div>

            <div className="mt-2 text-sm text-white/80">
              {company.tagline}
            </div>

            <div className="mt-4 text-sm font-semibold text-white/85">
              Licensed &amp; Insured
            </div>

            <div className="mt-6">
              <div className="text-sm font-extrabold tracking-tight">
                License
              </div>
              <div className="mt-1 text-sm font-extrabold tracking-tight">
                {company.licenseNumber}
              </div>
            </div>
          </div>

          {/* 2) Service Area */}
          <div>
            <div className="text-sm font-extrabold tracking-tight">
              Service Area
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {company.serviceArea.slice(0, 10).map((town) => (
                <li key={town}>{town}</li>
              ))}
            </ul>

            {company.serviceArea.length > 10 ? (
              <div className="mt-4 text-xs text-white/60">
                + {company.serviceArea.length - 10} more nearby areas
              </div>
            ) : null}
          </div>

          {/* 3) Services */}
          <div>
            <div className="text-sm font-extrabold tracking-tight">
              Services
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white hover:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Link
                href="/services"
                className="text-sm font-semibold text-white/85 hover:underline"
              >
                View all services →
              </Link>
            </div>
          </div>

          {/* 4) Hours + Emergency + Contact */}
          <div>
            <div className="text-sm font-extrabold tracking-tight">
              Hours
            </div>

            <div className="mt-4 text-sm text-white/80">
              {company.hours}
            </div>

            <div className="mt-2 text-sm text-white/70">
              {company.emergencyNote}
            </div>

            {/* Phone directly under emergency */}
            <a
              href={`tel:${company.phoneHref}`}
              className="mt-3 block text-lg font-extrabold tracking-tight hover:underline"
            >
              {company.phoneDisplay}
            </a>

            {/* Single calm CTA */}
            <div className="mt-5">
              <Link href="/contact" className="btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
