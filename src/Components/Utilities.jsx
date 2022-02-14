import React, { useState, useEffect } from "react";
import { CircularProgress, Dialog } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loading } from "../Actions";
import { notLoading } from "../Actions";

const Util = ({ OpenUtils, setOpenUtils }) => {
  const isLoading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();

  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [airtimeAmount, setAirtimeAmount] = useState();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [service, setService] = useState("");
  const [serviceId, setServiceID] = useState("");
  const [meterNo, setMeterNo] = useState("");
  const [biller_services, setBillerServices] = useState();

  const handleAirtime = (e) => {
    dispatch(loading);
    e.preventDefault();

    if (emailAddress || phoneNumber || airtimeAmount || paymentMethod === "") {
      console.log(airtime_data);
    } else {
      console.warn("Input cannot be empty");
    }

    const airtime_data = {
      amount: airtimeAmount,
      logo: "https://sandbox.vtpass.com/resources/products/200x200/Airtel-data.jpg",
      email: emailAddress,
      customerId: phoneNumber,
      channel: "web",
      payment_channel: paymentMethod,
      variationCode: "516",
      serviceId: service,
    };

    const meter_data = {
      amount: airtimeAmount,
      logo: "https://sandbox.vtpass.com/resources/products/200x200/Airtel-data.jpg",
      smartcard: "1212121212",
      email: emailAddress,
      customerId: "1111111111111",
      serviceId: "1212121212",
      channel: "web",
      payment_channel: paymentMethod,
      variationCode: "516",
    };

    const submitAirtimeRequest = async () => {
      try {
        const res = await fetch(
          "https://buybills.herokuapp.com/api/initiate/transactions",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(airtime_data),
          }
        );
        const data = await res.json();
        // dispatch(isLoading())
        return data;
      } catch (e) {
        console.log(e);
      }
    };
    // submitAirtimeRequest();
  };

  let service_name = serviceId;

  useEffect(() => {
    const getBillerServices = async () => {
      try {
        const res = await fetch(
          "https://buybills.herokuapp.com/api/biller_services"
        );
        const dataRes = await res.json();
        setBillerServices(dataRes);
        dispatch(notLoading);
        return dataRes;
      } catch (e) {
        console.log(e);
      }
    };
    getBillerServices();

    console.log(biller_services);
  }, []);

  // const postBillsRequest = async () => {
  //   try{
  //   const res = await fetch("http://localhost:5000/recent_transactions", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   });
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // }
  // catch (e){
  //   console.warn(e);
  // }
  // };
  let a = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <>
      <Dialog open={OpenUtils} onClose={() => setOpenUtils(!OpenUtils)}>
        <div style={{ width: 400, padding: 13 }}>
          <div className="services">
            <div className="bills">
              <img src="./airtime.svg" width={50} alt="" />
            </div>
            <div className="bills">
              <img src="./utilities.svg" width={35} alt="" />
            </div>
            <div className="bills">
              <img src="./utilities.svg" width={35} alt="" />
            </div>
            <div className="bills">
              <img src="./utilities.svg" width={35} alt="" />
            </div>
          </div>

          <div>
            <input
              required
              type="email"
              label="Email"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <br />
            <input
              required
              type="text"
              label="Beneficiary"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <input
              required
              type="number"
              label="Amount"
              onChange={(e) => setAirtimeAmount(e.target.value)}
            />
          </div>
        </div>
        {/* <div>
              <Select
                required
                fullWidth
                onChange={(e) => setService(e.target.value)}
              >
                <MenuItem>100</MenuItem>
                <MenuItem>200</MenuItem>
                <MenuItem>100</MenuItem>
                <MenuItem>500</MenuItem>
                <MenuItem>1000</MenuItem>
              </Select>

            

              <br />
              <br />
              <FormControl component="fieldset">
                <FormLabel component="legend">Payment Options</FormLabel>
                <RadioGroup
                  aria-label="payment"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <FormControlLabel
                    value="Flutterwave"
                    control={<Radio />}
                    label="Flutterwave"
                  />
                  <FormControlLabel
                    value="paystack"
                    control={<Radio />}
                    label="PayStack"
                  />
                  <FormControlLabel
                    value="Wallet"
                    disabled
                    control={<Radio />}
                    label="Wallet"
                  />
                </RadioGroup>
              </FormControl>
              <br />
              <Button onClick={handleAirtime}>Pay</Button>
            </div>
          </div>

          <br />

          <input
            required
            type="text"
            label="Meter Number"
            onChange={(e) => setMeterNo(e.target.value)}
          />
        </div> */}

        {/* <div className="transaction_status">
          <div className="center">
            <CircularProgress />
          </div>
          <div className="center">Processing..</div>
        </div>
      </div> */}
      </Dialog>
    </>
  );
};

export default Util;
