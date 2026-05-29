import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-8xl text-neon-green">404</h1>
      <h2 className="mt-4 font-display text-3xl text-white">{t("title")}</h2>
      <p className="mt-2 text-gray-400">{t("description")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-neon-green px-6 py-3 font-medium text-gta-dark"
      >
        {t("home")}
      </Link>
    </div>
  );
}
