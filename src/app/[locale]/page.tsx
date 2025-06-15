import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getMergedMetadata } from "@/components/meta/getMergedMetadata";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  return getMergedMetadata("HomePage", resolvedParams.locale);
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
