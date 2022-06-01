/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
// mui
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// static
import BannerSrc from "../../public/images/banners/top-banner/computer-wiz-asset-3-copy-2.png";

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 80,
    backgroundImage: "url('/images/bg/top-content-pattern/layer-4.png')",
    backgroundColor: "#7600b1",
    position: "relative",

    [theme.breakpoints.up("md")]: {
      padding: "100px 0 120px",

      "& .imgHolder": {
        paddingLeft: 20,
        width: "50%",
      },
    },

    [theme.breakpoints.up("lg")]: {
      padding: "110px 0 130px",

      "& .imgHolder": {
        paddingLeft: 40,
        paddingRight: 40,
        width: "50%",
      },
    },

    "&::after": {
      content: '""',
      backgroundImage: "url('/images/bg/top-content-clip/shape-7-copy-4.png')",
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

      [theme.breakpoints.up("md")]: {
        maxWidth: 470,
      },

      [theme.breakpoints.up("lg")]: {
        fontSize: 70,
        maxWidth: 476,
      },
    },

    "& > p": {
      margin: theme.spacing(3, 0),
      color: "#fff",
      lineHeight: 1.8,

      [theme.breakpoints.up("md")]: {
        margin: theme.spacing(5, 0),
        width: 400,
      },
    },

    "& .cta > button": {
      marginRight: theme.spacing(2),

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
              Computer Wiz Business Logo Design
            </Typography>
            <Typography variant="body2">
              The idea was to take my clients existing logo, revamp it by giving
              it a fresh, modern look. Vibrant colors with some added elements.
            </Typography>
            <Stack direction="row" alignItems="center" className="cta">
              <Button variant="contained">Order Now</Button>
              <Stack direction="row" alignItems="center">
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
              alt="Computer Wiz"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
