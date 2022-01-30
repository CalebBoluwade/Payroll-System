import React from "react";
import { Link } from "react-router-dom";
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
        <Link href="tel:+2348038220361">+234 803 822 0382</Link>
      </div>

      <img src="giphy.gif" alt="" />

      <Footer />
    </>
  );
};

export default Contact;
