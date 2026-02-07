export function Stats() {
  const stats = [
    { value: "5+", label: "Years of Experience" },
    { value: "Hundreds", label: "5-Star Reviews" },
    { value: "10k+", label: "Customers Served" },
  ];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-end justify-between">
                <div className="text-3xl font-extrabold tracking-tight text-slate-900">
                  {s.value}
                </div>

                {/* маленький брендовый акцент, не кричит 
                <div className="h-2 w-10 rounded-full bg-brand-orange" /> */}
              </div>

              <div className="mt-3 text-sm font-semibold text-slate-600">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}