import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-12">
      <div className="badge badge-neutral">
        <div className="inline-grid *:[grid-area:1/1]">
          <div className="status status-primary animate-ping"></div>
          <div className="status status-primary"></div>
        </div>
        Vite is running.
      </div>
      <div className="flex items-center gap-24">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-18" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-18" alt="React logo" />
        </a>
      </div>
      <button
        className="btn btn-soft btn-primary"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <p>
        Edit <code className="font-mono text-red-900">src/App.jsx</code> and
        save to test HMR.
      </p>
    </main>
  );
}

export default App;
