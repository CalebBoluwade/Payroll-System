import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
} from "@mui/material";

const Pricing = () => {
  const [openTCs, closeTCs] = useState(false);
  return (
    <>
      <Header />

      {/* <div className="box">
        <div className="displaybox display hoveranim z-depth-5 hoverable">
          <div className="box" style={{ alignItems: "center" }}>
            <div>
              <span className="bubble">%</span>
              <div className="bubble2">
                <img src="./smartwatch-svgrepo-com.svg" width={45} alt="" />
              </div>
              <span className="bubble3"></span>
              <div >
                <img
                  src="./credit-card-money-svgrepo-com.svg"
                  className="bubble5"
                  width={70}
                  alt=""
                />
              </div>

              <div className="bubble4">
                <img src="./money-bag-svgrepo-com.svg" width={50} alt="" />
              </div>
            </div>
            <div
              style={{
                fontSize: 40,
                alignItems: "center",
                height: 70,
              }}
            >
              WHY CHOOSE US
            </div>
          </div>
        </div>
      </div> */}

      <div className="subcription-fees">
        <div className="card z-depth-5 Payment-Plan hoverable">
          <span style={{ color: "#0a3838" }}>
            <h5 className="flow-text">
              <strong>30 Days Trial</strong>
            </h5>
          </span>
          <br />
          <ul style={{ listStyle: "inside !important" }}>
            <li>FREE</li>
            <li>30 DAY TEST PERIOD</li>
            <li>Maximum of 2 Payments</li>
          </ul>
          <br />
          <Dialog open={openTCs} onClose={() => closeTCs(!openTCs)}>
            <DialogTitle>Terms of Use Agreement</DialogTitle>
            <DialogContent>
              <div className="TCs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis delectus sunt aperiam dolore. Adipisci, vitae
                repudiandae debitis ratione officiis consectetur iusto
                dignissimos dicta, ex placeat nostrum voluptatem accusamus iure
                et tempore id obcaecati in molestias odit deleniti maiores unde
                ducimus. Sapiente blanditiis non unde neque, est ex modi, quo
                repellendus magni, nostrum repellat temporibus sed debitis quas
                adipisci delectus similique dignissimos error. Aliquid aut
                necessitatibus soluta fugiat omnis iusto debitis architecto
                facilis consequuntur laboriosam, distinctio optio quasi
                exercitationem sunt totam quam libero laborum, labore modi nam
                rem ex cupiditate. <br />
                <p>
                  Dignissimos tempore debitis voluptatum nesciunt labore et
                  asperiores earum odit dicta fugit quam, sunt quia magnam
                  voluptate recusandae repellat, saepe quis pariatur quas
                  exercitationem dolor odio porro? Deserunt cumque aliquid
                  explicabo quaerat pariatur excepturi dicta iusto unde
                  doloribus, quod nam recusandae aperiam inventore error
                  repellat ratione rem numquam consequatur, necessitatibus
                  voluptas dolorem, mollitia ipsa. Nihil aspernatur et quisquam
                  voluptatibus quam? Sint, commodi eaque amet eligendi, pariatur
                  libero ullam veritatis at, adipisci odio voluptas neque
                  obcaecati harum corporis nostrum?.
                </p>{" "}
                <br /> Facilis assumenda, quae atque, saepe enim perspiciatis
                quos quo quisquam, quis accusantium animi beatae. Recusandae
                similique excepturi possimus, praesentium delectus sapiente
                fugiat assumenda alias quisquam autem dolorum eaque. Dolorum,
                cum nesciunt quas ea illo recusandae. Sint atque at qui natus
                veniam, quo illo dolor maxime minus alias quas fuga rerum autem
                consequatur dignissimos accusantium exercitationem enim quia
                excepturi.
              </div>
              <div>
                <Checkbox />
              </div>
            </DialogContent>
          </Dialog>
          <div className="price-quote">FREE</div>
          <Button onClick={() => closeTCs(!openTCs)}>Try Demo</Button>
        </div>

        <div className="card z-depth-4 Payment-Plan hoverable">
          <span style={{ color: "grey" }}>
            <h5 className="flow-text card-title">
              <strong>6 Months Plan</strong>
            </h5>
          </span>
          <br />
          <ul style={{ listStyle: "inside" }}>
            <li>
              <strong>10% OFF</strong>
            </li>
            <li>Bi - Annual Payments</li>
            <li>Customizable Scheduled Payments</li>
          </ul>
          <br />
          <div>
            <span className="price-slash">N33,000</span>
            <div className="price-quote">N25,750</div>
            <span className="price-discount">Save N8,250</span>
          </div>
          <Button onClick={() => closeTCs(!openTCs)}>N25,750</Button>
        </div>

        <div className="card z-depth-4 Payment-Plan hoverable">
          <span style={{ color: "goldenrod" }}>
            <h5 className="flow-text card-title">
              <strong>365 Day Plan</strong>
            </h5>
          </span>
          <br />
          <ul style={{ listStyle: "inside", fontSize: 16, fontWeight: 400 }}>
            <li>
              <strong>25% OFF</strong>
            </li>
            <li>1 Year Payment</li>
            <li>Customizable Scheduled Payments</li>
            <li>Secured Payments</li>
          </ul>
          <br />
          <div>
            <span className="price-slash">N199,000</span>
            <div className="price-quote">N148,250</div>
            <span className="price-discount">Save N49,750</span>
          </div>

          <Button
            outlined
            onClick={() => closeTCs(!openTCs)}
            style={{ position: "relative", bottom: "0px" }}
          >
            Pay N148,250
          </Button>
        </div>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: 21,
          justifyContent: "space-evenly",
        }}
      >
        <Link>
          <span>Services</span>
        </Link>
        <Link>
          <span>Privacy Policy</span>
        </Link>
        <Link>
          <span>T & C's</span>
        </Link>
      </div>
      {/* <div style={{ paddingTop: 50 }}>
        <h4 className="center">What We Offer...</h4>
        <div
          style={{
            width: "80%",
            display: "flex",
            margin: "0px auto",
            justifyContent: "space-evenly",
          }}
        >
          <div className="card" style={{ width: 100, padding: 15 }}>
            <TimerRoundedIcon style={{ color: "lightskyblue", fontSize: 40 }} />
            <br />
            24/7 Support
          </div>

          <div className="card" style={{ width: 100, padding: 15 }}>
            <AssessmentIcon style={{ color: "navy", fontSize: 40 }} />
            <br />
            Analytics
          </div>

          <div className="card" style={{ width: 100, padding: 15 }}>
            <SpeedIcon style={{ color: "teal", fontSize: 40 }} />
            <i className="material-icons">account</i>
            <br />
            Speed & Accuracy
          </div>

          <div className="card" style={{ width: 100, padding: 15 }}>
            <SecurityIcon style={{ color: "navy", fontSize: 40 }} />
            <br />
            Security
          </div>

          <div className="card" style={{ width: 100, padding: 15 }}>
            <SupervisorAccountIcon style={{ color: "navy", fontSize: 40 }} />
            <br />
            Team Work
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
};

export default Pricing;
