import { useState } from "react";

export default function CardTransaction() {
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "", password: "" });
  const [showPwd, setShowPwd] = useState(false);
  const [paid, setPaid] = useState(false);

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handlePay = (e) => {
    e.preventDefault();
    setPaid(true);
  };

  return (
    <div className="box">
      <h3>💳 Supplement Purchase</h3>
      <p className="sub">Whey Protein — ₹1999</p>
      <div className="form-col">
        <input name="number" placeholder="Card Number" maxLength={16} value={card.number} onChange={handleChange} />
        <div className="row">
          <input name="expiry" placeholder="MM/YY" value={card.expiry} onChange={handleChange} />
          <input name="cvv" placeholder="CVV" maxLength={3} value={card.cvv} onChange={handleChange} />
        </div>
        <div className="pwd-wrap">
          <input
            name="password"
            type={showPwd ? "text" : "password"}
            placeholder="Transaction Password"
            value={card.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setShowPwd(!showPwd)}>{showPwd ? "Hide" : "Show"}</button>
        </div>
        <button onClick={handlePay}>Pay Now</button>
      </div>
      {paid && <p className="success">Payment Successful ✅ Supplement on its way!</p>}
    </div>
  );
}
