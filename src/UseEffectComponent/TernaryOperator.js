import React, { useEffect, useState } from "react";

export const TernaryOperator = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        show/hide
      </button>
      {show && <Item />}
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);
  const checkSize = () => {
    setSize(window.innerWidth);
    setheight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div>
      <h1>Window</h1>
      <h2>size:{size}</h2>
      <h2>size:{height}</h2>
    </div>
  );
};
