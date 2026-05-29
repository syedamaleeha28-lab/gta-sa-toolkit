export default function MissionsLoading() {
  return (
    <div className="mx-auto max-w-7xl animate-pulse space-y-4 px-4 py-12">
      <div className="h-10 w-64 rounded bg-white/10" />
      <div className="grid gap-4 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-32 rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  );
}
