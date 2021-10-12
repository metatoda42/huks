import React, { useState } from "react";
export const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Tambah</button>
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={() => setValue(value - 1)}>Kurang</button>
    </div>
  );
};
