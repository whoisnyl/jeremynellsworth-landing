import * as React from "react";
import Youtube from "react-youtube";
// mui
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 1160,

    "& > div": {
      height: 300,

      [theme.breakpoints.up("sm")]: {
        height: 400,
      },

      [theme.breakpoints.up("lg")]: {
        height: 500,
      },

      [theme.breakpoints.up("xl")]: {
        height: 600,
      },
    },

    "& iframe": {
      display: "block",
    },
  },
}));

export default function VideoPlayer({ open, setOpen, videoId }) {
  const classes = useStyles();

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      origin: "http://localhost:3000",
      autoplay: 1,
    },
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={classes.root}>
        <Youtube videoId={videoId} opts={opts} />
      </Box>
    </Modal>
  );
}
