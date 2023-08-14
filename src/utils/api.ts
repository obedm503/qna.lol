import { QueryClient } from '@tanstack/solid-query';
import { httpBatchLink } from '@trpc/client';
import { createTRPCSolidStart } from 'solid-trpc';
import { AppRouter } from '~/server/api/root';

function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NODE_ENV === 'production') return 'https://qna.lol';
  return `http://localhost:${process.env.PORT ?? 42069}`;
}

export const api = createTRPCSolidStart<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
});

export const queryClient = new QueryClient();
