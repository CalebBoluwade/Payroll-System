import React, {useState} from "react";

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

    window.addEventListener("close", (e) =>{alert("Window Closed")})

    const Paystack_data = {
      key: key,
      email: email,
      currency: currency,
      amount: amount * 100,
      ref: ref + Math.floor(Math.random() * 1000000000 + 1),
    };

    const submitPaystackData = async (e) => {
      try{
        const res = await fetch("https://api.paystack.co/transaction/initialize",{
            headers: "application/json",
            body: JSON.stringify(Paystack_data)
        })
        const data = res.json;
      } catch{
          console.log(e)
        }
    }

  }
  return (
    <>
      <div className="main pay">
        <div className="pay">
          <div className="amount">AMOUNT TO PAY</div>
          <form
            action="https://api.paystack.co/transaction/initialize"
            className="form-control"
          >
            <div>
              <span>Calebb.jnr@gmail.com</span>
            </div>

            <input type="text" value="N323,000" id="amount_figure" disabled />

            {/* <div className="pay-platform">
        <img src="./3c2534y84l5k9l0dloty.png" width="25" alt="" />
        <span>Pay with Card</span>
    </div>

    <div className="pay-platform">
        <img src="./3c2534y84l5k9l0dloty.png" width="25" alt="" />
        <span>Pay with Bank</span>
    </div>

    <div className="pay-platform">
        <img src="./3c2534y84l5k9l0dloty.png" width="25" alt="" />
        <span>Pay with USSD</span>
    </div>  */}

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
                    <input type="tel" name="" id="" placeholder="MM/YY" onChange={(e) => setCardExpiry(e.target.value)} />
                  </label>
                </div>
                <div>
                  <label for="">
                    CVV
                    <input type="tel" name="" id="" placeholder="CVV" onChange={(e) => setCVV(e.target.value)}/>
                  </label>
                </div>
              </div>
            </div>

            <div className="button_area">
              <button onClick={() => Paystack}>PAY</button>
            </div>
          </form>

          <img src="./secure-white-en.e212765d.svg" alt="" className="PaySecure" />
        </div>
      </div>
    </>
  );
};

export default PayPage;
