import React from "react";
import { KeyboardArrowLeftOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const BackTo = () => {
  const nav = useNavigate();
  return (
    <>
      <KeyboardArrowLeftOutlined
        style={{ fontSize: 42 }}
        onClick={() => nav(-1)}
      />
    </>
  );
};

export default BackTo;
