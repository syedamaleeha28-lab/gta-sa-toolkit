import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { FeaturedBlog } from "@/components/home/FeaturedBlog";
import { SiteSchemas } from "@/components/seo/SiteSchemas";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SiteSchemas locale={locale} includeSoftwareApplication />
      <Hero />
      <StatsBar />
      <FeaturesGrid />
      <Testimonials />
      <FeaturedBlog />
    </>
  );
}
