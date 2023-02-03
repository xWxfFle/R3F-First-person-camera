import "./App.css";
import { Overlay } from "./components/Overlay";
import { Scene} from "./components/Scene";

function App() {
  return (
    <div className="App">
      <Scene />
      <Overlay/>
    </div>
  );
}
export default App;
