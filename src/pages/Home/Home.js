import React from "react";
import { Typography, Divider } from "@material-ui/core";

const Home = () => (
  <div>
    <Typography variant="h3">Welcome to the App</Typography>
    <Divider style={{ marginTop: 10, marginBottom: 10 }} />
    <Typography variant="h6">Feel free to take a look around</Typography>
  </div>
);

export default Home;
