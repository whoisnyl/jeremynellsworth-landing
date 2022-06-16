/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
// mui
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// components
import ReviewCard from "../ReviewCard";
import VideoPlayer from "../VideoPlayer";
// data
import topContent from "../../_mocks_/topContent";

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0 130px",
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
      width: "100%",
      marginRight: theme.spacing(2),

      "& img": {
        width: 16,
        marginLeft: 8,
      },

      [theme.breakpoints.up("md")]: {
        width: "auto",
      },

      [theme.breakpoints.up("lg")]: {
        marginRight: theme.spacing(4),
      },
    },

    "& .cta > .watchVideo": {
      cursor: "pointer",
      marginLeft: "auto",
      marginRight: "auto",

      [theme.breakpoints.up("md")]: {
        marginLeft: 0,
        marginRIght: 0,
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
    objectPosition: "right",

    [theme.breakpoints.up("md")]: {
      objectPosition: "center",
    },
  },
  dialog: {
    "& .MuiPaper-root": {
      borderRadius: 0,
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },
}));

// -----------------------------------------------

export default function TopContent() {
  const [reviewOpen, setReviewOpen] = React.useState(false);
  const [videoOpen, setVideoOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems={{ md: "center" }}
        >
          <Box component="section" className={classes.section}>
            <Typography
              component="h2"
              dangerouslySetInnerHTML={{ __html: topContent.title }}
            />
            <Typography variant="body2">
              &ldquo;{topContent.details}&rdquo;
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems={{ xs: "flex-start", md: "center" }}
              className="cta"
            >
              <Button variant="contained" onClick={() => setReviewOpen(true)}>
                Read Review{" "}
                <img src="/images/icons/quote-marks.svg" alt="Quote" />
              </Button>
              <Stack
                direction="row"
                alignItems="center"
                mt={{ xs: 3, md: 0 }}
                onClick={() => setVideoOpen(true)}
                className="watchVideo"
              >
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
              src={topContent.banner}
              objectFit="contain"
              objectPosition="center"
              quality={100}
              alt="Boss Hog BBQ"
              priority
            />
          </Box>
        </Stack>
      </Container>
      <video
        playsInline
        autoPlay
        loop
        muted
        className={classes.videoBg}
        poster="/images/bg/boss-hog-bg.jpg"
      >
        <source src="/images/bg/animated-bg.mp4" />
      </video>
      <Dialog
        className={classes.dialog}
        open={reviewOpen}
        onClose={() => setReviewOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ReviewCard data={topContent.review} />
      </Dialog>
      <VideoPlayer
        open={videoOpen}
        setOpen={setVideoOpen}
        videoId={topContent.videoId}
      />
    </Box>
  );
}
