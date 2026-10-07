import Counter from "./components/Counter";
import ServerMessage from "./components/ServerMessage";

export default function Home() {
  return (
    <>
      <h1>Next.js Warm-up</h1>
      <p>Tere tulemast!</p>
      <Counter />
      <ServerMessage />
    </>
  );
}
