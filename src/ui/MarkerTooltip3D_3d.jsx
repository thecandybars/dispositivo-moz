/* eslint-disable react/prop-types */
import { Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router";
import { CloseIcon } from "../utils/icons";
import { useContext } from "react";
import { AccesibilityContext } from "../contexts/AccesibilityContext";

export default function MarkerTooltip3D({ tooltip, onClose }) {
  // const { highContrast } = useContext(AccesibilityContext);
  return (
    <Paper elevation={4} onClick={onClose} position="relative">
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
        {tooltip.image && (
          <img
            src={tooltip.image}
            width="280px"
            height="90px"
            style={{
              objectFit: "cover",
              borderRadius: "8px",
              // filter: highContrast ? "invert(1)" : "none",
            }}
          />
        )}
        {tooltip.title && (
          <Typography variant="h6" color="primary">
            {tooltip.title}
          </Typography>
        )}
        {tooltip.description && (
          <Typography variant="body1">{tooltip.description}</Typography>
        )}
        {tooltip.button && tooltip.path && (
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to={tooltip.path}
          >
            <Typography variant="body1">{tooltip.button}</Typography>
          </Button>
        )}
      </Stack>
    </Paper>
  );
}
