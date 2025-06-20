/* eslint-disable react/prop-types */
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import PageWrapper from "../../ui/PageWrapper";
import Side from "./Side";
import { useContext, useState } from "react";
import { CloseIcon, ResetIcon, SkipNextIcon } from "../../utils/icons";
import GLBAnimation from "../../glbViewer/GLBAnimation";
import { useNavigate } from "react-router";
import { theme } from "../../utils/theme/ThemeProviderWrapper";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";

export default function Excavacion() {
  const navigate = useNavigate();

  // TEXTOS
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].excavacion;

  // Animation control
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  //

  const markers = {
    0: null,
    1: {
      position: [60, 53],
      image: "/zonaExcavacion1.png",
      positionTooltip: { x: 2, y: 2 },
    },
    2: {
      position: [55, 40],
      image: "/zonaExcavacion2.png",
      positionTooltip: { x: 45, y: 2 },
    },
  };
  const texts = [
    { title: t.sideTitle, body: t.sideParagraph },
    { title: t.markers[0].title, body: t.markers[0].sideParagraph },
    { title: t.markers[1].title, body: t.markers[1].sideParagraph },
  ];
  return (
    <PageWrapper>
      <Side title={texts[currentStep].title} body={texts[currentStep].body} />
      <Stack height="100%">
        {/* 3D PLAYER */}
        <Box position="relative" width="100%" bgcolor="#ddd" height="90%">
          {!isPlaying && (
            <Marker
              marker={markers[currentStep]}
              text={t.markers[currentStep - 1]}
            />
          )}
          <GLBAnimation step={currentStep} onPlaying={(e) => setIsPlaying(e)} />
          {/* <ToolBoxWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              currentStep === 2
                ? navigate("/piezas")
                : setCurrentStep((prevStep) => (prevStep + 1) % 3)
            }
            sx={{
              display: "flex",
              gap: 1,
              border: `5px solid ${theme.palette.primary.main}`,
              borderRadius: 100,
              height: "60px",
              width: currentStep === 2 ? "200px" : "60px",
              transition: "all 0.1s ease-in-out",
            }}
          >
            {currentStep === 2 && (
              <Typography>{t.botones.linkPiezas}</Typography>
            )}
            <SkipNextIcon />
          </Button>
          {currentStep === 2 && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep((prevStep) => (prevStep + 1) % 3)}
              sx={{
                border: `5px solid ${theme.palette.primary.main}`,

                borderRadius: 100,
                height: "60px",
                width: "60px",
              }}
            >
              <ResetIcon />
            </Button>
          )}
        </ToolBoxWrapper> */}
        </Box>
        {/* BUTTONS */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          p={1}
          gap={1}
          height={"10%"}
        >
          {currentStep === 2 && (
            <Button
              variant="contained"
              color="primary"
              onClick={() => setCurrentStep((prevStep) => (prevStep + 1) % 3)}
              sx={{
                border: `2px solid ${theme.palette.primary.main}`,
                borderRadius: 100,
                height: "60px",
                bgcolor: "white",
              }}
            >
              <Typography variant="body1" color="primary">
                {t.botones.reset}
              </Typography>
              <ResetIcon color="primary" />
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              currentStep === 2
                ? navigate("/piezas")
                : setCurrentStep((prevStep) => (prevStep + 1) % 3)
            }
            sx={{
              display: "flex",
              gap: 1,
              border: `5px solid ${theme.palette.primary.main}`,
              borderRadius: 100,
              height: "60px",
              // width: currentStep === 2 ? "200px" : "60px",
              transition: "all 0.1s ease-in-out",
            }}
          >
            {
              <Typography variant="body1">
                {currentStep === 2 ? t.botones.linkPiezas : t.botones.linkNext}
              </Typography>
            }
            <SkipNextIcon />
          </Button>
        </Box>
      </Stack>
    </PageWrapper>
  );
}

const Marker = ({ marker, text }) => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      {openDialog && (
        <MarkerTooltip
          positionTooltip={marker.positionTooltip}
          image={marker.image}
          title={text.title}
          description={text.description}
          button={text.button}
          onClose={() => setOpenDialog(false)}
        />
      )}
      {marker && (
        <Box
          position="absolute"
          width="40px"
          height="40px"
          color="white"
          marginBottom={2}
          sx={{
            top: `${marker.position[0]}%`,
            left: `${marker.position[1]}%`,
            zIndex: "1000",
            cursor: "pointer",

            borderRadius: "100%",
            border: `3px solid ${theme.palette.primary.light}`,
          }}
        >
          <Box
            sx={{
              borderRadius: "100%",
              border: `3px solid ${theme.palette.primary.dark}`,
              bgcolor: theme.palette.primary.translucid,
              width: "100%",
              height: "100%",
            }}
            display={"flex"}
            justifyContent="center"
            alignItems="baseline"
            onClick={() => setOpenDialog(true)}
          >
            <Typography variant="h6">{text?.caption || ""}</Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

const MarkerTooltip = ({
  positionTooltip,
  image,
  title,
  description,
  // button,
  onClose,
}) => {
  // const { highContrast } = useContext(AccesibilityContext);

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: "1000",
        top: positionTooltip.y + "%",
        left: positionTooltip.x + "%",
        maxWidth: "50%",
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
              width="480px"
              height="auto"
              style={{
                objectFit: "cover",
                borderRadius: "8px",
                // filter: highContrast ? "invert(1)" : "none",
              }}
            />
          )}
          {title && (
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant="body1" align="left">
              {description}
            </Typography>
          )}
          {/* {button  && (
            <Button variant="contained" color="primary" onClick={onClose}>
              <Typography variant="body1">{button}</Typography>
            </Button>
          )} */}
        </Stack>
      </Paper>
    </Box>
  );
};
