import { getMergedMetadata } from "@/components/meta/getMergedMetadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  return getMergedMetadata("AboutPage", resolvedParams.locale);
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return <div>{t("title")}</div>;
}
