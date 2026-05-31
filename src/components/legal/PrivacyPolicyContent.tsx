import { ExternalLink } from "@/components/ui/ExternalLink";
import { PUBLISHER } from "@/lib/constants";
import { getTranslations } from "next-intl/server";

const CONTACT_EMAIL = "gtasanadapk@gmail.com";

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3 border-t border-white/5 pt-6 first:border-0 first:pt-0">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export async function PrivacyPolicyContent() {
  const t = await getTranslations("privacyPolicy");

  const informationCollectionItems = t.raw(
    "sections.informationCollection.items",
  ) as string[];
  const analyticsItems = t.raw("sections.analyticsUsage.items") as string[];
  const cookiesItems = t.raw("sections.cookies.items") as string[];
  const thirdPartyItems = t.raw("sections.thirdPartyServices.items") as string[];
  const googlePlayItems = t.raw("sections.googlePlayCompliance.items") as string[];
  const dataSecurityItems = t.raw("sections.dataSecurity.items") as string[];
  const childrenItems = t.raw("sections.childrensPrivacy.items") as string[];
  const externalLinksItems = t.raw("sections.externalLinks.items") as string[];
  const changesItems = t.raw("sections.changesToPolicy.items") as string[];

  return (
    <div className="space-y-6">
      <p>{t("intro")}</p>

      <PolicySection title={t("sections.informationCollection.title")}>
        <p>{t("sections.informationCollection.intro")}</p>
        <PolicyList items={informationCollectionItems} />
        <p>{t("sections.informationCollection.outro")}</p>
      </PolicySection>

      <PolicySection title={t("sections.analyticsUsage.title")}>
        <p>{t("sections.analyticsUsage.intro")}</p>
        <PolicyList items={analyticsItems} />
        <p>{t("sections.analyticsUsage.outro")}</p>
      </PolicySection>

      <PolicySection title={t("sections.cookies.title")}>
        <p>{t("sections.cookies.intro")}</p>
        <PolicyList items={cookiesItems} />
        <p>{t("sections.cookies.outro")}</p>
      </PolicySection>

      <PolicySection title={t("sections.thirdPartyServices.title")}>
        <p>{t("sections.thirdPartyServices.intro")}</p>
        <PolicyList items={thirdPartyItems} />
        <p>{t("sections.thirdPartyServices.outro")}</p>
      </PolicySection>

      <PolicySection title={t("sections.googlePlayCompliance.title")}>
        <p>{t("sections.googlePlayCompliance.intro")}</p>
        <PolicyList items={googlePlayItems} />
        <p>{t("sections.googlePlayCompliance.outro")}</p>
      </PolicySection>

      <PolicySection title={t("sections.dataSecurity.title")}>
        <p>{t("sections.dataSecurity.intro")}</p>
        <PolicyList items={dataSecurityItems} />
        <p>{t("sections.dataSecurity.outro")}</p>
      </PolicySection>

      <PolicySection title={t("sections.childrensPrivacy.title")}>
        <p>{t("sections.childrensPrivacy.intro")}</p>
        <PolicyList items={childrenItems} />
        <p>{t("sections.childrensPrivacy.outro")}</p>
      </PolicySection>

      <PolicySection title={t("sections.externalLinks.title")}>
        <p>{t("sections.externalLinks.intro")}</p>
        <PolicyList items={externalLinksItems} />
        <p>{t("sections.externalLinks.outro")}</p>
      </PolicySection>

      <PolicySection title={t("sections.changesToPolicy.title")}>
        <p>{t("sections.changesToPolicy.intro")}</p>
        <PolicyList items={changesItems} />
        <p>{t("sections.changesToPolicy.outro")}</p>
      </PolicySection>

      <PolicySection title={t("sections.contactInformation.title")}>
        <p>{t("sections.contactInformation.intro")}</p>
        <ul className="list-none space-y-2 pl-0">
          <li>
            <strong className="text-white">{t("sections.contactInformation.appLabel")}:</strong>{" "}
            {t("sections.contactInformation.appName")}
          </li>
          <li>
            <strong className="text-white">{t("sections.contactInformation.websiteLabel")}:</strong>{" "}
            <ExternalLink href={PUBLISHER.url}>{PUBLISHER.url}</ExternalLink>
          </li>
          <li>
            <strong className="text-white">{t("sections.contactInformation.emailLabel")}:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </li>
        </ul>
        <p>{t("sections.contactInformation.outro")}</p>
      </PolicySection>
    </div>
  );
}
