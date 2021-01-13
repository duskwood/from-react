import * as React from "react";

type ButtonProps = {
  onClick: (e: React.SyntheticEvent<EventTarget>) => void;
};
const Button = ({ onClick }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick}>
      Hello React
    </button>
  );
};

export const App = () => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Button onClick={onClick} />
    </>
  );
};
