import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "@/utils/schema"

const sql = neon("postgresql://neondb_owner:l0DCqdHJME6O@ep-withered-limit-a5pkq9t3.us-east-2.aws.neon.tech/collates?sslmode=require");
export  const db = drizzle(sql, {schema});
