type props = {
  set: (arg0: boolean) => void;
};

export const Overlay = (props: props) => {
  return (
    <div
      className={
        "absolute top-0 left-0 w-full h-screen flex bg-zinc-900 flex-col justify-center items-center text-zinc-100 text-xl"
      }
    >
      <div className="border-l-4 border-sky-900 pl-2">
        <p>You need a mouse and keyboard to test this demo </p>
        <p>
          Use WASD or Arrows for movement <br />
          Use Space to jump
        </p>
        <br />
        <p>
          GitHub: xWxfFle <br />
          Telegram: @xWxfFle
        </p>
      </div>
      <button
        onClick={() => props.set(true)}
        className={"w-48 h-12 text-2xl bg-sky-900 rounded-sm mt-8"}
      >
        Start
      </button>
    </div>
  );
};
