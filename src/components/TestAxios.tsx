import React, { useState, useEffect } from "react";
import axios from "axios";

const TestAxios = ({ url }: { url: string }) => {
  const [state, setState] = useState<{ title: string }>();

  useEffect(() => {
    axios.get(url).then((res) => setState(res.data));
  }, []);

  return (
    <div>
      <h1> Axios Test </h1>
      {state ? <p data-testid="title">{state.title}</p> : <p>...Loading</p>}
    </div>
  );
};

export default TestAxios;
