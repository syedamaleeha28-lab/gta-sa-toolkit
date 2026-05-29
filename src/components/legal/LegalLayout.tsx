import { PageShell } from "@/components/ui/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <PageShell title={title} breadcrumbLabel={title}>
      <GlassCard>
        <div className="prose-legal space-y-4 text-gray-300">{children}</div>
      </GlassCard>
    </PageShell>
  );
}
