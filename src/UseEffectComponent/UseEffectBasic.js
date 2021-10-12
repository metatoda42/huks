import React, { useState, useEffect } from "react";
//1. by default runs after every re-render
//2. use effect tidak bisa berjalan dalam conditional statement
//3.
export default function UseEffectBasic() {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);
  useEffect(() => {
    if (value > 1) {
      document.title = "New " + value;
    }
    console.log("cal use effect");
  }, [value]);
  const checkSize = () => {
    setSize(window.innerWidth);
    setheight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  return (
    <div>
      <h1>Haaii~</h1>
      <h1>useEffect Basic</h1>
      <h2>{value}</h2>
      <button onClick={() => setValue(value + 1)}>Klikue</button>
      <h2>{size}</h2>
      <h2>{height}</h2>
    </div>
  );
}
