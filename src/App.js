import './App.css';
import { useEffect, useState } from 'react';

const useMount = (name) => {
  useEffect(() => {
    console.log(`${name} mounting`);
  }, [name]);
};

// Running when rendering include mounting.
const useRendering = (name) => {
  useEffect(() => {
    console.log(`${name} rendering`);
  });
};

const Foo = () => {
  useMount('Foo');
  useRendering('Foo');
  return <p>Foo</p>;
};

function App() {
  const [state, setState] = useState(true);

  const Bar = () => {
    const name = 'Bar';
    useMount(name);
    useRendering(name);
    return <p>{name}</p>;
  };

  return (
    <>
      <Foo></Foo>
      <Bar/>
      <button
        onClick={() => {
          setState((pre) => !pre);
        }}
      >
        Changing State
      </button>
    </>
  );
}

export default App;
