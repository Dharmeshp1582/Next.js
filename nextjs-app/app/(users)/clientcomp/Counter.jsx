import React, { useState } from "react";

//if client component imports another component , that imported one becomes a client component too, even if it doesn't have "use client"

export const Counter = () => {
  const [inc, setInc] = useState(0);

  return (
    <button className="bg-indigo-400 text-black p-5 cursor-pointer" onClick={() => setInc((prev) => prev + 1)}>
      Add - {inc}
    </button>

  );
};
