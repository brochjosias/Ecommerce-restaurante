import { createClient } from "next-sanity";

const client = createClient({
  projectId: "hvvjftye",
  dataset: "production",
  apiVersion: "2024-01-28",
  useCdn: false,
});

export default client;
