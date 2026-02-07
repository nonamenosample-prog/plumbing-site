"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { services } from "@/data/services";
import { company } from "@/data/company";

export default function ContactPage() {
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service") || "";

  const [serviceValue, setServiceValue] = useState("");

  useEffect(() => {
    if (serviceFromUrl) setServiceValue(serviceFromUrl);
  }, [serviceFromUrl]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    
    const website = String(fd.get("website") || "");
    if (website) {
      setStatus("success");
      form.reset();
      return;
    }

    const serviceSlug = String(fd.get("servece") || "");
    const serviceTitle = 
      services.find((s) => s.slug === serviceSlug)?.title || serviceSlug;

    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      service: services.find(s => s.slug === String(fd.get("service") || ""))?.title || String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
      page: window.location.href,
    };

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      const data = await res.json().catch(() => ({}));
      setStatus("error");
      setError(data?.error || "Failed to send");
    }
  }
  
  return (
    <main className="bg-white">
      {/* Header */}
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
          {/* Left info */}
          <aside className="md:col-span-1">
            <div className="rounded-3xl border bg-slate-50 p-6">
              <div className="text-sm font-bold text-slate-900">Call us</div>
              <a
                className="mt-2 inline-block text-lg font-extrabold text-sky-700 hover:underline"
                href={`tel:${company.phoneHref}`}
              >
                {company.phoneDisplay}
              </a>

              <div className="mt-6 text-sm font-bold text-slate-900">Service area</div>
              <div className="mt-2 text-sm text-slate-700">{company.serviceArea}</div>

              <div className="mt-6 text-sm font-bold text-slate-900">Hours</div>
              <div className="mt-2 text-sm text-slate-700">{company.hours}</div>

              <div className="mt-6 text-sm font-bold text-slate-900">Address</div>
              <div className="mt-2 space-y-1 text-sm text-slate-700">
                {company.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-white p-4">
                <div className="text-sm font-extrabold">Need emergency help?</div>
                <p className="mt-1 text-sm text-slate-600">
                  Call now — we’ll prioritize urgent issues.
                </p>
                <a
                  className="mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-sky-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-sky-700"
                  href={`tel:${company.phoneHref}`}
                >
                  Call now
                </a>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-2">
            <div className="rounded-3xl border bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-xl font-extrabold tracking-tight">Request an appointment</h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and we’ll get back to you shortly.
              </p>

          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-bold">Name</span>
                    <input
                      name="name"
                      required
                      className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-sky-200"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-bold">Phone</span>
                    <input
                      name="phone"
                      required
                      className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-sky-200"
                      placeholder="+1 (___) ___-____"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-bold">Email</span>
                  <input
                    name="email"
                    type="email"
                    className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="you@email.com"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold">Service needed</span>
                  <select
                    name="service"
                    className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-sky-200"
                    value={serviceValue}
                    onChange={(e) => setServiceValue(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-bold">Message</span>
                  <textarea
                    name="message"
                    className="min-h-[120px] rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-sky-200"
                    placeholder="Describe the problem, address, preferred time, etc."
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-sky-600 px-6 text-sm font-extrabold text-white hover:bg-sky-700 disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send request"}
                </button>

                {status === "success" ? (
                  <p className="text-sm font-semibold text-green-700">
                  Thanks! We received your request.
                  </p>
                ) : null}

                {status === "error" ? (
                  <p className="text-sm font-semibold text-red-700">
                  Error: {error}
                  </p>
                ) : null}

                <p className="text-xs text-slate-500">
                  By submitting, you agree to be contacted about your request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
