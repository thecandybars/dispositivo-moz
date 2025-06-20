import { Box, Stack } from "@mui/material";
import GLBViewer from "../../glbViewer/GLBViewer";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { Rotate3D } from "../../utils/icons";
import ZoomButton3D from "../../ui/MapToolbox/ZoomButton3D";
import { theme } from "../../utils/theme/ThemeProviderWrapper";
import uno from "/1.svg";
import dos from "/2.svg";
import tres from "/3.svg";
import LoadingAnimation from "../../ui/LoadingAnimation";
import translations from "../../utils/translations";
import { LanguageContext } from "../../contexts/LanguageContext";
import PageWrapper from "../../ui/PageWrapper";
import Side from "./Side";
import { models } from "./models";

export default function Modelo() {
  const [rotateModel, setRotateModel] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].piezas.modelos;

  const modelsWithText = models.map((model, indexModel) => ({
    ...model,
    ...t[indexModel],
    markers: model.markers.map((marker, indexMarker) => ({
      ...marker,
      ...t[indexModel].markers[indexMarker],
    })),
  }));

  const [selectedModel, setSelectedModel] = useState(modelsWithText[0]);

  const zoomStep = 1.1;
  const onZoomOut = () => {
    setZoomLevel((prev) => Math.max(0.8, prev / zoomStep));
  };
  const onZoomIn = () => {
    setZoomLevel((prev) => Math.min(5, prev * zoomStep));
  };
  const onZoomReset = () => {
    setZoomLevel(1);
  };

  // Side Buttons
  const renderSideButtons = modelsWithText.map((model) => (
    <Button
      key={model.id}
      variant="contained"
      onClick={() => {
        if (selectedModel.id === model.id) return;
        setSelectedModel(model);
        setSelectedLayer(0);
        setIsReady(false);
      }}
      sx={{
        borderLeft:
          selectedModel.id === model.id
            ? `5px solid ${theme.palette.primary.light}}`
            : "none",
        borderLeftStyle: "inset",
      }}
    >
      {model.title}
    </Button>
  ));

  // selectedLayer
  const modelLayers = {
    0: {
      name: "both",
      icon: uno,
    },
    1: {
      name: "first",
      icon: dos,
    },
    2: {
      name: "second",
      icon: tres,
    },
  };
  const [selectedLayer, setSelectedLayer] = useState(0);

  // Mouse
  const [isClicked, setIsClicked] = useState(false);

  //
  const [isReady, setIsReady] = useState(false);

  return (
    <PageWrapper>
      <Side
        title={selectedModel.sideTitle}
        body={selectedModel.sideParagraph}
      />
      <Box height={1} display="flex">
        <Box
          position="relative"
          width="100%"
          bgcolor="#ddd"
          sx={{ cursor: isClicked ? "grabbing" : "grab" }}
          onMouseDown={() => setIsClicked(true)}
          onMouseUp={() => setIsClicked(false)}
        >
          <LoadingAnimation open={!isReady} />
          <GLBViewer
            model={selectedModel}
            rotateModel={rotateModel}
            turnLight={true}
            zoomLevel={zoomLevel}
            selectedLayer={modelLayers[selectedLayer].name}
            onReady={() => setIsReady(true)}
          />
          <ToolBoxWrapper>
            <ZoomButton3D
              onZoomIn={onZoomIn}
              onZoomOut={onZoomOut}
              onZoomReset={onZoomReset}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => setRotateModel((prev) => !prev)}
              sx={{
                border: `5px solid ${
                  rotateModel ? "white" : theme.palette.primary.main
                }`,

                borderRadius: 100,
                height: "60px",
                width: "60px",
              }}
            >
              <Rotate3D />
            </Button>
            {/* <Button
              variant="contained"
              color="primary"
              onClick={() => setTurnLight((prev) => !prev)}
              sx={{
                border: `5px solid ${
                  turnLight ? "white" : theme.palette.primary.main
                }`,

                borderRadius: 100,
                height: "60px",
                width: "60px",
              }}
            >
              <Light3D />
            </Button> */}
            <Button
              color="primary"
              onClick={() => setSelectedLayer((prev) => (prev + 1) % 3)}
              sx={{
                borderRadius: 100,
                height: "60px",
                width: "60px",
                backgroundColor: theme.palette.primary.main,
              }}
            >
              <img
                src={modelLayers[selectedLayer].icon}
                width={40}
                height={40}
                style={{
                  borderRadius: 100,
                  filter:
                    "brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(233deg) brightness(104%) contrast(104%)",
                }}
              />
            </Button>
          </ToolBoxWrapper>
        </Box>
        <Stack gap={1} width="200px" p={2}>
          {renderSideButtons}
        </Stack>
      </Box>
    </PageWrapper>
  );
}
