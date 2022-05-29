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
      main: "#f7d73b",
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
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          textTransform: "initial",
          fontSize: 16,
          borderRadius: 6,
          padding: "10px 30px",

          [defaultTheme.breakpoints.up("sm")]: {
            height: 60,
            padding: "10px 50px",
          },
        },
        containedPrimary: {
          backgroundImage:
            "linear-gradient(to top, #f7d73b, #fff045), linear-gradient(to bottom, #f8db3d, #f8db3d);",
          boxShadow: "0px 1px 0 0 #eacb39;",
        },
        outlinedSecondary: {
          border: "2px solid #181604",
        },
        containedSecondary: {
          color: "#eacb39",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1200px !important",
        },
      },
    },
  },
});

export default theme;
