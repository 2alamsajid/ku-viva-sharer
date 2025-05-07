import { defineConfig } from "drizzle-kit";
import 'dotenv/config'

if(!process.env.DATABASE_CA) {
  throw new Error('No DATABASE_CA environment variable found')
}

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './lib/drizzle/schema.ts',
  out: './lib/drizzle/migrations.ts',
  dbCredentials:{
    host: process.env.DATABASE_HOST!,
    port: parseInt(process.env.DATABASE_PORT!),
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    database: process.env.DATABASE_NAME!,
    ssl: { ca: process.env.DATABASE_CA! },
  },
})
