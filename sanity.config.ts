import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";
import { projectId, dataset } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "amrai-agami-studio",
  title: "Amrai Agami CMS Studio",
  projectId: projectId || "dummy-project-id",
  dataset: dataset || "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
