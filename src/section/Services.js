/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
import clsx from "clsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// mui
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// components
import Link from "../../src/Link";
import OrderButton from "../Button";
// static
import BannerSrc from "../../public/images/banners/15-yrs.svg";
import nextArrow from "../../public/images/icons/service-right-arrow.svg";
// data
import services from "../../_mocks_/services";

// -----------------------------------------------

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
      padding: "160px 0 80px",

      "& .imgHolderMain": {
        paddingRight: 55,
      },
    },
  },
  section: {
    marginTop: 60,

    [theme.breakpoints.up("md")]: {
      width: "50%",
      paddingLeft: 20,
      marginTop: 0,
    },

    [theme.breakpoints.up("lg")]: {
      paddingLeft: 40,
    },

    [theme.breakpoints.up("xl")]: {
      paddingLeft: 55,
    },

    "& h2": {
      fontFamily: "LufgaBold",
      fontSize: 48,
      lineHeight: 1.2,

      [theme.breakpoints.up("lg")]: {
        fontSize: 75,
        lineHeight: "75px",
      },
    },

    "& h4": {
      fontSize: 18,
      fontFamily: "LufgaMedium",
      marginTop: theme.spacing(3),
      lineHeight: 1.4,

      [theme.breakpoints.up("lg")]: {
        fontSize: 20,
      },
    },

    "& > p": {
      margin: theme.spacing(3, 0),
      lineHeight: 1.8,
      color: theme.palette.gray.main,
      maxWidth: 473,

      [theme.breakpoints.up("lg")]: {
        fontSize: 16,
        marginBottom: theme.spacing(5),
      },

      "& span": {
        color: "initial",
        fontWeight: 600,
      },
    },

    "& .cta > button": {
      marginTop: theme.spacing(4),

      [theme.breakpoints.up("lg")]: {
        marginTop: 0,
        marginRight: theme.spacing(5),
      },
    },

    "& .cta img": {
      width: 60,
      marginRight: 15,

      [theme.breakpoints.up("lg")]: {
        width: 65,
        marginRight: 20,
      },
    },

    "& .cta p": {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: "LufgaBold",

      "& a": {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 14,
        color: theme.palette.gray.main,
        fontWeight: "initial",
        textDecoration: "none",
        borderBottom: "1px solid #706d5e",
      },
    },
  },
  slickRoot: {
    position: "relative",
    overflow: "hidden",
    marginTop: 60,
    padding: theme.spacing(0, 1.25),

    [theme.breakpoints.up("lg")]: {
      marginTop: 160,
    },

    "& .react-multi-carousel-list": {
      overflow: "initial",
    },

    "& .slideItem": {
      padding: theme.spacing(1.25),
    },

    "& .slideContent": {
      cursor: "pointer",
      position: "relative",
      padding: theme.spacing(3),

      [theme.breakpoints.up("sm")]: {
        padding: 40,
      },

      "& .imgHolder": {
        position: "relative",
        paddingBottom: "100%",
        width: "100%",
        marginBottom: 30,
      },

      "& h3": {
        fontSize: 24,
        fontFamily: "LufgaExtraBold",
        lineHeight: 1.4,
        color: "#fff",
        maxWidth: 220,
      },

      "& p": {
        lineHeight: 2,
        fontFamily: "LufgaSemiBold",
        color: "#fff",
        fontSize: 14,
        marginRight: 10,

        [theme.breakpoints.up("md")]: {
          fontSize: 15,
        },
      },
    },
  },
  arrow: {
    position: "absolute",
    right: 40,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    cursor: "pointer",

    "&.leftArrow": {
      transform: "translateY(-50%) rotate(180deg)",
      left: 40,
      right: "initial",
    },
  },
  drawer: {
    "& .MuiPaper-root": {
      maxWidth: 480,
    },

    "& h3": {
      fontSize: 24,
      fontFamily: "LufgaBold",
    },

    "& p": {
      margin: theme.spacing(3, 0),

      [theme.breakpoints.up("lg")]: {
        margin: theme.spacing(5, 0),
      },
    },

    "& .closeBtn img": {
      width: 22,
      transform: "rotate(45deg)",
      marginRight: -8,
    },

    "& .drawerContent": {
      padding: 20,

      [theme.breakpoints.up("md")]: {
        padding: 30,
      },

      [theme.breakpoints.up("xl")]: {
        padding: 40,
      },
    },
  },
}));

