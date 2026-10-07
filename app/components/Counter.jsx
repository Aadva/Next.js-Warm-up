'use client';

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Loendur</h2>
      <p aria-live="polite">Arv: {count}</p>
      <button onClick={() => setCount(count + 1)}>Suurenda arvu</button>
    </section>
  );
}
