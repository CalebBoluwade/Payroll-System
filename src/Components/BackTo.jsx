import React from "react";
import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowLeftTwoTone,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

const BackTo = () => {
  const nav = useNavigate();
  return (
    <div>
      <KeyboardArrowLeftOutlined
        style={{ fontSize: 42 }}
        onClick={() => nav(-1)}
      />
    </div>
  );
};

export default BackTo;
