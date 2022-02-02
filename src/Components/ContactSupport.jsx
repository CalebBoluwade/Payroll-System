import React from "react";
import ContactPhoneIcon from "@material-ui/icons/ViewAgendaTwoTone";


const ContactSupport = () => {
  return (
    <div className="fixed-action-btn">
      <a href="/" className="blue darken-3 btn-floating btn-large right">
        <ContactPhoneIcon style={{ fontSize: 40, paddingTop: 15 }} />
      </a>
    </div>
  );
};

export default ContactSupport;
