import React from "react";
import { CircularProgress, Grid } from "@mui/material";

const Loader = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "70vh" }}
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loader;
