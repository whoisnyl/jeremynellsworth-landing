/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
// mui
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// components
import Link from "../Link";
// data
import faqs from "../../_mocks_/faqs";

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 80,
    backgroundColor: "#fefefe",
    position: "relative",
  },
  section: {
    textAlign: "center",
    marginBottom: 60,

    "& h2": {
      fontFamily: "LufgaBold",
      fontSize: 48,
      lineHeight: 1.2,
      margin: theme.spacing(3, 0),
    },

    "& > p": {
      color: theme.palette.gray.main,
      lineHeight: 1.8,
      maxWidth: 575,
      margin: "0 auto",

      "& span": {
        fontWeight: 600,
        color: "initial",
      },
    },
  },
  item: {
    border: "1px solid #cdcdcd",
    padding: 30,
    borderRadius: 6,

    "& .qqq": {
      fontFamily: "LufgaBold",
      color: "#cdcdcd",
      fontSize: 16,
    },

    "& section": {
      position: "relative",
      padding: "0 16px",

      "& h5": {
        position: "relative",
        fontSize: 19,
        fontFamily: "LufgaBold",
        paddingBottom: 8,
        marginBottom: 16,

        "&::after": {
          content: "''",
          position: "absolute",
          display: "block",
          width: 30,
          height: 2,
          bottom: 0,
          backgroundColor: theme.palette.primary.main,
        },
      },

      "& p": {
        fontSize: 15,

        [theme.breakpoints.up("lg")]: {
          fontSize: 16,
        },
      },

      "& img": {
        width: 14,
        position: "absolute",
        right: -14,
        top: 4,
      },
    },
  },
}));

// -----------------------------------------------

export default function Faqs() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Box component="section" className={classes.section}>
          <Typography component="h2">Facts</Typography>
          <Typography variant="body2">
            Here are some of the most frequently asked questions I get in
            regards to my business and the services I offer.
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, lg: 2.5 }}>
          {faqs.map((item, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Box className={classes.item}>
                <Stack direction="row" alignItems="start">
                  <Typography className="qqq">Q.</Typography>
                  <Box component="section">
                    <Typography variant="h5">{item.question}</Typography>
                    <Typography variant="body2">{item.answer}</Typography>
                    <img src="/images/icons/plus.png" alt="Plus" />
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box textAlign="center" mt={{ xs: 6, md: 10 }}>
          <Button variant="outlined" color="secondary">
            Show More
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
