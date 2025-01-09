import { createSignal } from "solid-js";
import PWABadge from "./PWABadge.tsx";

function App() {
  const [count, setCount] = createSignal(0);
  function onInput(e: InputEvent) {
    //@ts-ignore
    const inp: HTMLInputElement = e.target;
    if (!RegExp(/^[0-9]*$/g).exec(inp.value)) {
      e.preventDefault();
      return;
    }
    if (inp.value.startsWith("0")) {
      inp.value = inp.value.replace(/^[0]+/g, "");
    }
    setCount(Number.parseInt(inp.value)  || 0);
  }

  return (
    <>
      <PWABadge />
      {/* <div class="m-auto w-[80%]"> */}
      <div class="flex my-4 mx-2">
        <label for="num-input" class="w-56">
          Enter a number:{" "}
        </label>
        <input
          type="text"
          id="num-input"
          maxLength={3}
          class="m-auto w-full border-2 flex-grow"
          onInput={onInput}
        />
      </div>
      <br />
      <div class="m-auto w-fit">
        <div class="text-[48vw] w-100% overflow-x-auto">
          <b>{Number.isInteger(count()) ? count() + 1 : "??"}</b>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
