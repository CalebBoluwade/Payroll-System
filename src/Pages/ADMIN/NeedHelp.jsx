import React from "react";

const NeedHelp = () => {
  return (
    <div>
      <h2 className="center">Need Some Assistance?</h2>

      <h3 className="center">Here Are Some Our Direct Contact Mail Addresses</h3>

      <div className="center">
        <a href="mailto:demo@payroll.com" className="side-links">
          demo@payroll.com
        </a>
        Having Admin Issues?
        <a href="mailto:admin@payroll.com" className="side-links">
          admin@payroll.com
        </a>
        <a href="mailto:customercare@payroll.com" className="side-links">
          customercare@payroll.com
        </a>
        <a href="mailto:helpdesk@payroll.com" className="side-links">
          helpdesk@payroll.com
        </a>
      </div>

      <div className="center">
        <h3>NEED HELP PAYING SALARIES?</h3>
        <button>INDICATE INTEREST</button>

<div style={{width: 275}}>
        <input type="email" name="" id="" required={true} placeholder="E-mail address" />
        <textarea name="" id="" cols="35" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
