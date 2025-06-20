/* eslint-disable react/prop-types */
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router";
import { CloseIcon } from "../utils/icons";
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext } from "react";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import { theme } from "../utils/theme/ThemeProviderWrapper";

export default function MarkerTooltip({
  image,
  imagePOIs,
  title,
  path,
  description,
  list,
  button,
  onClose,
  highContrastProp,
  fontScaleProp = false,
}) {
  const fontScale = useContext(AccesibilityContext)?.fontScale || fontScaleProp;
  const fontScaler = fontScale ? 1.7 : 1;
  const styles = {
    poi: {
      variant: "label",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      bgcolor: theme.palette.primary.main,
      borderRadius: "100%",
      border: `1px solid ${theme.palette.primary.light}`,
      sx: {
        p: 1,
        fontWeight: 500,
        fontSize: `${0.7 * fontScaler}rem`,
      },
      width: "25px",
      height: "25px",
    },
  };

  const indiceLetras = ["a", "b", "c", "d", "e", "f"];

  const highContrast =
    !!useContext(AccesibilityContext)?.highContrast || highContrastProp;

  // IMAGE
  const renderImage = (
    <img
      src={image}
      width="100%"
      height="auto"
      style={{
        borderRadius: "8px",
        filter: highContrast ? "invert(1)" : "none",
      }}
    />
  );
  // IMAGE POIs
  const poi = imagePOIs?.map((poi, index) => (
    <Box
      key={poi[0] + poi[1]}
      position="absolute"
      top={`${poi[0]}%`}
      left={`${poi[1]}%`}
      {...styles.poi}
    >
      {indiceLetras[index]}
    </Box>
  ));
  // IMAGE+POIs
  const renderImageWithPOIs = (
    <Box position="relative">
      <>
        {poi}
        {renderImage}
      </>
    </Box>
  );

  const listFormatted =
    list &&
    list.split("#").map((text, index) => (
      <Box
        key={index}
        display={"flex"}
        alignItems={"baseline"}
        justifyContent={"flex-start"}
        gap={0.3}
      >
        <Typography {...styles.poi}>{indiceLetras[index]}</Typography>
        <Typography
          variant="caption"
          key={index}
          display={"flex"}
          alignItems={"baseline"}
          sx={{
            fontWeight: 300,
            fontSize: `${0.8 * fontScaler}rem`,
          }}
        >
          {text}
        </Typography>
      </Box>
    ));

  return (
    <Box
      sx={{
        position: "absolute",
        top: "-500%", // Positions the box relative to the marker
        left: "120%",
        width: image ? "650px" : "300px",
        height: "auto",
        zIndex: 100,
        // filter: "opacity(0.9)",
      }}
      onClick={onClose}
    >
      <Paper elevation={4} bgcolor="white">
        <Box display={"flex"} justifyContent={"flex-end"}>
          <CloseIcon
            fontSize="large"
            sx={{
              zIndex: 100,
              position: image ? "absolute" : "relative",
              top: "5px",
              right: "5px",
              cursor: "pointer",
              color: theme.palette.primary.main,
              bgcolor: "white",
              borderRadius: "100%",
            }}
          />
        </Box>
        <Stack alignItems={"center"} gap={1} p={2}>
          {image && renderImageWithPOIs}
          {/* {image && renderImage} */}
          {title && (
            <Typography
              variant="h6"
              sx={{
                fontSize: `${1.1 * fontScaler}rem`,
                fontWeight: "bold",
                color: theme.palette.primary.main,
              }}
            >
              {title}
            </Typography>
          )}
          {list && (
            <Box
              display={"flex"}
              gap={2}
              flexWrap={"wrap"}
              textAlign={"left"}
              // justifyContent={"center"}
            >
              {listFormatted}
            </Box>
          )}
          {description && (
            <Typography
              variant="body1"
              align="left"
              sx={{ fontWeight: 400, fontSize: `${1 * fontScaler}rem` }}
            >
              {description}
            </Typography>
          )}
          {button && path && (
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={path}
            >
              <Typography variant="body1">{button}</Typography>
            </Button>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}
