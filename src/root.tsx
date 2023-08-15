// @refresh reload
import { Toast } from '@kobalte/core';
import { Suspense } from 'solid-js';
import { Portal } from 'solid-js/web';
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
  useLocation,
} from 'solid-start';
import { api, queryClient } from '~/utils/api';
import './root.css';

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? 'border-primary-600'
      : 'border-transparent hover:border-primary-600';
  return (
    <Html lang="en">
      <Head>
        <Title>QnA.lol</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <api.Provider queryClient={queryClient}>
            <ErrorBoundary>
              <nav class="bg-primary-800">
                <ul class="container flex items-center p-3 text-gray-200">
                  <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
                    <A href="/">Home</A>
                  </li>
                  <li class={`border-b-2 ${active('/about')} mx-1.5 sm:mx-6`}>
                    <A href="/about">About</A>
                  </li>
                </ul>
              </nav>
              <Routes>
                <FileRoutes />
              </Routes>

              <Portal>
                <Toast.Region>
                  <Toast.List class="toast__list fixed bottom-0 right-0 z-50 m-0 flex w-96 max-w-[100vw] list-none flex-col gap-2 p-4 outline-none" />
                </Toast.Region>
              </Portal>
            </ErrorBoundary>
          </api.Provider>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
