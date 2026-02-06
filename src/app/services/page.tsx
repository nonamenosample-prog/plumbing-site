import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesIndexPage() {
  return (
    <main className="bg-white">
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Services</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Browse our most popular services. Click any service to learn more.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    </main>
  );
}
