/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
// mui
import { makeStyles } from "@mui/styles";
import DialogContentText from "@mui/material/DialogContentText";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// components
import CatalogPlayer from "../lightbox/CatalogPlayer";
// data
import catalog, { categories } from "../../_mocks_/catalog";

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

      [theme.breakpoints.up("md")]: {
        maxWidth: 570,
        margin: "0 auto",
      },

      [theme.breakpoints.up("lg")]: {
        maxWidth: "100%",
        margin: "0",
      },

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
  filter: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      right: 0,
      top: "50%",
    },

    "& p": {
      fontSize: 14,
      fontWeight: 600,

      [theme.breakpoints.up("md")]: {
        marginTop: 10,
      },
    },

    "& .filterBtn": {
      cursor: "pointer",
      height: 60,
      width: 60,
      borderRadius: 30,
      backgroundColor: "#f4f4f4",
      position: "relative",
      marginLeft: 20,

      [theme.breakpoints.up("md")]: {
        marginLeft: 0,
      },

      "& span": {
        position: "absolute",
        display: "block",
        height: 4,
        borderRadius: 2,
        right: 14,
        backgroundColor: "#cdcdcd",

        "&:first-of-type": {
          top: 19,
          width: 32,
        },

        "&:nth-of-type(2)": {
          top: 29,
          width: 22,
        },

        "&:last-of-type": {
          top: 39,
          width: 12,
        },
      },
    },
  },
  filterDrawer: {
    "& .MuiDrawer-paper": {
      width: "100%",
      maxWidth: 320,
      padding: 20,

      "& h5": {
        fontFamily: "LufgaBold",
      },

      "& .closeBtn img": {
        width: 22,
        transform: "rotate(45deg)",
        marginRight: -8,
      },

      "& .categories": {
        marginTop: 30,

        "& p": {
          cursor: "pointer",
          position: "relative",
          padding: 10,

          "&.checked::after": {
            content: "''",
            display: "block",
            position: "absolute",
            width: "100%",
            height: 2,
            backgroundColor: theme.palette.primary.main,
            top: "50%",
            left: 0,
            marginTop: -1,
          },
        },
      },
    },
  },
}));

// -----------------------------------------------

const FilterButton = ({ trigger }) => {
  const classes = useStyles();

  return (
    <Stack
      direction={{ xs: "row", md: "column-reverse" }}
      alignItems="center"
      justifyContent="flex-end"
      mb={3}
      className={classes.filter}
    >
      <Typography variant="body2">Filter</Typography>
      <Box className="filterBtn" onClick={trigger(true)}>
        <span />
        <span />
        <span />
      </Box>
    </Stack>
  );
};

// -----------------------------------------------

export default function Work({ elemRef }) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState(null);
  const [limit, setLimit] = React.useState(11);
  const [data, setData] = React.useState(catalog);
  const [filterDrawer, setFilterDrawer] = React.useState(false);
  const [loadedMore, setLoadedMore] = React.useState(false);
  const [catFilter, setCatFilter] = React.useState([]);
  const classes = useStyles();

  const handleClickOpen = (itemData) => {
    setContent(itemData);
    setOpen(true);
  };

  const handleClose = () => {
    setContent(null);
    setOpen(false);
  };

  const loadMore = () => {
    setLoadedMore(true);
    setLimit(catalog.length);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setFilterDrawer(open);
  };

  const handleFilter = (id) => {
    // set filter
    const newCatFilter = catFilter.includes(id)
      ? catFilter.filter((n) => n !== id)
      : [...catFilter, id];
    setCatFilter(newCatFilter);

    // set catalog data
    const newData = !newCatFilter.length
      ? catalog
      : catalog.filter((c) => c.category.some((x) => newCatFilter.includes(x)));
    setData(newData);

    // reset limit and load button
    setLimit(11);
    setLoadedMore(false);
  };

  return (
    <Box className={classes.root} ref={elemRef}>
      <Container maxWidth="xl">
        <Box sx={{ position: "relative" }}>
          <Box component="section" className={classes.section}>
            <Typography component="h2">Creative Catalog</Typography>
            <Typography variant="body2">
              Whether you’re a small start up company or a well established
              corporation,{" "}
              <span>I will assist you with all your creative needs!</span>
            </Typography>
            <Hidden mdDown>
              <FilterButton trigger={toggleDrawer} />
            </Hidden>
          </Box>
        </Box>
        <Hidden mdUp>
          <FilterButton trigger={toggleDrawer} />
        </Hidden>
        <Grid container spacing={{ xs: 2, lg: 2.5 }}>
          {data.slice(0, limit).map((item, i) => (
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

                {item.video !== null || item.details !== null ? (
                  <Box className="info" onClick={() => handleClickOpen(item)}>
                    <img
                      src={`/images/icons/${
                        item.video !== null ? "play-video-light" : "quote"
                      }.png`}
                      alt="Info"
                      className={item.video !== null ? "playVideo" : ""}
                    />
                  </Box>
                ) : (
                  ""
                )}
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
        {!loadedMore && data.length > limit ? (
          <Box textAlign="center" mt={{ xs: 6, md: 10 }}>
            <Button variant="outlined" color="secondary" onClick={loadMore}>
              Show More
            </Button>
          </Box>
        ) : (
          ""
        )}
      </Container>
      {content?.video !== null ? (
        <CatalogPlayer open={open} setOpen={setOpen} videoId={content?.video} />
      ) : (
        <Dialog
          className={classes.dialog}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{content.title}</DialogTitle>
          <DialogContent>
            {content.details && (
              <DialogContentText id="alert-dialog-description">
                {content.details}
              </DialogContentText>
            )}
          </DialogContent>
        </Dialog>
      )}
      <Drawer
        anchor="right"
        open={filterDrawer}
        onClose={toggleDrawer(false)}
        className={classes.filterDrawer}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Catalog Filter</Typography>
          <IconButton onClick={toggleDrawer(false)} className="closeBtn">
            <img src="/images/icons/plus.png" alt="close" />
          </IconButton>
        </Stack>
        <Stack direction="column" alignItems="center" className="categories">
          {categories.map((cat, i) => (
            <Typography
              variant="h6"
              component="p"
              key={cat.id}
              onClick={() => handleFilter(cat.id)}
              className={catFilter.includes(cat.id) ? "checked" : ""}
            >
              {cat.label}
            </Typography>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
