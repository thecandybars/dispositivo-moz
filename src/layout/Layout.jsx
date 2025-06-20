/* eslint-disable no-unused-vars */
import { Box, Button, Stack } from "@mui/material";
import { Outlet } from "react-router";
import Header from "./Header";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import { useContext } from "react";
import { CreditosIcon } from "../utils/icons";

export default function Layout() {
  const { highContrast } = useContext(AccesibilityContext);
  return (
    <Stack
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        height: "100vh",
        width: "100vw",
        padding: 1,
        gap: 1,
        filter: highContrast ? "invert(1)" : "none",
      }}
    >
      <Header />
      {/* <Box position="absolute" bottom={0} left={0} px={4} py={2}>
        <Button variant="outlined" sx={{ borderRadius: 100 }}>
          <CreditosIcon />
        </Button>
      </Box> */}
      <Outlet />
    </Stack>
  );
}
