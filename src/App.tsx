import { createSignal } from "solid-js";
import PWABadge from "./PWABadge.tsx";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <PWABadge />
      <div class="m-auto w-[80%] border border-amber-400">
        <input
          type="number"
          class="m-auto w-full border-2"
          onInput={(e) => setCount(e.target.valueAsNumber)}
        />
        <br />
        <div class="m-auto w-fit">
          <b>{count()}</b> + <b>1</b> = <b>{count() + 1}</b>
        </div>
      </div>
    </>
  );
}

export default App;
