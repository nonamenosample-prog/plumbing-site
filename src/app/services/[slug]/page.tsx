import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-[-120px] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 right-[-120px] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                <span className="text-base">{service.icon}</span>
                <span>Service</span>
              </div>

              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                {service.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
                {service.description}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-3 text-sm font-extrabold text-white hover:bg-sky-400"
                  href="tel:+11234567890"
                >
                  Call (123) 456-7890
                </a>
                <Link
                  className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/15"
                  href="/contact"
                >
                  Schedule appointment
                </Link>
              </div>

              {/* Mobile image */}
              {service.image ? (
                <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl md:hidden">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              ) : null}
            </div>

            {/* Desktop image */}
            <div className="hidden md:block">
              {service.image ? (
                <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <div className="flex h-64 w-full items-center justify-center rounded-3xl bg-white/10 text-6xl">
                  {service.icon}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-extrabold tracking-tight">What we do</h2>
            <p className="mt-2 text-slate-600">
              Here are the most common things we help with:
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.bullets.map((b) => (
                <li key={b} className="rounded-2xl border bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold">{b}</div>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-2xl font-extrabold tracking-tight">FAQ</h2>
            <div className="mt-4 space-y-3">
              {service.faqs.map((f) => (
                <details key={f.q} className="rounded-2xl border bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer text-sm font-extrabold">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <aside className="md:sticky md:top-6 md:self-start">
            <div className="rounded-3xl border bg-slate-50 p-6">
              <div className="text-sm font-bold text-slate-900">
                Need help with {service.title}?
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Call now or request an appointment — we’ll respond as soon as possible.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
                  href="tel:+11234567890"
                >
                  Call (123) 456-7890
                </a>
                <Link
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-black"
                  href="/contact"
                >
                  Request appointment
                </Link>
              </div>

              <div className="mt-6 border-t pt-5">
                <div className="text-xs font-bold text-slate-700">Why choose us</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {service.whyUs.map((w) => (
                    <li key={w} className="flex gap-2">
                      <span className="mt-0.5">✓</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
