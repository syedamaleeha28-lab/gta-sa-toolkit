import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blog";
import { PageShell } from "@/components/ui/PageShell";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { buildPageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return blogPosts.flatMap((post) =>
    ["en", "ar"].map((locale) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    locale,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations("blog");
  const related = getRelatedPosts(slug, post.tags);

  return (
    <PageShell title={post.title} description={post.excerpt}>
      <article className="space-y-8">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="green">
              {tag}
            </Badge>
          ))}
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        {post.body.map((section) => (
          <GlassCard key={section.heading}>
            <h2 className="font-display text-xl text-white">{section.heading}</h2>
            <p className="mt-3 text-gray-300">{section.content}</p>
          </GlassCard>
        ))}
        {related.length > 0 && (
          <div>
            <h2 className="mb-4 font-display text-2xl text-white">
              {t("related")}
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`}>
                  <GlassCard hover>
                    <h3 className="text-white">{r.title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{r.excerpt}</p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </PageShell>
  );
}
