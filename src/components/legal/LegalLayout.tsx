import { PageShell } from "@/components/ui/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <PageShell title={title} breadcrumbLabel={title}>
      <GlassCard>
        {lastUpdated ? (
          <p className="mb-6 text-sm text-gray-400">{lastUpdated}</p>
        ) : null}
        <div className="prose-legal space-y-4 text-gray-300">{children}</div>
      </GlassCard>
    </PageShell>
  );
}
