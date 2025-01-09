import { createSignal } from "solid-js";
import PWABadge from "./PWABadge.tsx";

function App() {
  const [count, setCount] = createSignal(0);
  function onInput(e: InputEvent) {
    //@ts-ignore
    const inp: HTMLInputElement = e.target;
    if (!(/^\d*$/g.test(inp.value))) {
      const pos = inp.selectionStart || 0
      const newVal = Array.from(inp.value.matchAll(/\d/g))?.join("") || ""
      const newPos = pos - (inp.value.length - newVal.length)
      inp.value = newVal;
      inp.setSelectionRange(newPos, newPos)
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
      <div class="w-fit m-auto text-[5vw]">
        <label for="num-input" class="w-56">
          Enter a number:{" "}
        </label>
        <input
          type="text"
          id="num-input"
          maxLength={3}
          class="m-auto w-[15vw] border-2 text-slate-600 text-center"
          onInput={onInput}
        />
      </div>
      <br />
      <div class="m-auto w-fit">
        <div class="text-[50svh] w-100% text-slate-800">
          <b>{Number.isInteger(count()) ? count() + 1 : "???"}</b>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default App;
