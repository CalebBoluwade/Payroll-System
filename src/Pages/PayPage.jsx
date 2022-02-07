import React, { useState } from "react";

const PayPage = () => {
  const key = "pk_test_xxxxxxxxx";
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [currency] = "NGN";
  const [ref] = "PR";
  const [transRef, setTransRef] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
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
        >
          <div className="sm-text">PAY</div>
          <div className="right amount">N323,000</div>
          <div>
            <span>Calebb.jnr@gmail.com</span>
          </div>
          <div className="pay-platform">
            <img src="./credit-card.svg" width="45" alt="" />
            <span>Pay with Card</span>
          </div>
          <details className="pay-platform">
            <summary>dfhdh</summary>
            eeh
          </details>
          <div className="pay-platform">
            <img src="./bank.svg" width="45" alt="Bank" />
            <span>Pay with Bank</span>
          </div>
          <div className="pay-platform">
            <img src="./ussd_image.svg" width="45" alt="" />
            <span>Pay with USSD</span>
          </div>
          <p className="flow-text">Enter your details to pay</p>
          <div className="card-details">
            <div className="card">
              <label for="">
                CARD NUMBER
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="0000 0000 0000 0000"
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </label>
            </div>
            <div className="card">
              <div>
                <label for="">
                  CARD EXPIRY
                  <input
                    type="tel"
                    name=""
                    id=""
                    placeholder="MM/YY"
                    maxLength="4"
                    onChange={(e) => setCardExpiry(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label for="cvv">
                  CVV
                  <input
                    type="tel"
                    id=""
                    placeholder="CVV"
                    maxLength="3"
                    onChange={(e) => setCVV(e.target.value)}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="button_area">
            <button onClick={() => Paystack}>PAY</button>
          </div>
          <img
            src="./secure-white-en.e212765d.svg"
            alt=""
            className="PaySecure"
          />
          Why Chose PayEase?
        </form>
      </div>
    </>
  );
};

export default PayPage;
