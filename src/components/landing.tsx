type Props = {
  setReady: (ready: boolean) => void
}

export function Landing({ setReady }: Props) {
  return (
    <div
      className={
        'w-full h-full flex flex-col justify-center items-center text-violet-100 text-2xl gap-12 text-center'
      }
    >
      <h1 className='text-8xl'>Hello, </h1>
      <div>
        <p>You need a mouse and keyboard to test this demo</p>
        <p>
          Use
          <span className='text-cyan-400'> WASD </span>or
          <span className='text-cyan-400'> Arrows </span>for movement
        </p>
        <p>
          Use
          <span className='text-cyan-400'> Space </span>to jump
        </p>
      </div>
      <button
        onClick={() => setReady(true)}
        className={
          'w-64 h-16 bg-violet-100 text-violet-950  rounded-full font-bold'
        }
      >
        Start
      </button>
    </div>
  )
}
