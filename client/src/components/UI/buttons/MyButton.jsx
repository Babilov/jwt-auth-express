import { Button } from "@mui/material";
import React from "react";

const MyButton = ({ children, callback }) => {
  return <Button onClick={() => callback()}>{children}</Button>;
};

export default MyButton;
