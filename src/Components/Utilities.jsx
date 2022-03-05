import React, { useState } from "react";
import { Dialog } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const Util = ({ OpenUtils, setOpenUtils }) => {
  // const isLoading = useSelector((state) => state.loadingReducer);
  // const dispatch = useDispatch();

  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState();
  const [serviceID, setServiceID] = useState("");
  const [meterNo, setMeterNo] = useState("");

  const handleAirtime = (e) => {
    e.preventDefault();

    // if (emailAddress || phoneNumber || airtimeAmount === "") {
    //   console.log(airtime_data);
    // } else {
    //   console.warn("Input cannot be empty");
    // }
  };

  const airtime_data = {
    amount: amount,
    email: emailAddress,
    phone: phoneNumber,
    serviceId: serviceID,
  };

  const meter_data = {
    amount: amount,
    smartcard: "1212121212",
    email: emailAddress,
    customerId: meterNo,
    serviceId: "1212121212",
    channel: "web",
    variationCode: "516",
  };

  const submitAirtimeRequest = async () => {
    try {
      const res = await axios.post(
        "http://localhost:4000/buy_utilities/airtime",
        airtime_data
      );

      const data = await res.json();
      console.log(data);
      // return data;
    } catch (e) {
      console.warn(e);
    }
  };
  console.log(airtime_data);

  return (
    <>
      <Dialog open={OpenUtils} onClose={() => setOpenUtils(!OpenUtils)}>
        <div style={{ padding: 21 }}>
          <div id="pay">
            <div className="pay-methods">
              <div className="bills">
                <input
                  className="service"
                  type="radio"
                  name="selectg"
                  className="select_service"
                  onClick={() => setServiceID("MTN")}
                />
                <img src="../airtime.svg" className="img wx" alt="" />
              </div>
              <div className="bills">
                <input
                  className="service"
                  type="checkbox"
                  name="selectg"
                  className="select_service"
                  onClick={() => setServiceID("MTN")}
                />
                <img src="../airtime.svg" className="img wx" alt="" />
              </div>
              <div className="bills">
                <input
                  className="service"
                  type="radio"
                  name="selectg"
                  className="select_service"
                  onClick={() => setServiceID("MTN")}
                />
                <img src="../utilities.svg" className="img wx" alt="" />
              </div>
              <div className="bills">
                <input
                  className="service"
                  type="radio"
                  name="selectg"
                  className="select_service"
                  onClick={() => setServiceID("MTN")}
                />
                <img src="../utilities.svg" className="img wx" alt="" />
              </div>
            </div>

            <div>
              <div className="services">
                <div className="bills">
                  <input
                    className="service"
                    type="radio"
                    name="select"
                    className="select_service"
                    onClick={() => setServiceID("Glo")}
                  />

                  <img src="../glo-airtime.jpg" className="img wx" alt="" />
                </div>

                <div className="bills">
                  <input
                    className="service"
                    type="radio"
                    name="select"
                    className="select_service"
                    onClick={() => setServiceID("MTN")}
                  />
                  <img src="../mtn-airtime.jpg" className="img wx" alt="" />
                </div>

                <div className="bills">
                  <input
                    className="service"
                    type="radio"
                    name="select"
                    className="select_service"
                    onClick={() => setServiceID("Airtel")}
                  />

                  <img src="../airtel-airtime.jpg" className="img wx" alt="" />
                </div>

                <div className="bills">
                  <input
                    className="service"
                    type="radio"
                    name="select"
                    className="select_service"
                    onClick={() => setServiceID("9mobile")}
                  />

                  <img src="../9mobile-airtime.jpg" className="img wx" alt="" />
                </div>
              </div>

              <div>
                <select
                  name=""
                  id=""
                  onClick={(e) => setAmount(e.target.value)}
                >
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                </select>

                <br />
                <input
                  required
                  type="email"
                  label="Email"
                  placeholder="E-mail Address"
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
                <br />
                <input
                  required
                  type="text"
                  label="Beneficiary"
                  placeholder="Beneficiary"
                  min={11}
                  maxLength={11}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <br />
              </div>

              {/* <div>
            <input
              required
              type="select"
              placeholder="Amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <br />
            <input
              type="text"
              name=""
              id=""
              onChange={(e) => setMeterNo(e.target.value)}
            />
          </div> */}

              <button onClick={submitAirtimeRequest}>BUY</button>
            </div>
          </div>
        </div>

        <p className="center" style={{ padding: "0.5em" }}>
          Powered By <img src="./vtpass2.png" width={100} alt="" />
        </p>
      </Dialog>
    </>
  );
};

export default Util;
