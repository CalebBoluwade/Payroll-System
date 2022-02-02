import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="center">
        <img src="./cs.png" width="200" alt="" />
      </div>
      <div>
        Direct Line Numbers:
        <a href="mailto:calebb.jnr@gmail.com">+234 811 699 8004</a>
        <a href="tel:+2348038220361">
          <img src="./mobile-phone-svgrepo-com.svg" width={45} alt="" />
          +234 803 822 0381</a>
      </div>

      <img src="giphy.gif" alt="" />

      <Footer />
    </>
  );
};

export default Contact;
