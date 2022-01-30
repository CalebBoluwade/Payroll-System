import React, { useState, useEffect } from "react";
import { TextField, Select, MenuItem } from "@material-ui/core";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  CircularProgress,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { loading } from "../Actions";
import { notLoading } from "../Actions";

const Util = () => {
  const isLoading = useSelector((state) => state.loadingReducer);
  const dispatch = useDispatch();
  // const TransState = useSelector((state) => state.loadingReducer); //
  // const dispatch = useDispatch();

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
      try{
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
    } catch(e){
console.log(e);
    }
    };
    // submitAirtimeRequest();
  };

  let service_name = serviceId;

//   useEffect(() => {
//   const getBillerServices = async () => {
//     try{
//     const res = await fetch(
//       "https://buybills.herokuapp.com/api/biller_services"
//     );
//     const dataRes = await res.json();
//     setBillerServices(dataRes);
//     dispatch(notLoading);
//     return dataRes;
//   } catch(e){
//     console.log(e);
//   }
//   };
//   getBillerServices();
 
// }, []);

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

  return (
    <>
    {isLoading ? <>
      <div className="transaction_status center">
        <div className="center">
          <CircularProgress />
        </div>
        <div className="center">Processing..</div>
      </div></> : <>
    <div style={{ display: "flex", flexDirection: "row", margin: "0px auto" }}>
        <div className="displaybox bills z-depth-3">
          <img
            src="https://vtpass.com/resources/products/200X200/MTN-Airtime.jpg"
            className="circle"
            alt=""
          />
          <input
            type="radio"
            name=""
            style={{ position: "relative", left: 20 }}
          />
        </div>
        <div className="displaybox bills z-depth-3">
          <img
            src="https://vtpass.com/resources/products/200X200/GLO-Airtime.jpg"
            className="circle"
            alt=""
          />
        </div>
        <div className="displaybox bills z-depth-3">
          <img
            src="https://vtpass.com/resources/products/200X200/Airtel-Data.jpg"
            className="circle"
            alt="Airtel Cheap Data"
          />
        </div>
        <div className="displaybox bills z-depth-3">
          <img
            src="https://vtpass.com/resources/products/200X200/9mobile-Airtime.jpg"
            className="circle"
            alt=""
          />
        </div>
      </div>

      <Button className="center" onClick={handleAirtime}>Pay</Button></>}
     <button onClick={dispatch(notLoading())}>test</button>
          {/* <Select required>
            <MenuItem>100</MenuItem>
            <MenuItem>200</MenuItem>
            <MenuItem>500</MenuItem>
            <MenuItem>1000</MenuItem>
            <MenuItem>1500</MenuItem>
          </Select>

          <TextField
            required
            type="email"
           
            onChange={(e) => setEmailAddress(e.target.value)}
          ></TextField>
          <br />
          <TextField
            required
            type="text"
          
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></TextField>
          <br />
          <TextField
            required
            type="number"
        
            onChange={(e) => setAirtimeAmount(e.target.value)}
          ></TextField> */}

          {/* <div style={{ display: "flex", flexDirection: "row", margin: "0px auto" }}>
          <FormControl component="fieldset"  style={{ display: "flex", flexDirection: "row", margin: "0px auto" }}>
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
          </div> */}
         

      {/* <TextField
        required
        type="number"
        label="Meter Number"
        onChange={(e) => setMeterNo(e.target.value)}
      ></TextField> */}

      
    </>
  );
};

export default Util;
