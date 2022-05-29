/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
// mui
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// static
import step1 from "../../public/images/banners/sketch/layer-9.png";
import step2 from "../../public/images/banners/sketch/layer-9.png";
import step3 from "../../public/images/banners/sketch/layer-9.png";

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 60,
    backgroundColor: "#fefefe",
    position: "relative",

    [theme.breakpoints.up("md")]: {
      padding: "60px 0 100px",

      "& .imgHolder": {
        paddingRight: 20,
        width: "50%",

        "&.imgHolderReverse": {
          paddingLeft: 20,
          paddingRight: 0,
        },
      },
    },

    [theme.breakpoints.up("lg")]: {
      padding: "80px 0 120px",

      "& .imgHolder": {
        paddingRight: 40,

        "&.imgHolderReverse": {
          paddingLeft: 40,
          paddingRight: 0,
        },
      },
    },
  },
  divider: {
    height: 50,

    [theme.breakpoints.up("md")]: {
      height: 120,
    },
  },
  section: {
    marginTop: 30,

    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginTop: 0,
      paddingLeft: 20,
    },

    [theme.breakpoints.up("lg")]: {
      paddingLeft: 40,
    },

    "& .step": {
      display: "inline-block",
      padding: theme.spacing(1, 2),
      borderRadius: 6,
      backgroundColor: "#f4f4f4",

      "& p": {
        fontFamily: "LufgaExtraBold",
        color: "#cdcdcd",
        fontSize: 16,
      },

      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(1.5, 2.5),
      },
    },

    "& h2": {
      fontFamily: "LufgaBold",
      fontSize: 48,
      lineHeight: 1.2,
      margin: theme.spacing(3, 0),

      [theme.breakpoints.up("lg")]: {
        fontSize: 55,
      },
    },

    "& > p": {
      color: theme.palette.gray.main,
      lineHeight: 1.8,

      [theme.breakpoints.up("lg")]: {
        fontSize: 16,
      },

      "& span": {
        fontWeight: 600,
        color: "initial",
      },
    },

    "& .imgHolder": {
      margin: theme.spacing(4, 0),
      textAlign: "center",
    },
  },
  reverse: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: 0,
      paddingRight: 20,
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: 40,
    },
  },
  ratings: {
    marginTop: theme.spacing(4),

    "& .stars img": {
      width: 16,
      padding: 1,
    },

    "& .info": {
      padding: theme.spacing(1, 0),

      "& p": {
        fontSize: 15,

        [theme.breakpoints.up("lg")]: {
          fontSize: 16,
        },

        "&:first-of-type, & span": {
          fontWeight: 600,
        },
      },

      "& .dash": {
        display: "block",
        width: 20,
        height: 2,
        margin: theme.spacing(0, 1),
        background: theme.palette.secondary.main,
      },

      "& .bg": {
        paddingBottom: 2,
        backgroundImage: "url('/images/icons/text-bg-gray.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      },
    },

    "& > img": {
      display: "block",
    },
  },
}));

// -----------------------------------------------

export default function Steps() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Stack direction={{ md: "row" }} alignItems={{ md: "center" }}>
          <Hidden mdDown>
            <Box className="imgHolder">
              <Image src={step1} alt="Sketch design" priority />
            </Box>
          </Hidden>
          <Box component="section" className={classes.section}>
            <Box className="step">
              <Typography>STEP 1.0</Typography>
            </Box>
            <Typography component="h2">Sketch design</Typography>
            <Typography variant="body2">
              Once your order has been placed, I will begin first with a sketch
              concept that I will share with you for your approval. If feedback
              is given, I will adjust until you are satisifed.
            </Typography>
            <div className="imgHolder">
              <Hidden mdUp>
                <Image src={step1} alt="Sketch design" priority />
              </Hidden>
            </div>
            <Button variant="contained">Order Now</Button>
            <Box className={classes.ratings}>
              <Stack direction="row" className="stars">
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
              </Stack>
              <Stack direction="row" alignItems="center" className="info">
                <Typography>5.0</Typography>
                <div className="dash" />
                <Typography>
                  total <span className="bg">450</span>
                  <span>+</span> reviews
                </Typography>
              </Stack>
              <img
                src="/images/icons/facebook.png"
                alt="Facebook"
                height="15px"
              />
            </Box>
          </Box>
        </Stack>
        <div className={classes.divider} />
        <Stack direction={{ md: "row-reverse" }} alignItems={{ md: "center" }}>
          <Hidden mdDown>
            <Box className="imgHolder imgHolderReverse">
              <Image src={step2} alt="Sketch to vector" priority />
            </Box>
          </Hidden>
          <Box
            component="section"
            className={clsx(classes.section, classes.reverse)}
          >
            <Box className="step">
              <Typography>STEP 2.0</Typography>
            </Box>
            <Typography component="h2">Sketch &gt; Vector</Typography>
            <Typography variant="body2">
              Once the sketch has been approved, I will begin converting the
              sketch concept into your full color logo.{" "}
              <span>I will never leave you unsatisfied, ever!</span>
            </Typography>
            <div className="imgHolder">
              <Hidden mdUp>
                <Image src={step2} alt="Sketch to vector" priority />
              </Hidden>
            </div>
            <Button variant="contained">Order Now</Button>
            <Box className={classes.ratings}>
              <Stack direction="row" className="stars">
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
              </Stack>
              <Stack direction="row" alignItems="center" className="info">
                <Typography>5.0</Typography>
                <div className="dash" />
                <Typography>
                  total <span className="bg">500</span>
                  <span>+</span> reviews
                </Typography>
              </Stack>
              <img src="/images/icons/google.png" alt="Google" height="21px" />
            </Box>
          </Box>
        </Stack>
        <div className={classes.divider} />
        <Stack direction={{ md: "row" }} alignItems={{ md: "center" }}>
          <Hidden mdDown>
            <Box className="imgHolder">
              <Image src={step3} alt="Project files" priority />
            </Box>
          </Hidden>
          <Box component="section" className={classes.section}>
            <Box className="step">
              <Typography>STEP 3.0</Typography>
            </Box>
            <Typography component="h2">Project Files</Typography>
            <Typography variant="body2">
              Once I’ve shared the ful color version of your logo, you may
              request changes until you are satisfied. Once you’ve approved the
              design, I will gather all the final design files needed for your
              business: <span>Files Include Ai, EPS, PDF, JPG & PNG</span>
            </Typography>
            <div className="imgHolder">
              <Hidden mdUp>
                <Image src={step3} alt="Project files" priority />
              </Hidden>
            </div>
            <Button variant="contained">Order Now</Button>
            <Box className={classes.ratings}>
              <Stack direction="row" className="stars">
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-half.png" alt="Star" />
              </Stack>
              <Stack direction="row" alignItems="center" className="info">
                <Typography>4.9</Typography>
                <div className="dash" />
                <Typography>
                  total <span className="bg">80</span>
                  <span>+</span> reviews
                </Typography>
              </Stack>
              <img
                src="/images/icons/trustpilot.png"
                alt="TrustPilot"
                height="25px"
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
