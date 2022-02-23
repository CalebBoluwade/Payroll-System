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

  const [openCard, setOpenCard] = useState(true);
  const [openBank, setOpenBank] = useState(false);
  const [openUSSD, setOpenUSSD] = useState(false);

  const payMethods = ["card", "bank", "ussd"];

  // switch (payMethods) {
  //   case 0:
  //     setOpenBank(true);
  //     break;
  //   case 1:
  //     setOpenCard(true);
  //     break;
  //   case 2:
  //     setOpenUSSD(true);
  //     break;
  //   default:
  //     setOpenBank(true);
  //     break;
  // }

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
                </div>
              </Tooltip>

              <Tooltip title="Bank">
                <div className="pay-with">
                  <img src="./bank.svg" width="45" alt="Bank" />
                </div>
              </Tooltip>

              <Tooltip title="USSD">
                <div className="pay-with">
                  <img src="./ussd_image.svg" width="45" alt="" />
                </div>
              </Tooltip>
            </div>

            <div
              className={`pay-platform ${
                payMethods[0] == "card" ? "hide" : "hide"
              }`}
            >
              Enter your details to pay
              <div className="card-details">
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
              </div>
            </div>

            <div
              className="pay-platform"
              className={`pay-platform ${
                payMethods[1] == "bank" ? "hide" : ""
              }`}
            >
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
            </div>
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
