import React, {useState} from "react";
import InputField from "@material-ui/core/Input";

const utilities = () => {
  const trans_status = true;
  return (
    <>
      <div className="board">
        <div className="transaction-status z-depth-2">
          <div className="displaybox">

{ trans_status ? <div><img src="../success.svg" alt="success" className="transaction" />
           <h6>Transaction Success</h6>
           <h6>Transaction Ref</h6>
           <h6 id="trans_ref">XXXXXXXXX</h6></div> : <div><img src="../error.svg" alt="error" className="transaction" />
           <h6>Transaction Failed</h6></div> }
           
          </div>
        </div>
        <h3>Airtime & Data</h3>
        <div style={{display: "flex"}}>
        <div className="displaybox display2 z-depth-5 hoverable">
        <img src="../glo.png" alt="glo_logo" width="50" 
            style={{borderRadius: "50%"}} />
          <details>
            <hr />
            Enter Phone Number
            <InputField />
            <summary>Globacom Network
            </summary>
          </details>
        </div>
        <div className="displaybox display z-depth-5 hoverable" >
        <img src="../mtn.jfif" alt="mtn_logo" width="50" 
            style={{borderRadius: "50%"}} />
          <details>
           MTN
            <summary> MTN Network</summary>
          </details>
        </div>
        </div>

        <div style={{display: "flex"}}>
        <div className="displaybox display2 z-depth-5 hoverable">
          <details>
            Globacom
            <summary>Airtel Network</summary>
          </details>
        </div>
        <div className="displaybox display2 z-depth-5 hoverable">
          <details>
            Globacom
            <summary>9Mobile Network</summary>
          </details>
        </div>
        </div>
        
        
        <br />
        <br />
        <h3>Electrity</h3>
        <div className="displaybox display2 z-depth-5 hoverable">
          <details>
            IK
            <summary>IKEDC</summary>
          </details>
        </div>
        <div className="displaybox display2 z-depth-5 hoverable">
          <details>
            IK
            <summary>IBEDC</summary>
          </details>
        </div>
        <div className="displaybox display2 z-depth-5 hoverable">
          <details>
            IK
            <summary>IKEDC</summary>
          </details>
        </div>
        vs
      </div>
    </>
  );
};

export default utilities;
