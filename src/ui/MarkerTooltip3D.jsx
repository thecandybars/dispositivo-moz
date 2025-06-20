/* eslint-disable react/prop-types */
import { Button, Paper, Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router";
import { CloseIcon } from "../utils/icons";
import { useContext } from "react";
import { AccesibilityContext } from "../contexts/AccesibilityContext";

export default function MarkerTooltip3D({
  image,
  title,
  path,
  description,
  button,
  positionTooltip,
  onClose,
}) {
  const { highContrast } = useContext(AccesibilityContext);
  return (
    <Box
      style={{
        position: "absolute",
        transform: "translateX(-50%)",
        top: positionTooltip.y + "%",
        left: positionTooltip.x + "%",
      }}
    >
      <Paper elevation={4} bgcolor="white" onClick={onClose}>
        <CloseIcon
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
            color: "primary.main",
            bgcolor: "white",
            borderRadius: "100%",
          }}
        />
        <Stack alignItems={"center"} gap={1} p={1}>
          {image && (
            <img
              src={image}
              width="280px"
              height="90px"
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                filter: highContrast ? "invert(1)" : "none",
              }}
            />
          )}
          {title && (
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body1">{description}</Typography>
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
