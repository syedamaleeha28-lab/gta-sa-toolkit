"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, Star } from "lucide-react";
import { Link } from "@/i18n/routing";
import type { Mission, BlogPost } from "@/types";
import { getGuideId } from "@/data/missions";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { useFavorites } from "@/providers/FavoritesProvider";
import { cn } from "@/lib/cn";

const difficultyVariant = {
  easy: "green" as const,
  medium: "orange" as const,
  hard: "purple" as const,
};

interface MissionCardProps {
  mission: Mission;
  relatedPosts: BlogPost[];
}

export function MissionCard({ mission, relatedPosts }: MissionCardProps) {
  const t = useTranslations("missions");
  const tCommon = useTranslations("common");
  const [open, setOpen] = useState(false);
  const guideId = getGuideId(mission.id);
  const { toggleGuide, isFavoriteGuide } = useFavorites();
  const isFav = isFavoriteGuide(guideId);

  return (
    <GlassCard>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-xl text-white">{mission.title}</h3>
          <p className="text-sm text-gray-500">{mission.region}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={difficultyVariant[mission.difficulty]}>
            {mission.difficulty}
          </Badge>
          <button
            type="button"
            onClick={() => toggleGuide(guideId)}
            aria-label={isFav ? tCommon("unfavorite") : tCommon("favorite")}
          >
            <Star
              className={cn(
                "h-5 w-5",
                isFav ? "fill-neon-orange text-neon-orange" : "text-gray-500"
              )}
            />
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mt-4 flex w-full items-center justify-between text-sm text-neon-green"
      >
        {t("walkthrough")}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="mt-4 space-y-3 border-t border-white/10 pt-4">
          <p className="text-sm text-gray-300">{mission.walkthrough}</p>
          <div>
            <p className="text-xs font-medium text-gray-500">{t("tips")}</p>
            <ul className="mt-1 list-inside list-disc text-sm text-gray-400">
              {mission.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          {relatedPosts.length > 0 && (
            <div>
              <p className="text-xs font-medium text-gray-500">
                {t("relatedPosts")}
              </p>
              <ul className="mt-1 space-y-1">
                {relatedPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-sm text-neon-green hover:underline"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </GlassCard>
  );
}
