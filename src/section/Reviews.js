import * as React from "react";
import Image from "next/image";
// mui
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
// components
import Link from "../../src/Link";
import reviews from "../../_mocks_/reviews";

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 80,
    backgroundColor: "#faf7e6",
    position: "relative",
  },
  section: {
    textAlign: "center",
    maxWidth: 764,
    margin: "0 auto 30px",

    "& h6": {
      fontSize: 18,
      fontWeight: 600,
      color: theme.palette.gray.main,
    },
    "& h2": {
      fontFamily: "LufgaBold",
      fontSize: 48,
      lineHeight: 1.4,
      margin: theme.spacing(1, 0),

      "& .bg": {
        paddingBottom: 6,
        backgroundImage: "url('/images/icons/text-bg-primary.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      },
    },
    "& .stars": {
      "& img": {
        width: 16,
        height: 16,
        margin: 1,
      },
      "& p": {
        fontSize: 16,
        lineHeight: 1,
        marginTop: 2,
        marginLeft: 5,
      },
    },
    "& > p": {
      color: theme.palette.gray.main,
      fontSize: 16,
      margin: theme.spacing(3, 0),
    },
    "& .platforms": {
      marginBottom: theme.spacing(5),

      "& img": {
        marginRight: 15,

        "&.google": {
          maxHeight: 18,
        },
        "&.facebook": {
          maxHeight: 14,
        },
        "&.trustpilot": {
          maxHeight: 22,
        },
      },
    },
  },
  reviewCard: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 30,
    boxShadow: "0px 53px 60px 0 rgba(112, 109, 94, 0.1)",
    marginBottom: 24,

    [theme.breakpoints.up("sm")]: {
      padding: 40,
    },

    "&:last-of-type": {
      margin: 0,
    },

    "& .profile": {
      position: "relative",
      width: 60,
      height: 60,
      borderRadius: 30,
      overflow: "hidden",
      backgroundColor: theme.palette.primary.main,

      "& p": {
        fontSize: 25,
        fontWeight: 600,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      },
    },

    "& .info": {
      paddingLeft: 20,

      "& p": {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 1,
      },

      "& span": {
        fontSize: 12,
        color: theme.palette.gray.main,
      },
    },

    "& .comment": {
      margin: theme.spacing(4, 0),

      "& p": {
        fontSize: 16,
      },
    },

    "& .footer": {
      "& .google": {
        maxHeight: 18,
      },
      "& .facebook": {
        maxHeight: 14,
      },
      "& .trustpilot": {
        maxHeight: 22,
      },

      "& p": {
        fontSize: 12,
        color: theme.palette.gray.main,
      },

      "& div > img": {
        width: 16,
        marginLeft: 2,
      },
    },
  },
}));

// -----------------------------------------------

const firstGrid = [];
const secondGrid = [];

reviews.map((x, i) => {
  if (i + 1 <= reviews.length / 2) {
    firstGrid.push(x);
  } else {
    secondGrid.push(x);
  }
});

const ReviewGrid = ({ arr, classes, spacing }) => {
  const getStars = (x) => {
    const stars = [];
    for (let i = 0; i < x; i++) {
      stars.push(<img key={i} src="/images/icons/star-full.png" alt="Star" />);
    }

    return stars;
  };

  return (
    <Grid item xs={12} md={6} mt={spacing && { md: 8 }}>
      {arr.map((item, i) => (
        <Box className={classes.reviewCard} key={i}>
          <Stack direction="row" alignItems="center">
            <Box className="profile">
              {item.customer.image ? (
                <Image src={item.customer.image} alt={item.customer.name} />
              ) : (
                <Typography>
                  {item.customer.name.split(" ").map((x) => x.charAt(0))}
                </Typography>
              )}
            </Box>
            <Box className="info">
              <Typography>{item.customer.name}</Typography>
              <Typography component="span">{item.customer.job}</Typography>
            </Box>
          </Stack>
          <Box className="comment">
            <Typography>{item.comment}</Typography>
          </Box>
          <Box className="footer">
            <img
              className={item.platform}
              src={`/images/icons/${item.platform}.png`}
              alt={item.platform}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography>{item.datetime}</Typography>
              <Stack direction="row" alignItems="center">
                {getStars(item.ratings)}
              </Stack>
            </Stack>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

// -----------------------------------------------

export default function Reviews() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 2, lg: 2.5 }}>
          <Grid item xs={12}>
            <Box component="section" className={classes.section}>
              <Typography variant="h6">Customer Satisfaction</Typography>
              <Typography variant="h2">
                <span className="bg">980</span>+ 5 Star Reviews
              </Typography>
              <Stack
                direction="row"
                className="stars"
                alignItems="center"
                justifyContent="center"
              >
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <img src="/images/icons/star-full.png" alt="Star" />
                <Typography>5.0</Typography>
              </Stack>
              <Typography>
                All reviews can be cross checked and verified through the
                following platforms
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                className="platforms"
                justifyContent="center"
              >
                <img
                  src="/images/icons/google-dark.png"
                  alt="Google"
                  className="google"
                />
                <img
                  src="/images/icons/facebook-dark.png"
                  alt="Facebook"
                  className="facebook"
                />
                <img
                  src="/images/icons/trustpilot-dark.png"
                  alt="Trust Pilot"
                  className="trustpilot"
                />
              </Stack>
              <Button variant="contained">Order Now</Button>
            </Box>
          </Grid>
          <ReviewGrid arr={firstGrid} classes={classes} />
          <ReviewGrid arr={secondGrid} classes={classes} spacing={true} />
        </Grid>
      </Container>
    </Box>
  );
}
