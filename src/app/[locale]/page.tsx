import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getMergedMetadata } from "@/components/meta/getMergedMetadata";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getMergedMetadata("HomePage", locale);
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
