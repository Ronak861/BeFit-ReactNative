import { useState } from "react";

export default function NameGreeter() {
  const [name, setName] = useState("");

  return (
    <div className="box">
      <h3>👋 Enter Name</h3>
      <input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p className="hello-line">Hello, {name || "Guest"}!</p>
    </div>
  );
}
