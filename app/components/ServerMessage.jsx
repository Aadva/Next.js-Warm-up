'use client';

import { useState } from "react";

export default function ServerMessage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMessage() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch('/api/message');
      if (!response.ok) {
        throw new Error("Päring ebaõnnestus");
      }
      const data = await response.json();
      setMessage(data.message);
    } catch {
      setError("Sõnumi laadimine ebaõnnestus. Proovi uuesti.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h2>Serveri sõnum</h2>
      <button onClick={loadMessage} disabled={loading}>Load server message</button>
      <div aria-live="polite">
        {loading && <p>Laadin...</p>}
        {message && <p>{message}</p>}
      </div>
      {error && <p role="alert">{error}</p>}
    </section>
  );
}
