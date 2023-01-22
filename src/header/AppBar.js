/* eslint-disable @next/next/no-img-element */
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
import useScrollTrigger from "@mui/material/useScrollTrigger";
// components
import Link from "../Link";
import OrderButton from "../Button";

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
    boxShadow:
      "0px 2px 4px -1px rgb(0 0 0 / 5%), 0px 4px 5px 0px rgb(0 0 0 / 3%), 0px 1px 10px 0px rgb(0 0 0 / 4%)",

    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(2.15, 0),
    },

    "& > .MuiToolbar-root": {
      width: "100%",
      maxWidth: 1248,
      margin: "0 auto",
      alignItems: "center",
      justifyContent: "space-between",

      [theme.breakpoints.up("xl")]: {
        padding: theme.spacing(0, 3),
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
    marginLeft: 50,

    "& p, & a": {
      cursor: "pointer",
      color: theme.palette.secondary.main,
      textDecoration: "none",
      fontSize: 18,
      fontWeight: 500,
      padding: theme.spacing(1),
      whiteSpace: "nowrap",
    },
  },
  active: {
    position: "relative",
    "&::after": {
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
}));

// -----------------------------------------------

const menuList = [
  { id: "services", label: "Services" },
  { id: "process", label: "The Process" },
  { id: "work", label: "Work" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
  { id: "blog", label: "Blog" },
];

// -----------------------------------------------

export default function ElevateAppBar(props) {
  const [activeNav, setActiveNav] = React.useState(null);

  const classes = useStyles();
  const { navigate, elemRef } = props;

  const handleNavigate = (menu) => {
    navigate(menu);
    setActiveNav(menu);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar className={classes.appbar} color="default" ref={elemRef}>
          <Toolbar>
            <Stack direction="row" alignItems="center">
              <Link href="/">
                <img src="/logo.png" alt="Jeremy Ellsworth" />
              </Link>
              <Hidden lgDown>
                <Box className={classes.navbar}>
                  <Stack direction="row" alignItems="center" spacing={3}>
                    {menuList.map((menu) => {
                      return menu.id !== "blog" ? (
                        <Typography
                          key={menu.id}
                          onClick={() => handleNavigate(menu.id)}
                          className={
                            menu.id === activeNav ? classes.active : ""
                          }
                        >
                          {menu.label}
                        </Typography>
                      ) : (
                        <Link href="/blogs" key={menu.id}>
                          {menu.label}
                        </Link>
                      );
                    })}
                  </Stack>
                </Box>
              </Hidden>
            </Stack>
            <OrderButton />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbar} />
    </React.Fragment>
  );
}
