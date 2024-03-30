import React from "react";
import { Avatar, Grid } from "@mui/material";

const Profile = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10} sx={{ background: "red" }}>
        <Avatar></Avatar>
      </Grid>
    </Grid>
  );
};

export default Profile;
