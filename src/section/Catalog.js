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
import catalog from "../../_mocks_/catalog";

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
    maxWidth: 764,
    margin: "0 auto 60px",

    "& h2": {
      fontFamily: "LufgaBold",
      fontSize: 48,
      lineHeight: 1.2,
      margin: theme.spacing(3, 0),
    },

    "& > p": {
      color: theme.palette.gray.main,
      lineHeight: 1.8,

      "& span": {
        fontWeight: 600,
        color: "initial",
      },
    },
  },
  item: {
    position: "relative",
    paddingBottom: "100%",
    borderRadius: 6,

    "& .imgHolder": {
      position: "absolute",
      width: "60%",
      display: "block",
      height: "70%",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",

      [theme.breakpoints.up("md")]: {
        width: "50%",
      },
    },

    "& .info": {
      cursor: "pointer",
      position: "absolute",
      bottom: 10,
      right: 10,
      width: 45,
      height: 45,
      borderRadius: 4,
      backgroundColor: "rgba(254,254,254,.3)",

      [theme.breakpoints.up("md")]: {
        bottom: 20,
        right: 20,
      },

      "& img": {
        width: 17,
        height: 14,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      },
    },
  },
  extra: {
    position: "relative",
    paddingBottom: "100%",
    borderRadius: 6,
    backgroundColor: "#f4f4f4",

    "& section": {
      position: "absolute",
      width: "75%",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",

      "& h4": {
        fontSize: 40,
        fontFamily: "LufgaBold",

        [theme.breakpoints.up("sm")]: {
          fontSize: 30,
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: 40,
        },
      },

      "& p": {
        fontSize: 16,
        margin: theme.spacing(3, 0),

        [theme.breakpoints.up("sm")]: {
          fontSize: 14,
        },

        [theme.breakpoints.up("lg")]: {
          fontSize: 16,
        },
      },

      "& button": {
        width: "100%",
      },
    },
  },
}));

// -----------------------------------------------

export default function Catalog() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Box component="section" className={classes.section}>
          <Typography component="h2">Creative Catalog</Typography>
          <Typography variant="body2">
            Whether you’re a small start up company or a well established
            corporation,{" "}
            <span>I will assist you with all your creative needs!</span>
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 2, lg: 2.5 }}>
          {catalog.map((item, i) => (
            <Grid item xs={12} sm={6} lg={4} key={i}>
              <Box
                className={classes.item}
                sx={{ backgroundColor: item.theme }}
              >
                <div className="imgHolder">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    quality={100}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  />
                </div>

                <Box className="info">
                  <img src="/images/icons/quote.png" alt="Info" />
                </Box>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} sm={6} lg={4}>
            <Box className={classes.extra}>
              <Box component="section">
                <Typography variant="h4">Like what you see?</Typography>
                <Typography>
                  Order now and remember, your logo is the heart of your brand
                  and the face of your business.
                </Typography>
                <Button variant="contained">Order now</Button>
              </Box>
            </Box>
          </Grid>
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
