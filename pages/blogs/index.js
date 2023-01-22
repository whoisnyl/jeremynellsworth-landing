import * as React from "react";
import HeaderBlog from "../../src/header/AppBarBlog";
// mui
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// components
import MoreStories from "../../src/components/more-stories";
// lib
import { getAllPostsForHome } from "../../lib/api";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 60,
    backgroundColor: "#fefefe",
    position: "relative",

    [theme.breakpoints.up("md")]: {
      padding: "100px 0 60px",

      "& .imgHolderMain": {
        paddingRight: 20,
        width: "50%",
      },
    },

    [theme.breakpoints.up("lg")]: {
      padding: "100px 0 80px",

      "& .imgHolderMain": {
        paddingRight: 40,
      },
    },

    [theme.breakpoints.up("xl")]: {
      padding: "120px 0 80px",

      "& .imgHolderMain": {
        paddingRight: 55,
      },
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
      marginBottom: theme.spacing(3),
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
}));

export default function Blog({ allPosts }) {
  const classes = useStyles();
  const morePosts = allPosts;

  return (
    <React.Fragment>
      <HeaderBlog />
      <Box component="main">
        <Box className={classes.root}>
          <Container maxWidth="xl">
            <Box sx={{ position: "relative" }}>
              <Box component="section" className={classes.section}>
                <Typography component="h2">Blog Posts</Typography>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede.
                </Typography>
              </Box>
            </Box>
            <Grid container direction="row" spacing={6}>
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </Grid>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
