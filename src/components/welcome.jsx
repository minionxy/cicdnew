import { useState } from "react";

function Welcome() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Welcome to FISAT</h1>
      <p>Federal Institute of Science and Technology</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", marginTop: "15px" }}
      />

      {name && (
        <p style={{ marginTop: "15px" }}>
          Hello, <b>{name}</b> 👋
        </p>
      )}

      <div style={{ marginTop: "25px" }}>
        <h3>Simple Counter</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
          -
        </button>
      </div>
    </div>
  );
}

export default Welcome;
