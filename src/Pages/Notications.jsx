import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Delete from "@material-ui/icons/Delete";
import MarkEmailRead from "@material-ui/icons/Drafts";

const Notications = () => {
  const [openMessage, setOpenMessage] = useState(false);

  const messages = [1, 2, 3, 4, 5, 6, 7, 8];

  const deleteMail = () => {
    const deleteFilter = messages.filter(messages !== messages);
    console.log(deleteFilter);
    console.warn("deleting");
  };

  return (
    <>
      <Header />

      <div className="notification">
        <div
          className="displaybox z-depth-4"
          style={{
            width: "20%",
            padding: 10,
            marginBottom: 35,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Badge badgeContent={2} color="primary">
            <Avatar className="center" style={{ margin: "0px auto" }}>
              <img
                src="./Thf_1551875131.jpg"
                className="circle"
                alt="avatar_img"
                style={{ width: 70, height: 70 }}
              />
            </Avatar>
          </Badge>
          <Typography>
            <span
              className="flow-text center"
              style={{
                padding: 10,
              }}
            >
              New Wave
            </span>
            <Typography className="right">Admin</Typography>
          </Typography>
        </div>

        <div
          className="displaybox z-depth-4"
          style={{
            height: "auto",
            background: "lightskyblue",
            color: "navy",
            paddingBottom: 50,
          }}
        >
          <h4 className="center">INBOX</h4>
          {messages.map((message) => (
            <div
              key={message.indexOf}
              onClick={() => setOpenMessage(true)}
              className="mailbox z-depth-2 hoverable"
              style={{
                height: 70,
                padding: 15,
                width: "95%",
                margin: "auto",
                background: "white",
                display: "flex",
              }}
            >
              <FormControlLabel control={<Checkbox value="remember" />} />

              <span style={{ fontWeight: 600, fontSize: 20, width: "15%" }}>
                Sender
              </span>

              <span
                className="truncate"
                style={{ width: "75%", fontWeight: 400, fontSize: 21 }}
              >
                <strong>
                  Message Title E.g Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Commodi consequuntur quasi similique
                  voluptatem ut. Repellendus accusantium rem id amet, quisquam
                  voluptatum voluptatem numquam vitae nemo debitis impedit
                  adipisci, dignissimos totam!
                </strong>
              </span>

              <span className="right">
                <MarkEmailRead style={{ color: "lightgray", fontSize: 27 }} />
                <Delete
                  style={{ color: "lightgray", fontSize: 27 }}
                  onClick={() => deleteMail()}
                />
              </span>

              {/* <Dialog
                className="message"
                open={openMessage}
                onClose={() => setOpenMessage(false)}
              >
                <DialogTitle className="truncate">
                  <ArrowLeftIcon />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  neque?
                </DialogTitle>
                <DialogContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore et totam illum. Modi distinctio eligendi
                  necessitatibus laudantium, itaque officiis hic expedita
                  exercitationem autem corrupti minus reiciendis ipsam
                  voluptatem dolores a blanditiis mollitia placeat aspernatur
                  earum quas eaque, nam aperiam alias! Necessitatibus labore
                  quia culpa eligendi!
                </DialogContent>
              </Dialog> */}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Notications;
