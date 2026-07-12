import { useState } from "react";

export default function RegistrationForm({ onLivePreview }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    onLivePreview(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="box">
      <h3>📝 Registration Form</h3>
      <div className="form-col">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
      </div>
      {submitted && <p className="success">Registered as {form.name || "Guest"} ✅</p>}
    </div>
  );
}
