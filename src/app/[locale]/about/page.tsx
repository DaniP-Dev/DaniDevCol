import { getMergedMetadata } from "@/components/meta/getMergedMetadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getMergedMetadata("AboutPage", locale);
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return <div>{t("title")}</div>;
}
