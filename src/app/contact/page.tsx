import { Suspense } from "react";
import { ContactForm } from "./ContactForm";
import { company } from "@/data/company";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Contact {company.name}
          </h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Tell us what you need help with — we’ll respond as soon as possible.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          {/* left column оставь как у тебя */}

          <div className="md:col-span-2">
            <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-extrabold tracking-tight">
                Request an appointment
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and we’ll get back to you shortly.
              </p>

              <Suspense
                fallback={<div className="mt-6 text-sm text-slate-600">Loading form…</div>}
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
