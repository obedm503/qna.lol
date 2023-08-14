import Instagram from '@auth/core/providers/instagram';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { SolidAuth, type SolidAuthConfig } from '@auth/solid-start';
import { db } from '../../../db/index';

export const authOpts: SolidAuthConfig = {
  adapter: DrizzleAdapter(db),
  providers: [
    Instagram({
      clientId: import.meta.env.VITE_INSTAGRAM_CLIENT_ID,
      clientSecret: import.meta.env.VITE_INSTAGRAM_CLIENT_SECRET,
    }),
  ],
  debug: import.meta.env.DEV,
  secret: import.meta.env.VITE_AUTH_SECRET,
};

export const { GET, POST } = SolidAuth(authOpts);
