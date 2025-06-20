/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material";

const ToolBoxWrapper = ({ children }) => {
  return (
    <Box
      width="min-content"
      sx={{
        position: "absolute",
        zIndex: 10,
        paddingX: 3,
        paddingY: 1,
        top: 0,
        right: 0,
      }}
    >
      <Stack bgcolor="none" alignItems="flex-end" gap={2}>
        {children}
      </Stack>
    </Box>
  );
};

export default ToolBoxWrapper;
