"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/data/services";

export function ContactForm() {
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

    const serviceSlug = String(fd.get("service") || "");
    const serviceTitle =
      services.find((s) => s.slug === serviceSlug)?.title || serviceSlug;

    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      service: serviceTitle,
      message: String(fd.get("message") || ""),
      page: typeof window !== "undefined" ? window.location.href : "",
    };

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
      setServiceValue(serviceFromUrl || "");
    } else {
      const data = await res.json().catch(() => ({}));
      setStatus("error");
      setError(data?.error || "Failed to send");
    }
  }

  return (
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
            className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-brand-orange/20"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-bold">Phone</span>
          <input
            name="phone"
            required
            className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-brand-orange/20"
            placeholder="+1 (___) ___-____"
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-sm font-bold">Email</span>
        <input
          name="email"
          type="email"
          className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-brand-orange/20"
          placeholder="you@email.com"
        />
      </label>

      <label className="grid gap-2">
        <span className="text-sm font-bold">Service needed</span>
        <select
          name="service"
          className="h-12 rounded-2xl border px-4 outline-none focus:ring-2 focus:ring-brand-orange/20"
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
          className="min-h-[120px] rounded-2xl border p-4 outline-none focus:ring-2 focus:ring-brand-orange/20"
          placeholder="Describe the problem, address, preferred time, etc."
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary mt-2 disabled:opacity-60"
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
  );
}