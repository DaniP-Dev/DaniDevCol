import { redirect } from "next/navigation";

import { generateMetadata as generateMetadataCustom } from "@/components/meta";
export const generateMetadata = () => generateMetadataCustom();

export default function RootPage() {
  redirect("/");
}
