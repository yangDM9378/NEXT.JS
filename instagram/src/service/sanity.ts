import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: "2023-04-26",
  token: process.env.SANITY_SECRET_TOKEN,
});
