import { Toast, toaster } from '@kobalte/core';
import { A } from 'solid-start';
import Counter from '~/components/Counter';

export default function Home() {
  const showToast = () => {
    toaster.show((props) => (
      <Toast.Root
        toastId={props.toastId}
        class="flex flex-col items-center justify-between gap-2 rounded-md border border-solid border-slate-200 bg-white p-3 shadow-md kb-opened:animate-slide-in kb-closed:animate-hide kb-swipe-move:[transform:translateX(var(--kb-toast-swipe-move-x))] kb-swipe-cancel:translate-x-0 kb-swipe-cancel:transition-[transform_200ms_ease-out] kb-swipe-end:animate-swipe-out"
      >
        <div class="flex w-full items-start">
          <div>
            <Toast.Title class="text-slate-800">
              Event has been created
            </Toast.Title>
            <Toast.Description class="text-sm text-slate-700">
              Monday, January 3rd at 6:00pm
            </Toast.Description>
          </div>
          <Toast.CloseButton class="ml-auto h-4 w-4 shrink-0 text-slate-800">
            X
          </Toast.CloseButton>
        </div>
        <Toast.ProgressTrack class="h-2 w-full rounded-sm bg-slate-100">
          <Toast.ProgressFill class="h-full w-[var(--kb-toast-progress-fill-width)] rounded-sm bg-primary-500 transition-[width_250ms_linear]" />
        </Toast.ProgressTrack>
      </Toast.Root>
    ));
  };

  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-primary-700">
        Hello world!
      </h1>

      <button onClick={showToast}>show toast</button>

      <Counter />
      
      <p class="mt-8">
        Visit{' '}
        <a
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <p class="my-4">
        <span>Home</span>
        {' - '}
        <A href="/about" class="text-sky-600 hover:underline">
          About Page
        </A>{' '}
      </p>
    </main>
  );
}
