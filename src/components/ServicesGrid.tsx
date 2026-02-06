import Link from "next/link";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
              How can we help you?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              Choose a service to learn more or schedule an appointment.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-2xl">
                  {s.icon}
                </div>
                <div className="text-sm font-bold text-sky-700 opacity-0 transition group-hover:opacity-100">
                  View →
                </div>
              </div>

              <div className="mt-4 text-lg font-extrabold">{s.title}</div>
              <div className="mt-2 text-sm text-slate-600">{s.description}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}