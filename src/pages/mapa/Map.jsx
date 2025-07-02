import { Box, Dialog, Zoom } from "@mui/material";
import { forwardRef, useContext, useRef, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";
import ToolBoxWrapper from "../../ui/MapToolbox/ToolboxWrapper";
import Marker from "../../ui/Marker";
import ZoomButton from "../../ui/MapToolbox/ZoomButton";
import { AccesibilityContext } from "../../contexts/AccesibilityContext";
import MarkerTooltip from "../../ui/MarkerTooltip";

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
      position: { x: 42.5, y: 36.5 },
      positionTooltip: { x: 43, y: 20 },
    },
    {
      id: 1,
      image: "/mapa_poi02.jpg",
      position: { x: 38, y: 35.5 },
      positionTooltip: { x: 35, y: 20 },
    },
    {
      id: 2,
      image: "/mapa_poi03.jpeg",
      position: { x: 36.5, y: 39 },
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
        [45, 60],
        [90, 50],
        [90, 1],
      ],
      position: { x: 39.5, y: 34 },
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

  const selectedMarkerData = markersWithTexts.find(
    (marker) => marker.id === selectedMarker
  );

  const renderDialog = (
    <Dialog
      open={selectedMarker !== null}
      fullWidth={false}
      maxWidth={false}
      slots={{
        transition: Transition,
      }}
      onClose={() => setSelectedMarker(null)}
      PaperProps={{
        sx: {
          width: "auto",
          maxWidth: "none",
        },
      }}
    >
      <MarkerTooltip
        image={selectedMarkerData?.image}
        imagePOIs={selectedMarkerData?.imagePOIs}
        title={selectedMarkerData?.title}
        description={selectedMarkerData?.description}
        list={selectedMarkerData?.list}
        button={selectedMarkerData?.button}
        path={selectedMarkerData?.path}
        onClose={() => setSelectedMarker(null)}
        // Context passed as props cause Html element creates a separete React tree
        highContrastProp={false}
        fontScaleProp={false}
        // highContrastProp={highContrast}
        // fontScaleProp={fontScale}
        // AI says : The <Html> component from @react-three/drei creates a portal to render HTML content outside the normal React Three Fiber component tree. This creates a disconnect in the React context chain, so components inside the Html portal can't access contexts from the parent tree.
      />
    </Dialog>
  );

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
      {renderDialog}
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Zoom ref={ref} {...props} />;
});
