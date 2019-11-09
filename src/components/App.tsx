import React from "react";
import { Button } from "./Button";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Hello, React</h1>
      <Button onClick={() => setCount(count + 1)} label={count.toString()} />
    </>
  );
};

export default App;
