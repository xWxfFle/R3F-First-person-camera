import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/course/Navigation";
import { Scene } from "./components/Scene";
import { UserList } from "./components/course/UserList";
import { Test, Walking } from "./components/Walking";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
