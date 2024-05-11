import { defineConfig } from 'drizzle-kit'
export default defineConfig({
 schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:l0DCqdHJME6O@ep-withered-limit-a5pkq9t3.us-east-2.aws.neon.tech/collates?sslmode=require",
  },
  verbose: true,
  strict: true,
})