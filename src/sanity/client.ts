import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { projectId, dataset, apiVersion, token, isSanityConfigured } from "./env";

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: process.env.NODE_ENV === "production",
      token: token || undefined,
    })
  : null;

const builder = isSanityConfigured && sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function urlForImage(source: any) {
  if (!builder || !source) return "";
  if (typeof source === "string") return source;
  try {
    return builder.image(source).auto("format").fit("max").url();
  } catch {
    return typeof source === "string" ? source : "";
  }
}
