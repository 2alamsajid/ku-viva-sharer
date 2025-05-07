import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  user: process.env.DATABASE_USER!,
  password: process.env.DATABASE_PASSWORD!,
  host: process.env.DATABASE_HOST!,
  port: parseInt(process.env.DATABASE_PORT!),
  database: process.env.DATABASE_NAME!,
  ssl: { ca: process.env.DATABASE_CA! },
});
const db = drizzle(pool);

export default db;