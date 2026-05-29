export default function CheatsLoading() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse space-y-4 px-4 py-12">
      <div className="h-10 w-64 rounded bg-white/10" />
      <div className="h-12 rounded-xl bg-white/10" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  );
}
