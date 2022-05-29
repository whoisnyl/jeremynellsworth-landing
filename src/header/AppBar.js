import * as React from "react";
import PropTypes from "prop-types";
// mui
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Hidden from "@mui/material/Hidden";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
// components
import Link from "../../src/Link";

// -----------------------------------------------

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.common.white,
    padding: theme.spacing(1, 0),

    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(2.15, 0),
    },

    "& > .MuiToolbar-root": {
      alignItems: "center",
      justifyContent: "space-between",

      [theme.breakpoints.up("xl")]: {
        padding: theme.spacing(0, 3.75),
      },
    },
  },
  toolbar: {
    height: 80,

    [theme.breakpoints.up("lg")]: {
      height: 100,
    },
  },
  navbar: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",

    "& p": {
      cursor: "pointer",
      fontSize: 18,
      fontWeight: 500,
      padding: theme.spacing(1),
      whiteSpace: "nowrap",
    },
  },
}));

// -----------------------------------------------

export default function ElevateAppBar(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar className={classes.appbar} color="default">
          <Toolbar>
            <Link href="/">
              <img src="/logo.png" alt="Jeremy Ellsworth" />
            </Link>
            <Button variant="contained">Order Now</Button>
            <Hidden lgDown>
              <Box className={classes.navbar}>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <Typography>About</Typography>
                  <Typography>Services</Typography>
                  <Typography>The Proces</Typography>
                  <Typography>Work</Typography>
                  <Typography>Reviews</Typography>
                  <Typography>FAQ</Typography>
                </Stack>
              </Box>
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbar} />
    </React.Fragment>
  );
}
