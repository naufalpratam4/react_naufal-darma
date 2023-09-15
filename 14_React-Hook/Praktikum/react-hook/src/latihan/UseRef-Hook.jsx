import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  // untuk pindah ke elemen apabila onclick
  const linkRef = useRef(null);
  const goto = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" ref={linkRef}>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <div onClick={() => goto(linkRef.current)}>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div onClick={() => alert("coba")}>
        <button ref={linkRef} style={{ marginTop: "250px" }}>
          useRef ketika di klik
        </button>
      </div>
    </>
  );
}

export default App;
