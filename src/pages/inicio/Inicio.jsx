import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";
import { theme } from "../../utils/theme/ThemeProviderWrapper";
import { Link } from "react-router";

export default function Inicio() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].inicio;
  const renderIndice = t.indice.map((item, i) => (
    <Box
      key={item}
      borderLeft={i !== 0 && `3px solid ${theme.palette.primary.main}`}
      py={1}
      px={3}
    >
      <Typography variant="h3">{item}</Typography>
    </Box>
  ));

  return (
    <Stack
      height={1}
      sx={{ backgroundColor: "black", color: "white" }}
      alignItems="center"
      justifyContent={"space-between"}
      pb={1}
      pt={8}
      gap={2}
    >
      <img
        src="/logo_moz.png"
        alt="logo moz"
        style={{ width: 163, height: "auto" }}
      />
      <Typography
        variant="h1"
        sx={{
          color: "white",
          textAlign: "center",
          borderBottom: `3px double ${theme.palette.primary.main}`,
          borderTop: `3px double ${theme.palette.primary.main}`,
          paddingX: 5,
          paddingY: 2,
          marginY: 2,
        }}
      >
        {t.titulo}
      </Typography>

      <Stack justifyContent={"center"} alignItems="center" gap={2}>
        <Typography variant="h3" fontSize={"2rem"} color="primary.light">
          {t.subtitulo}
        </Typography>
        <Box display={"flex"}>{renderIndice}</Box>
      </Stack>

      <Button
        to="/mapa"
        variant="contained"
        component={Link}
        style={{ paddingX: "3rem" }}
        sx={{
          py: 1,
          px: 3,
          borderRadius: 100,
          color: "white",
        }}
      >
        <Typography variant="h4">{t.boton}</Typography>
      </Button>

      <img
        src="/logo_banco_republica.png"
        alt="logo moz"
        style={{ width: 160, height: "auto" }}
      />
    </Stack>
  );
}
