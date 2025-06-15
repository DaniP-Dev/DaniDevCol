import { headers } from "next/headers";

export const getPathnameHeader = async () => {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || "";
  return pathname;
};
