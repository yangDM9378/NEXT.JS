"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((num) => num + 1)}>
        숫자증가
      </button>
    </>
  );
}
