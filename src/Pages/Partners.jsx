import React from 'react';

const Partners = () => {
  return <div>
       <div style={{ background: "#f0db4f" }}>
          <h3 className="center">Our Partners</h3>
          <div
            style={{
              padding: 15,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <img src="../logo-javascript.png" alt="Partner1" width="75" />
            <img src="../react.png" alt="Partner2" width="75" />
            <img src="../github.png" alt="Partner3" width="75" />
          </div>
        </div>
  </div>;
};

export default Partners;
