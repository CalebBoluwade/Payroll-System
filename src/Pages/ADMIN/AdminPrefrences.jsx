import React, { useState } from "react";

const AdminPrefrences = () => {
  const [mailChecked, setMailChecked] = useState();
  const [smsChecked, setSMSChecked] = useState();

  const push_admin_pref = {
    mailChecked: mailChecked,
    smsChecked: smsChecked,
  };

  return (
    <>
      <h1 className="center">Prefrences</h1>
      <h3>Push Notifications</h3>
      <br />
      <div>
        <input type="checkbox" id="toggle" />
        <label for="toggle"></label>
      </div>
      <br />
      <br />
      <input
        type="checkbox"
        className="check"
        onChange={(e) => setMailChecked(e.target.value)}
      />
      <img src="../mail-svgrepo-com.svg" width={45} alt="Mail" />
      <input
        type="checkbox"
        className="check"
        onChange={(e) => setSMSChecked(e.target.value)}
      />
      <img src="../chat.svg" width={45} alt="" />

      <h4>CURRENT DEBIT SOURCE</h4>
      <input type="text" name="" id="" disabled value="0234794084" />

      <h4>NAME ON ACCOUNT</h4>
      <input
        type="text"
        name=""
        id=""
        disabled
        value="BOLUWADE CALEB OLADIPUPO"
      />

      <h3>CHANGE DEBIT SOURCE ACCOUNT</h3>
      <input
        type="text"
        name="acct_number"
        id=""
        minLength="10"
        maxLength="10"
      />

      <h4>NAME ON ACCOUNT</h4>
      <div className="detail-box"></div>

      <h3>Currency Denomination</h3>
      <select name="" id="">
        <option value="">None</option>
        <option value="">NIGERIAN NAIRA - NGN</option>
        <option value="" disabled>
          US DOLLAR - USD [In View]
        </option>
        <option value="" disabled>
          BRITISH POUND - GBP [In View]
        </option>
      </select>

      <h3>CHANGE PASSWORD</h3>
      <input type="password" name="" id="" />
      <input type="password" name="" id="" />

      <div className="button-area right">
        <button>Apply Changes</button>
      </div>
    </>
  );
};

export default AdminPrefrences;
