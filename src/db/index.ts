import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { schema } from './schema';

const client = createClient({
  url: import.meta.env.VITE_DATABASE_URL,
  authToken: import.meta.env.VITE_DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });
