/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
// mui
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// static
import BannerSrc from "../../public/images/banners/top-banner/boss-hog-logo.png";

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0 130px",
    backgroundImage: "url('/images/bg/boss-hog-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    position: "relative",

    [theme.breakpoints.up("md")]: {
      padding: "100px 0 120px",

      "& .imgHolder": {
        paddingLeft: 20,
        width: "50%",
      },
    },

    [theme.breakpoints.up("lg")]: {
      padding: "220px 0 250px",
      backgroundImage: "none",

      "& .imgHolder": {
        padding: 0,
        width: "50%",
      },
    },

    "&::after": {
      content: '""',
      backgroundImage: "url('/images/bg/white-divider-pattern.svg')",
      backgroundSize: "cover",
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      paddingBottom: "30px",
    },
  },
  section: {
    marginTop: 30,

    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginTop: 0,
      paddingRight: 20,
    },

    [theme.breakpoints.up("lg")]: {
      paddingRight: 40,
    },

    "& h2": {
      fontFamily: "LufgaBold",
      color: "#fff",
      fontSize: 48,
      lineHeight: 1.2,

      "& .primaryColor": {
        color: theme.palette.primary.main,
      },

      "& .underline": {
        backgroundImage: "url('/images/icons/yellow-underline-mark.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "contain",
      },

      [theme.breakpoints.up("md")]: {
        maxWidth: 340,
        lineHeight: 1.1,
      },

      [theme.breakpoints.up("lg")]: {
        fontSize: 75,
        lineHeight: "85px",
        maxWidth: 560,
      },
    },

    "& > p": {
      margin: theme.spacing(3, 0),
      color: "#fff",
      lineHeight: 1.8,

      [theme.breakpoints.up("md")]: {
        margin: theme.spacing(5, 0),
        width: 420,
      },
    },

    "& .cta > button": {
      marginRight: theme.spacing(2),

      "& img": {
        width: 16,
        marginRight: 8,
      },

      [theme.breakpoints.up("lg")]: {
        marginRight: theme.spacing(4),
      },
    },

    "& .cta p": {
      color: "#fff",
      fontSize: 16,
      fontWeight: 600,

      [theme.breakpoints.up("md")]: {
        fontSize: 18,
      },
    },

    "& .playIcon": {
      cursor: "pointer",
      marginRight: 10,
      border: "3px solid #fff",
      borderRadius: "100%",

      [theme.breakpoints.up("md")]: {
        marginRight: 15,
      },

      "& button": {
        width: "100%",
        textAlign: "center",
        height: 32,
        width: 32,
        margin: 3,
        backgroundColor: theme.palette.common.white,
        borderRadius: 16,

        [theme.breakpoints.up("md")]: {
          height: 40,
          width: 40,
          borderRadius: 20,
        },
      },

      "& img": {
        width: 10,
        marginLeft: 2,

        [theme.breakpoints.up("md")]: {
          width: 13,
        },
      },
    },
  },
  videoBg: {
    top: 0,
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

// -----------------------------------------------

export default function TopContent() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ md: "center" }}
        >
          <Box component="section" className={classes.section}>
            <Typography component="h2">
              Crafting <span className="primaryColor">Unique Brands</span> Since{" "}
              <span className="underline">2005</span>
            </Typography>
            <Typography variant="body2">
              &ldquo;This guy is everything that you want in a graphic designer
              for your business! He will take your vision and apply his talents,
              skills ...&rdquo;
            </Typography>
            <Stack
              direction={{ xs: "column-reverse", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              className="cta"
            >
              <Button variant="contained">
                <img src="/images/icons/quote-marks.svg" alt="Quote" /> Read
                Review
              </Button>
              <Stack direction="row" alignItems="center" mb={{ xs: 3, sm: 0 }}>
                <Box className="playIcon">
                  <IconButton>
                    <img src="/images/icons/play-video.png" alt="Play video" />
                  </IconButton>
                </Box>
                <Typography>Watch Video</Typography>
              </Stack>
            </Stack>
          </Box>
          <Box className="imgHolder" sx={{ textAlign: "center" }}>
            <Image
              src={BannerSrc}
              objectFit="contain"
              objectPosition="center"
              quality={100}
              alt="Boss Hog BBQ"
              priority
            />
          </Box>
        </Stack>
      </Container>
      <Hidden lgDown>
        <video autoPlay loop muted className={classes.videoBg}>
          <source src="/images/bg/animated-bg.mp4" />
        </video>
      </Hidden>
    </Box>
  );
}
