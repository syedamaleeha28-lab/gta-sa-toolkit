import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { blogPosts } from "@/data/blog";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

export async function BlogListing() {
  const t = await getTranslations("blog");
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="space-y-12">
      {featured.length > 0 && (
        <div>
          <h2 className="mb-6 font-display text-2xl text-neon-purple">
            {t("featured")}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <GlassCard hover className="h-full">
                  <Badge variant="purple">{t("featured")}</Badge>
                  <h3 className="mt-3 font-display text-2xl text-white">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-400">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-gray-500">{post.date}</p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <GlassCard hover className="h-full">
              <h3 className="font-display text-lg text-white">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{post.excerpt}</p>
              <p className="mt-4 text-xs text-neon-green">{t("readMore")} →</p>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
