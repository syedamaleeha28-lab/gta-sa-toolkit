import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog";

export async function FeaturedBlog() {
  const t = await getTranslations("home");
  const tBlog = await getTranslations("blog");
  const featured = blogPosts.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <SectionHeading title={t("blogTitle")} subtitle={t("blogSubtitle")} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {featured.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <GlassCard hover className="h-full">
              <Badge variant="purple">{tBlog("featured")}</Badge>
              <h3 className="mt-3 font-display text-xl text-white">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{post.excerpt}</p>
              <p className="mt-4 text-xs text-neon-green">{tBlog("readMore")} →</p>
            </GlassCard>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="text-sm text-neon-green hover:underline"
        >
          {t("blogTitle")} →
        </Link>
      </div>
    </section>
  );
}
