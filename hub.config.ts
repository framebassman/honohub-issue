import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { defineCollection, defineHub } from "honohub";
import * as schema from "./src/db/schema";

const neonSql = neon("postgres://test:test@localhost:5432/test");
const db = drizzle(neonSql, { schema });

export default defineHub({
  db,
  collections: [
    defineCollection({
      slug: "todos",
      schema: schema.todos,
    }),
  ],
});
