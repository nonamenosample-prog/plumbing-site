import Link from "next/link";
import { company } from "@/data/company";

export function CTA() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            {/* Text */}
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                Book your service now
              </h2>
              <p className="mt-2 text-sm text-white/80 md:text-base">
                Tell us what&apos;s going on and we&apos;ll schedule the soonest available technician.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link href="/contact" className="btn-primary">
                Get in touch
              </Link>

              <a href={`tel:${company.phoneHref}`} className="btn-ghost">
                Call {company.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
