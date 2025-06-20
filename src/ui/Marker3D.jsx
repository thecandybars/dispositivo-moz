/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { theme } from "../utils/theme/ThemeProviderWrapper";
export default function Marker3D({ caption, onClick }) {
  return (
    <Box
      width="40px"
      height="40px"
      color="white"
      marginBottom={2}
      bgcolor={theme.palette.primary.main}
      sx={{
        borderRadius: "100%",
        border: "3px solid white",
        cursor: "pointer",
      }}
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
    >
      <Typography variant="h6">{caption}</Typography>
    </Box>
  );
}
