import { useState } from "react";

export default function WeightCounter() {
  const [weight, setWeight] = useState(70);

  return (
    <div className="box">
      <h3>⚖️ Weight Tracker</h3>
      <p className="big">{weight} kg</p>
      <div className="row">
        <button onClick={() => setWeight((w) => Math.max(0, w - 1))}>-1</button>
        <button onClick={() => setWeight(70)}>Reset</button>
        <button onClick={() => setWeight((w) => w + 1)}>+1</button>
      </div>
    </div>
  );
}
