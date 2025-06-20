/* eslint-disable react/prop-types */
import { Box, CircularProgress } from "@mui/material";

export default function LoadingAnimation({ open }) {
  return (
    open && (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#ddd",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    )
  );
}
