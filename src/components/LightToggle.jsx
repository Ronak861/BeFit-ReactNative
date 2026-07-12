export default function LightToggle({ lightOn, setLightOn }) {
  return (
    <div className="box">
      <h3>💡 Light Toggle</h3>
      <div className={`bulb ${lightOn ? "on" : "off"}`}>💡</div>
      <button onClick={() => setLightOn(!lightOn)}>
        Turn {lightOn ? "Off" : "On"}
      </button>
    </div>
  );
}