// -----------------------------------------------

const responsive = {
  retina: {
    breakpoint: { max: 4000, min: 2561 },
    items: 8,
    partialVisibilityGutter: 40,
  },
  desktopLarge: {
    breakpoint: { max: 2560, min: 1921 },
    items: 6,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 1920, min: 1860 },
    items: 5,
    partialVisibilityGutter: 30,
  },
  laptopLarge: {
    breakpoint: { max: 1859, min: 1440 },
    items: 4,
    partialVisibilityGutter: 20,
  },
  laptop: {
    breakpoint: { max: 1439, min: 1200 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  laptopSmall: {
    breakpoint: { max: 1199, min: 900 },
    items: 2,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 899, min: 600 },
    items: 2,
    partialVisibilityGutter: 20,
  },
  mobileLarge: {
    breakpoint: { max: 599, min: 480 },
    items: 1,
    partialVisibilityGutter: 150,
  },
  mobile: {
    breakpoint: { max: 479, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

// -----------------------------------------------

export default function Services({ elemRef }) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState({});
  const [swiped, setSwiped] = React.useState(false);
  const classes = useStyles();

  const handleSwiped = React.useCallback(() => {
    setSwiped(true);
  }, [setSwiped]);

  const handleOnItemClick = React.useCallback(
    (e, item) => {
      if (swiped) {
        e.stopPropagation();
        e.preventDefault();
        setSwiped(false);
      } else {
        console.log(item);
        setOpen(true);
        setContent(item);
      }
    },
    [swiped]
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <div
        className={clsx(classes.arrow, "rightArrow")}
        onClick={() => onClick()}
      >
        <Image src={nextArrow} alt="Next" />
      </div>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <div
        className={clsx(classes.arrow, "leftArrow")}
        onClick={() => onClick()}
      >
        <Image src={nextArrow} alt="Next" />
      </div>
    );
  };

  return (
    <Box className={classes.root} ref={elemRef}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
        >
          <Box className="imgHolderMain">
            <Image src={BannerSrc} alt="15 Years" priority quality={100} />
          </Box>
          <Box component="section" className={classes.section}>
            <Typography component="h2">Experience Matters</Typography>
            <Typography variant="h4">
              &ldquo;Good work isn’t cheap and cheap work isn’t good&rdquo;
            </Typography>
            <Typography variant="body2">
              A strong brand identity can help increasecustomer loyalty which in
              return can help increase sales. A logo designed by a professional
              can <span>boost sales</span> and <span>increase profits!</span>
            </Typography>
            <Stack
              direction={{ xs: "column-reverse", lg: "row" }}
              alignItems={{ xs: "flex-start", lg: "center" }}
              className="cta"
            >
              <OrderButton />
              <Stack direction="row" alignItems="center">
                <img src="/images/icons/99d.png" alt="99Design" />
                <Typography>
                  Interview w/ 99design
                  <br />
                  <Link href="/">Read</Link>
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Box className={classes.slickRoot}>
        <Carousel
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          responsive={responsive}
          removeArrowOnDeviceType={["mobile", "mobileLarge", "tablet"]}
          partialVisbile={true}
        >
          {services.map((slide, i) => (
            <Box className="slideItem" key={i}>
              <Stack
                className="slideContent"
                justifyContent="end"
                onClick={(e) => handleOnItemClick(e, slide)}
                sx={{ backgroundColor: slide.color }}
              >
                <div className="imgHolder">
                  <Image
                    src={slide.logo}
                    alt={slide.title}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="bottom center"
                    quality={100}
                  />
                </div>
                <Stack direction="row" alignItems="start">
                  <Typography variant="body2">0{i + 1}</Typography>
                  <Typography variant="h3">{slide.title}</Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Carousel>
      </Box>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {content && (
          <Box className="drawerContent">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h3">{content.title}</Typography>
              <IconButton onClick={toggleDrawer(false)} className="closeBtn">
                <img src="/images/icons/plus.png" alt="close" />
              </IconButton>
            </Stack>
            <Typography variant="body2">{content.details}</Typography>
            <OrderButton />
          </Box>
        )}
      </Drawer>
    </Box>
  );
}
