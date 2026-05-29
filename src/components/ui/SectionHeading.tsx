interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-start"}>
      <h2 className="font-display text-3xl tracking-wide text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-400 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
