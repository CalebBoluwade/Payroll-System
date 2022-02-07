import React, { useState } from "react";

const Notifications = () => {
  const [mailChecked, setMailChecked] = useState();
  const [smsChecked, setSMSChecked] = useState();

  const push_motification_pref = {
    mailChecked: mailChecked,
    smsChecked: smsChecked,
  };

  return (
    <>
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
      <div className="button-area right">
        <button>Apply Changes</button>
      </div>
    </>
  );
};

export default Notifications;
