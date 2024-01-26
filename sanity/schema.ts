import { type SchemaTypeDefinition } from "sanity";

import post from "./schemas/projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
};
