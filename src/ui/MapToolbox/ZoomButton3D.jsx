/* eslint-disable react/prop-types */
import { Box, Button, Collapse } from "@mui/material";
import {
  AddIcon,
  RemoveIcon,
  ZoomToolIcon,
  ResetIcon,
} from "../../utils/icons";
import { useState } from "react";
import { theme } from "../../utils/theme/ThemeProviderWrapper";

const ZoomButton3D = ({ onZoomIn, onZoomOut, onZoomReset }) => {
  const [openSlider, setOpenSlider] = useState(false);

  return (
    <Box display="flex" alignItems={"center"} justifyContent="flex-end" gap={0}>
      <Collapse orientation="horizontal" in={openSlider}>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems={"center"}
          sx={{
            bgcolor: "white",
            paddingRight: 6,
            paddingLeft: 4,
            marginRight: -4,
            height: "60px",
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
          }}
          gap={1}
        >
          <ZoomToolButton onClick={onZoomIn}>
            <AddIcon />
          </ZoomToolButton>
          <ZoomToolButton onClick={onZoomOut}>
            <RemoveIcon />
          </ZoomToolButton>
          <ZoomToolButton onClick={onZoomReset}>
            <ResetIcon />
          </ZoomToolButton>
        </Box>
      </Collapse>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenSlider((prev) => !prev)}
        sx={{
          border: `5px solid ${
            openSlider ? "white" : theme.palette.primary.main
          }`,

          borderRadius: 100,
          height: "60px",
          width: "60px",
        }}
      >
        <ZoomToolIcon />
      </Button>
    </Box>
  );
};

export default ZoomButton3D;

const ZoomToolButton = ({ children, onClick }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        border: `5px solid ${theme.palette.primary.main}`,
        borderRadius: 100,
        height: "40px",
        width: "40px",
        minWidth: 0,
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
