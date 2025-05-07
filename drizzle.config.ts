import { defineConfig } from "drizzle-kit";
import 'dotenv/config'


export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './lib/drizzle/schema.ts',
  out: './lib/drizzle/migrations.ts',
  dbCredentials:{
    url: process.env.DATABASE_URL!
  },
})
