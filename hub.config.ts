import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { defineCollection, defineHub } from "honohub";
import * as schema from "./db/schema";

const neonSql = neon('postgres://myuser:mypassword@localhost:5432/mydatabase');
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
