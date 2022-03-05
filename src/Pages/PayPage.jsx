import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

const PayPage = () => {
  const [customerEmail, setCustomerEmail] = useState("");
  const currency = "NGN";
  const [ref] = "PR";
  // const [transRef, setTransRef] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiryM, setCardExpiryM] = useState("");
  const [cardExpiryY, setCardExpiryY] = useState("");
  const [CVV, setCVV] = useState("");
  const [serviceID, setServiceID] = useState("");

  // const payMethods = ["card", "bank", "ussd"];

  const payWithPaystack = (e) => {
    e.preventDefault();

    const Paystack_data = {
      email: customerEmail,
      cardNumber: cardNumber,
      cardExpiryM: cardExpiryM,
      cardExpiryY: cardExpiryY,
      CVV: CVV,
      currency: currency,
    };

    const submitPaystackData = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/pay",
          Paystack_data
        );
        const data = res.json;
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    submitPaystackData();
  };
  return (
    <>
      <div className="aqua pay">
        <form className="form-control" id="paystack">
          <div className="amount">N323,000</div>
          <div className="right">GROOVE TECH. SOLUTIONS</div>
          <div id="pay">
            <div className="pay-methods">
              <Tooltip title="Card">
                <div className="pay-with">
                  <img src="./credit-card.svg" width="45" alt="" />

                  <input
                    className="service"
                    type="radio"
                    name="select"
                    className="select_service"
                    onClick={() => setServiceID("Card")}
                  />
                </div>
              </Tooltip>

              <Tooltip title="Bank">
                <div className="pay-with">
                  <img src="./bank.svg" width="45" alt="Bank" />

                  <input
                    className="service"
                    type="radio"
                    name="select"
                    className="select_service"
                    onClick={() => setServiceID("Bank")}
                  />
                </div>
              </Tooltip>

              <Tooltip title="USSD">
                <div className="pay-with">
                  <img src="./ussd_image.svg" width="45" alt="" />

                  <input
                    className="service"
                    type="radio"
                    name="select"
                    className="select_service"
                    onClick={() => setServiceID("USSD")}
                  />
                </div>
              </Tooltip>
            </div>

            <div id="card-details">
              <span className="center">Enter your details to pay</span>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />

                <input
                  type="text"
                  name=""
                  id="cardNumber"
                  minLength={16}
                  maxLength={16}
                  placeholder="0000 0000 0000 0000"
                  onChange={(e) => setCardNumber(e.target.value)}
                />

                <div className="card">
                  <input
                    type="tel"
                    name=""
                    id="month"
                    placeholder="MM"
                    min="01"
                    max="12"
                    minLength="2"
                    maxLength="2"
                    required
                    onChange={(e) => setCardExpiryM(e.target.value)}
                  />
                  /
                  <input
                    type="tel"
                    id="year"
                    placeholder="YY"
                    min="22"
                    minLength="2"
                    maxLength="2"
                    required
                    onChange={(e) => setCardExpiryY(e.target.value)}
                  />
                  <input
                    type="tel"
                    id="cvv"
                    placeholder="CVV"
                    minLength="3"
                    maxLength="3"
                    required
                    onChange={(e) => setCVV(e.target.value)}
                  />
                </div>
                <div style={{ margin: "15px 0" }}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    style={{ marginRight: 10 }}
                  />
                  Save Card
                </div>
              </div>
            </div>

            {/* <div className="pay-platform">
              <div className="pay-methods">
                <img src="./bank.svg" width="45" alt="Bank" />
                Pay with Keystone
              </div>
              <div className="pay-with">
                <img src="./bank.svg" width="45" alt="Bank" />
                Pay with GTCO
              </div>
              <div className="pay-with">
                <img src="./bank.svg" width="45" alt="Bank" />
                Pay with ALAT
              </div>
            </div> */}
            {/* 
          <div className="pay-platform">
            <img src="./ussd_image.svg" width="45" alt="" />
          </div> */}
          </div>
          <button onClick={payWithPaystack}>PROCEED</button>
          Why Chose PayEase?
        </form>
        <img src="./paystackSecured.svg" alt="paystack" />
      </div>
    </>
  );
};

export default PayPage;
