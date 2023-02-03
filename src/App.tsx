import { useState } from "react";
import { Overlay } from "./components/Overlay";
import { Scene } from "./components/Scene";

function App() {
  const [ready, setReady] = useState(false);
  return (
    <div className="App">
      {!ready && <Overlay set={setReady} />}
      {ready && <Scene/>}
    </div>
  );
}
export default App;
