import { Grid } from "@mui/material";
import React from "react";
import style from "./styles/style.module.css";
import LoginForm from "../../UI/forms/LoginForm";

const LoginOrRegister = () => {
  return (
    <Grid
      className={style.grid}
      container
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={6} md={4}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default LoginOrRegister;
