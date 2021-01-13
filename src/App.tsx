import * as React from "react";

const Button = ({
  onClick,
}: {
  onClick: (e: React.SyntheticEvent<EventTarget>) => void;
}) => {
  return (
    <button type="button" onClick={onClick}>
      Hello React
    </button>
  );
};

export const App = () => {
  const onClick = React.useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <>
      <Button onClick={onClick} />
    </>
  );
};
