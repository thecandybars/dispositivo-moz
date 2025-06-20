import { Box } from "@mui/material";
import { useContext, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import Marker from "../../ui/Marker";
import ZoomButton from "../../ui/MapToolbox/ZoomButton";
import { AccesibilityContext } from "../../contexts/AccesibilityContext";

export default function Mapa() {
  const wrapperRef = useRef();

  const { lang } = useContext(LanguageContext);
  const t = translations[lang].map;

  const [isPanning, setIsPanning] = useState(false);

  const { highContrast } = useContext(AccesibilityContext);

  // Markers
  const [selectedMarker, setSelectedMarker] = useState(null);
  const markers = [
    {
      id: 0,
      image: "/mapa_poi01.jpg",
      position: { x: 44.5, y: 36.5 },
      positionTooltip: { x: 43, y: 20 },
    },
    {
      id: 1,
      image: "/mapa_poi02.jpg",
      position: { x: 38.5, y: 36 },
      positionTooltip: { x: 35, y: 20 },
    },
    {
      id: 2,
      image: "/mapa_poi03.jpeg",
      position: { x: 37.5, y: 39 },
      positionTooltip: { x: 35, y: 20 },
      imagePOIs: [
        [90, 30],
        [60, 90],
      ],
    },
    {
      id: 3,
      image: "/mapa_poi04.jpeg",
      imagePOIs: [
        [11, 1],
        [40, 1],
        [90, 1],
        [90, 50],
        [45, 60],
      ],
      position: { x: 40.3, y: 34 },
      positionTooltip: { x: 43, y: 20 },
      path: "/excavacion",
    },
  ];
  const markersWithTexts = markers.map((marker, i) => ({
    ...marker, // Markers data +
    ...t.markers[i], // Markers texts
  }));

  const renderMarkers = markersWithTexts.map((marker) => (
    <Marker
      key={marker.id}
      isOpen={selectedMarker === marker.id}
      marker={marker}
      onClick={() => handleMarkerClick(marker.id)}
      onClose={() => setSelectedMarker(null)}
    />
  ));

  const handleMarkerClick = (markerCaption) => {
    if (markerCaption === selectedMarker) setSelectedMarker(null);
    else setSelectedMarker(markerCaption);
  };

  return (
    <Box
      sx={{
        cursor: isPanning ? "grabbing" : "grab",
      }}
    >
      {/* MAP */}
      <TransformWrapper
        ref={wrapperRef}
        centerZoomedOut={true}
        initialScale={1.7}
        centerOnInit={true}
        wheel={{ disabled: false }}
        doubleClick={{ disabled: true }}
        pinch={{ disabled: false }}
        zoomAnimation={{ disabled: false }}
        panning={{ velocityDisabled: false }}
        onPanningStart={() => setIsPanning(true)}
        onPanningStop={() => setIsPanning(false)}
      >
        <TransformComponent>
          <Box sx={{ position: "relative", width: "100%" }}>
            {renderMarkers}
            <img
              src="/mapa01.jpg"
              width="100%"
              style={{
                width: "100%",
                display: "block",
                zIndex: 1,
                filter: highContrast ? "invert(100%)" : "none",
              }}
            />
          </Box>
        </TransformComponent>
      </TransformWrapper>

      {/* TOOLBOX */}
      <ToolBoxWrapper>
        <ZoomButton wrapperRef={wrapperRef} />
      </ToolBoxWrapper>
    </Box>
  );
}
