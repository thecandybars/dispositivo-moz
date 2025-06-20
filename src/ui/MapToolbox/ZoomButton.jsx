/* eslint-disable react/prop-types */
import { Box, Button, Slide } from "@mui/material";
import {
  AddIcon,
  RemoveIcon,
  ZoomToolIcon,
  ResetIcon,
} from "../../utils/icons";
import { useRef, useState } from "react";
import { theme } from "../../utils/theme/ThemeProviderWrapper";

const ZoomButton = ({ wrapperRef }) => {
  const [openSlider, setOpenSlider] = useState(false);
  const buttonRef = useRef();

  return (
    <Box display="flex" alignItems={"center"} justifyContent="flex-end" gap={0}>
      <Slide direction="left" in={openSlider} container={buttonRef.current}>
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
          <ZoomToolButton onClick={() => wrapperRef.current.zoomIn()}>
            <AddIcon />
          </ZoomToolButton>
          <ZoomToolButton onClick={() => wrapperRef.current.zoomOut()}>
            <RemoveIcon />
          </ZoomToolButton>
          <ZoomToolButton
            onClick={() => {
              wrapperRef.current.resetTransform();
              window.setTimeout(() => {
                wrapperRef.current.centerView();
              }, 500);
            }}
          >
            <ResetIcon />
          </ZoomToolButton>
        </Box>
      </Slide>
      <Button
        ref={buttonRef}
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

export default ZoomButton;

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
