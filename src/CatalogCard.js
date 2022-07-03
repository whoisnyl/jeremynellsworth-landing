/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Image from "next/image";
// mui
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

// -----------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    paddingBottom: "100%",

    "& .imgHolder": {
      position: "absolute",
      width: "60%",
      display: "block",
      height: "70%",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",

      [theme.breakpoints.up("md")]: {
        width: "55%",
      },
    },

    "& .info": {
      cursor: "pointer",
      position: "absolute",
      bottom: 10,
      right: 10,
      width: 45,
      height: 45,
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
}));

// -----------------------------------------------

export default function CatalogCard({ data, onClick, withButton = false }) {
  const classes = useStyles();

  return (
    <Box className={classes.root} sx={{ backgroundColor: data.theme }}>
      <div className="imgHolder">
        <Image
          src={data.logo}
          alt={data.title}
          quality={100}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>

      {withButton && (data.video !== null || data.review !== null) ? (
        <Box className="info" onClick={() => onClick(data)}>
          <img
            src={`/images/icons/${
              data.video !== null ? "play-video-light" : "quote"
            }.png`}
            alt="Info"
            className={data.video !== null ? "playVideo" : ""}
          />
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
