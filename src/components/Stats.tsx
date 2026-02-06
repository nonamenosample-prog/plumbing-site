const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "5-Star Reviews", value: "Hundreds" },
  { label: "Customers Served", value: "10k+" },
];

export function Stats() {
  return (
    <section className="border-b bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-3xl font-extrabold tracking-tight">{s.value}</div>
            <div className="mt-1 text-sm font-semibold text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}