import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import MyInput from "../inputs/MyIunput";
import MyButton from "../buttons/MyButton";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  return (
    <Paper elevation={3} sx={{ padding: "20px" }}>
      <Typography variant="h5">Вход</Typography>
      <form>
        <MyInput
          label="Имя пользователя"
          state={username}
          setState={setUsername}
        />
        <MyInput
          label="Пароль"
          isPassword={true}
          state={password}
          setState={setPassword}
        />
        <Typography>{error}</Typography>
        <MyButton username={username} password={password} setError={setError}>
          Войти
        </MyButton>
      </form>
    </Paper>
  );
};

export default LoginForm;
