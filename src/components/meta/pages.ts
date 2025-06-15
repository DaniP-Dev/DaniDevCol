import { Metadata } from "next";
export const pagesMetadataList: Array<Metadata & { route: string }> = [
  {
    route: "/about",
    title: "sobre algo",
    description: "algo bacanomnhkinjghiithn fgneidnginrb dfgbningi",
  },
  {
    route: "/profile",
    title: "sobre algo",
    description: "algo bacanomnhkinjghiithn fgneidnginrb dfgbningi",
  },
];
export const defaultMetadata: Metadata = {
  title: "Default",
  description: "Default description for the application.",
  keywords: ["default", "application", "metadata"],
  authors: [{ name: "Author Name" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    images: ["https://example.com/default-og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://example.com/default-twitter-image.jpg"],
  },
};
