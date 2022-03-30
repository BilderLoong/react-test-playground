import "./App.css";
import { useEffect, useState } from "react";
import Foo from "./components/ContextPlayground.tsx";

function App() {
  const [state, setState] = useState(true);

  return (
    <>
      <Foo />
    </>
  );
}

export default App;
