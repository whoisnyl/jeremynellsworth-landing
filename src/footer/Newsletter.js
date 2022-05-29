import * as React from "react";
import Image from "next/image";
// mui
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// static
import jeremy from "../../public/images/icons/jeremy/jeremy-character-pose-5.png";

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: "50px 0 100px",

    [theme.breakpoints.up("lg")]: {
      padding: 0,
    },

    "& .content": {
      position: "relative",
      zIndex: 50,
    },

    "& .wrapper": {
      height: "calc(100% - 30px)",
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      backgroundColor: "#f8dc3b",

      [theme.breakpoints.up("sm")]: {
        height: "calc(100% - 80px)",
      },

      "&::after": {
        content: "''",
        backgroundImage: "url('/images/bg/newsletter-top/shape-7-copy-7.png')",
        display: "block",
        position: "absolute",
        top: -30,
        left: 0,
        width: "100%",
        paddingBottom: "30px",
      },
    },
  },
  form: {
    maxWidth: 600,
    margin: "0 auto",

    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      marginRight: 0,
      maxWidth: 630,
    },

    "& .spacing": {
      height: 30,
    },

    "& h6": {
      fontSize: 19,
      fontFamily: "LufgaBold",
    },

    "& button": {
      height: 56,

      [theme.breakpoints.up("md")]: {
        height: 60,
      },
    },
  },
  input: {
    "& label": {
      fontSize: 16,
      color: "#9e9e9e",
      left: 18,

      [theme.breakpoints.up("md")]: {
        top: 2,
      },
    },

    "& .MuiFilledInput-root": {
      borderRadius: 6,
      backgroundColor: "#fff",
      fontSize: 16,
      fontWeight: 500,

      [theme.breakpoints.up("md")]: {
        height: 60,
      },

      "&::before, &::after": {
        display: "none !important",
      },
    },

    "& input": {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
}));

// -----------------------------------------------

export default function Newsletter() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" className="content">
          <Hidden lgDown>
            <Box className={classes.character}>
              <Image src={jeremy} alt="Jeremy Ellsworth" />
            </Box>
          </Hidden>
          <Box className={classes.form}>
            <Typography variant="h6">
              Pulling in those BIG DEAL promos straight into your inbox can be a
              challenge, but don’t worry, I got you. Subscribe today!
            </Typography>
            <div className="spacing" />
            <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
              <TextField
                label="Email address"
                variant="filled"
                className={classes.input}
                fullWidth
              />
              <Button variant="contained" color="secondary">
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Stack>
        <div className="wrapper" />
      </Container>
    </Box>
  );
}
