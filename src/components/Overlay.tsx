import { useState } from "react";

export const Overlay = () => {
  const [ready, set] = useState(false);
  return (
    <div
      className={`absolute top-0 left-0 w-full h-screen ${
        ready ? "hidden" : "flex"
      } ${
        ready && "clicked"
      } bg-zinc-900 flex-col justify-center items-center text-zinc-100 text-xl`}
    >
      <div className="stack">
        <button onClick={() => set(true)} className={"w-16 h-5 bg-slate-600"}>
          Start
        </button>
      </div>
      <div>
        <h1>GitHub: xWxfFle</h1>
        <h1>Telegram: @xWxfFle</h1>
      </div>
    </div>
  );
};
