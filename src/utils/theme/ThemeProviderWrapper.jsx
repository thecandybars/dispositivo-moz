/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { useContext, useMemo } from "react";
import { AccesibilityContext } from "../../contexts/AccesibilityContext";

export const theme = {
  palette: {
    primary: {
      dark: "#6e5200",
      main: "#a67c00",
      light: "#d3af44",
      translucid: "#caab4f99",
    },
    secondary: {
      main: "#005f6a",
    },
    background: { main: "#f5f5f5" },
    text: {
      main: "#333",
    },
    white: "#ffffff",
  },
};
export default function ThemeProviderWrapper({ children }) {
  const { fontScale } = useContext(AccesibilityContext);
  const fontScaler = fontScale ? 1.7 : 1.2;
  // MUI THEME
  const muiTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        typography: {
          // fontFamily: "Roboto",
          fontFamily: "Fugue Regular,courier",
          // fontFamily: "Fugue Regular, Roboto, sans-serif",
          fontWeightRegular: 400,
          button: {
            textTransform: "none",
          },
          h1: {
            fontFamily: "Fugue Headline",
            fontWeight: 700,
            fontSize: `${3 * fontScaler}rem`,
            marginBottom: "1rem",
          },
          h2: {
            fontFamily: "Fugue Headline",
            fontWeight: 700,
            fontSize: `${1.6 * fontScaler}rem`,
            marginBottom: "1rem",
          },
          h3: {
            fontFamily: "Fugue Regular",
            fontWeight: 700,
            fontSize: `${1.5 * fontScaler}rem`,
          },
          h4: {
            fontFamily: "Fugue Regular",

            fontWeight: 400,
            fontSize: `${1.6 * fontScaler}rem`,
          },
          h5: {
            fontFamily: "Fugue Regular",

            fontWeight: 400,
            fontSize: `${1.3 * fontScaler}rem`,
          },
          h6: {
            fontFamily: "Fugue Regular",

            fontWeight: 700,
            fontSize: `${1.1 * fontScaler}rem`,
          },
          body1: {
            fontFamily: "Fugue Regular",

            fontWeight: 400,
            fontSize: `${1 * fontScaler}rem`,
          },
          caption: {
            fontFamily: "Fugue Regular Italic",
            fontWeight: 400,
            fontSize: `${0.9 * fontScaler}rem`,
            // marginY: 0,
          },
          label: {
            fontWeight: 400,
            fontSize: `${0.9 * fontScaler}rem`,
          },
          error: {
            fontFamily: "Work Sans",
            fontWeight: 200,
            fontSize: `${0.9 * fontScaler}rem`,
            color: "#d32f2f",
          },
        },
      }),
    [fontScale]
  );
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
