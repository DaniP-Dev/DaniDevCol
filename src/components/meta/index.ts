import { Metadata } from "next";
import { getPathnameHeader } from "./utils";
import { defaultMetadata, pagesMetadataList } from "./pages";

interface GenerateMetadataType extends Metadata {
  pathname?: string;
}
export const generateMetadata = (params?: GenerateMetadataType): Metadata => {
  const { pathname, ...meta } = { ...params, pathname: "" };
  const matchedRouteWithPathname = (route: string) =>
    route === (pathname || getPathnameHeader());

  const getPagesMetadata = () =>
    pagesMetadataList.find((item) => matchedRouteWithPathname(item.route));

  const seoMetadata = {
    ...defaultMetadata,
    ...getPagesMetadata,
  };

  return {
    ...seoMetadata,
    ...meta,
    applicationName: "tutorial",
  };
};
