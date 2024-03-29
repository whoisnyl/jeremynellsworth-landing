import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const defaultTheme = createTheme({});

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      "'Poppins', sans-serif",
      "LufgaExtraBold",
      "LufgaBold",
      "LufgaMedium",
      "LufgaSemiBold",
      "LufgaExtraBold",
    ].join(","),
    fontWeight: 400,
    fontSize: 15,
    color: "#181604",
  },
  palette: {
    primary: {
      main: "#ffee00",
    },
    secondary: {
      main: "#181604",
    },
    gray: {
      main: "#706d5e",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 160,
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          textTransform: "initial",
          fontSize: 16,
          height: 55,
          borderRadius: 0,
          padding: "12px 30px 10px",

          [defaultTheme.breakpoints.up("sm")]: {
            height: 65,
            minWidth: 200,
            fontSize: 18,
            padding: "12px 50px 10px",
          },
        },
        containedPrimary: {
          background: "#ffee00",
          backgroundImage:
            "linear-gradient(135deg, rgba(255,240,69,.5) 0%, rgba(247,215,59,.5) 100%)",
          boxShadow: "0px 1px 0 0 #eacb39 !important",
          zIndex: 1,

          "&::before": {
            position: "absolute",
            content: "''",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 4,
            backgroundImage:
              "linear-gradient(135deg, rgba(247,215,59,.5) 0%, rgba(255,240,69,.5) 100%)",
            transition: "opacity 0.5s ease-out",
            zIndex: -1,
            opacity: 0,
          },

          "&:hover": {
            background: "#ffee00",
          },

          "&:hover::before": {
            opacity: 1,
          },
        },
        outlinedSecondary: {
          border: "2px solid #181604",

          "&:hover": {
            background: "#181604",
            color: "#fff",
          },
        },
        containedSecondary: {
          color: "#eacb39",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1248px !important",
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(50,50,50,0.75)",
        },
      },
    },
  },
});

export default theme;
