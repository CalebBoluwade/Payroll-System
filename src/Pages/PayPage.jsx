import React, { useState } from "react";

const PayPage = () => {
  const key = "pk_test_xxxxxxxxx";
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [currency] = "NGN";
  const [ref] = "PR";
  const [transRef, setTransRef] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiryM, setCardExpiryM] = useState("");
  const [cardExpiryY, setCardExpiryY] = useState("");
  const [CVV, setCVV] = useState("");

  const Paystack = (e) => {
    e.preventDefault();

    window.addEventListener("close", (e) => {
      alert("Window Closed");
    });

    const Paystack_data = {
      key: key,
      email: email,
      currency: currency,
      amount: amount * 100,
      ref: ref + Math.floor(Math.random() * 1000000000 + 1),
    };

    const submitPaystackData = async (e) => {
      try {
        const res = await fetch(
          "https://api.paystack.co/transaction/initialize",
          {
            headers: "application/json",
            body: JSON.stringify(Paystack_data),
          }
        );
        const data = res.json;
      } catch {
        console.log(e);
      }
    };
  };
  return (
    <>
      <div className="aqua pay">
        <form
          action="https://api.paystack.co/transaction/initialize"
          className="form-control"
          id="paystack"
        >
          <div className="amount">N323,000</div>
          <div className="right">GROOVE TECH. SOLUTIONS</div>
          <div className="pay-platform">
            <img src="./credit-card.svg" width="45" alt="" />
            <span>Pay with Card</span>
            Enter your details to pay
            <div className="card-details">
              <input
                type="email"
                name=""
                id=""
                placeholder="0000 0000 0000 0000"
                onChange={(e) => setCardNumber(e.target.value)}
              />

              <div className="card">
                <input
                  type="tel"
                  name=""
                  id="month"
                  placeholder="Month"
                  maxLength="4"
                  onChange={(e) => setCardExpiryM(e.target.value)}
                />

                <input
                  type="tel"
                  id="year"
                  placeholder="C V V"
                  minLength="3"
                  maxLength="3"
                  onChange={(e) => setCardExpiryY(e.target.value)}
                />
              </div>
              <input
                type="tel"
                id=""
                placeholder="CVV"
                minLength="3"
                maxLength="3"
                onChange={(e) => setCVV(e.target.value)}
              />
            </div>
          </div>
          <div className="pay-platform">
            <img src="./bank.svg" width="45" alt="Bank" />
            <span>Pay with Bank</span>
          </div>
          <div className="pay-platform">
            <img src="./ussd_image.svg" width="45" alt="" />
            <span>Pay with USSD</span>
          </div>
          <button onClick={() => Paystack}>PROCEED</button>
          Why Chose PayEase?
        </form>
        <img src="./secure-white-en.e212765d.svg" alt="paystack" />
      </div>
    </>
  );
};

export default PayPage;
