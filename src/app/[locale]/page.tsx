import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { FeaturedBlog } from "@/components/home/FeaturedBlog";
import { OfficialResources } from "@/components/home/OfficialResources";
import { ToolkitHomeHub } from "@/components/promo/ToolkitHomeHub";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <ToolkitHomeHub locale={locale} />
      <StatsBar />
      <FeaturesGrid />
      <OfficialResources />
      <Testimonials />
      <FeaturedBlog />
    </>
  );
}
