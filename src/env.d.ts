/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INSTAGRAM_CLIENT_ID: string;
  readonly VITE_INSTAGRAM_CLIENT_SECRET: string;
  readonly VITE_AUTH_SECRET: string;
  readonly VITE_DATABASE_URL: string;
  readonly VITE_DATABASE_AUTH_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
