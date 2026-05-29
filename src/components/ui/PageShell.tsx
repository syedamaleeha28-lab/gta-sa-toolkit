import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface PageShellProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  breadcrumbLabel?: string;
}

export function PageShell({
  title,
  description,
  children,
  breadcrumbLabel,
}: PageShellProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
      <Breadcrumbs currentLabel={breadcrumbLabel ?? title} />
      <header className="mb-8 mt-4">
        <h1 className="font-display text-4xl tracking-wide text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-lg text-gray-400">{description}</p>
        )}
      </header>
      {children}
    </div>
  );
}
