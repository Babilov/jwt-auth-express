import { TextField } from "@mui/material";
import React from "react";
import style from "./styles/style.module.css";

const MyInput = ({ label, isPassword = false, state, setState }) => {
  return (
    <TextField
      className={style.input}
      label={label}
      fullWidth
      type={isPassword ? "password" : "text"}
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  );
};

export default MyInput;
