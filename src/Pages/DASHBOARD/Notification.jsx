import React from "react";
import BackTo from "../../Components/BackTo";

const Notification = () => {
  return (
    <>
      <section className="displaybox">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0 0 7px 0",
          }}
        >
          <BackTo />
          <img src="./../notification.svg" width={30} alt="" />
          <h2>Notifications</h2>
        </div>
      </section>
    </>
  );
};

export default Notification;
