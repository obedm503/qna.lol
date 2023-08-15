import { createSignal } from 'solid-js';
import { api } from "~/utils/api";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const double = api.example.double.useQuery(() => count());
  return (
    <div class="flex gap-4 justify-center items-center">
      <button
        class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
        onClick={() => setCount(count() + 1)}
      >
        Clicks: {count()}
      </button>
      trpc double {double.data}
    </div>
  );
}
