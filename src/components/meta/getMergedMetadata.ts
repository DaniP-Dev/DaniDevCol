import { defaultMetadata } from "./pages";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function getMergedMetadata(pageKey: string, locale: string): Promise<Metadata> {
  // Obtén las traducciones para la página y el idioma
  const t = await getTranslations({ locale, namespace: pageKey });
  const translatedMeta = t.raw("metaData") || {};

  // Mezcla: lo traducido sobrescribe lo default
  const merged: Metadata = {
    ...defaultMetadata,
    ...translatedMeta,
    // Si tienes objetos anidados como openGraph o twitter:
    openGraph: {
      ...defaultMetadata.openGraph,
      ...translatedMeta.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...translatedMeta.twitter,
    },
  };

  return merged;
}
