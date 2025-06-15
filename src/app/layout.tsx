import { generateMetadata as generateMetadataCustom } from "@/components/meta";
export const generateMetadata = () => generateMetadataCustom();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
