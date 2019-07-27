import React from "react";

// NOTE: We recommend using Flow or TypeScript
// @see https://reactjs.org/docs/static-type-checking.html#adding-flow-type-annotations
const Button = ({ label, onClick }) => (
  <button type="button" onClick={onClick}>
    {label}
  </button>
);

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1>Hello, React</h1>
      <Button onClick={() => setCount(count + 1)} label={count} />
    </>
  );
};

export default App;
