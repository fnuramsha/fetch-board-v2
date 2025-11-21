import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListIcon from "@mui/icons-material/List";
import Container from "@mui/material/Container";

export default function Navbar() {
  return (
    <>
      <AppBar position="sticky" color="primary">
        <Container>
          <Toolbar>
            <ListIcon />
            <Typography variant="h5">News</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
