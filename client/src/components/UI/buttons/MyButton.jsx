import React from "react";
import { Button } from "@mui/material";
import style from "./styles/style.module.css";
import { useLogin } from "../../../api/apiHooks/useLogin";

const MyButton = ({
  children,
  variant = "contained",
  color = "primary",
  username,
  password,
  setError,
}) => {
  const login = useLogin();
  return (
    <Button
      type="button"
      fullWidth
      variant={variant}
      color={color}
      className={style.button}
      onClick={() => login(username, password, setError)}
    >
      {children}
    </Button>
  );
};

export default MyButton;
