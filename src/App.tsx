import { useState } from 'react'
import { Landing } from './components/landing'
import { Stage } from './components/stage'

export function App() {
  const [ready, setReady] = useState(false)
  return (
    <div className='bg-violet-950 w-screen h-screen'>
      {!ready && <Landing setReady={setReady} />}
      {ready && <Stage />}
    </div>
  )
}
