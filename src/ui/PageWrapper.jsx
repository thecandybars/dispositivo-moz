/* eslint-disable react/prop-types */

import { Box } from "@mui/material";

/**
 * PageWrapper component.
 *
 * It wraps the given children in two boxes, one for the
 * sidebar (25% width) and one for the main content (75% width).
 *
 * The sidebar box is given a padding of 2 on the x-axis and
 * the main content box is given a width of 75%, its overflow
 * is set to hidden and its text is centered.
 *
 * @param {React.ReactNode} children - The children to be rendered
 * @returns {React.ReactElement}
 */
export default function PageWrapper({ children }) {
  return (
    <Box sx={{ display: "flex", overflow: "hidden", height: "100%" }}>
      <Box paddingX={2} sx={{ width: "25%" }}>
        {children[0]}
      </Box>
      <Box
        sx={{
          width: "75%",
          overflow: "hidden",
          position: "relative",
          textAlign: "center",
        }}
      >
        {children[1]}
      </Box>
    </Box>
  );
}
