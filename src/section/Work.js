/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
// mui
import { makeStyles } from "@mui/styles";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// data
import catalog, { moreCatalog } from "../../_mocks_/catalog";

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 80,
    backgroundColor: "#fefefe",
    position: "relative",

    [theme.breakpoints.up("lg")]: {
      padding: "80px 0 130px",
    },

    "&::after": {
      content: '""',
      backgroundImage: "url('/images/bg/work/bottom-pattern.png')",
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      paddingBottom: "30px",
    },
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

        "&.playVideo": {
          width: 15,
          height: 16,
        },
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
  dialog: {
    "& p": {
      fontSize: 16,
    },
  },
}));

// -----------------------------------------------

export default function Work({ elemRef }) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState(null);
  const [data, setData] = React.useState(catalog);
  const [loadedMore, setLoadedMore] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = (itemData) => {
    setContent(itemData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loadMore = () => {
    setLoadedMore(true);
    setData((prevState) => [...prevState, ...moreCatalog]);
  };

  return (
    <Box className={classes.root} ref={elemRef}>
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
          {data.map((item, i) => (
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

                <Box className="info" onClick={() => handleClickOpen(item)}>
                  <img
                    src={`/images/icons/${
                      item.video !== null ? "play-video-light" : "quote"
                    }.png`}
                    alt="Info"
                    className={item.video !== null ? "playVideo" : ""}
                  />
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
        {!loadedMore && (
          <Box textAlign="center" mt={{ xs: 6, md: 10 }}>
            <Button variant="outlined" color="secondary" onClick={loadMore}>
              Show More
            </Button>
          </Box>
        )}
      </Container>
      {content && (
        <Dialog
          className={classes.dialog}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {content.video ? (
            <video
              autoPlay
              loop
              poster={content.video.poster.src}
              src={content.video.file}
              style={{ width: "100%" }}
            />
          ) : (
            <>
              <DialogTitle id="alert-dialog-title">{content.title}</DialogTitle>
              <DialogContent>
                {content.details && (
                  <DialogContentText id="alert-dialog-description">
                    {content.details}
                  </DialogContentText>
                )}
              </DialogContent>
            </>
          )}
        </Dialog>
      )}
    </Box>
  );
}
