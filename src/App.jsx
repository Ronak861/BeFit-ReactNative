import { useState } from "react";
import Header from "./components/Header";
import WeightCounter from "./components/WeightCounter";
import LightToggle from "./components/LightToggle";
import NameGreeter from "./components/NameGreeter";
import RegistrationForm from "./components/RegistrationForm";
import CardTransaction from "./components/CardTransaction";

function App() {
  const [lightOn, setLightOn] = useState(true);
  const [preview, setPreview] = useState({ name: "", email: "", password: "" });

  return (
    <div className={lightOn ? "app light-mode" : "app dark-mode"}>
      <Header />

      <div className="grid">
        <WeightCounter />
        <LightToggle lightOn={lightOn} setLightOn={setLightOn} />
        <NameGreeter />
        <RegistrationForm onLivePreview={setPreview} />
        <CardTransaction />

        <div className="box">
          <h3>👁️ Live Preview</h3>
          <p><strong>Name:</strong> {preview.name || "—"}</p>
          <p><strong>Email:</strong> {preview.email || "—"}</p>
          <p><strong>Password:</strong> {preview.password ? "•".repeat(preview.password.length) : "—"}</p>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 BeFit — Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
