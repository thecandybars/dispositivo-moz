import { Box, Button, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";
import { theme } from "../../utils/theme/ThemeProviderWrapper";
import { Link } from "react-router";

export default function Idioma() {
  const { lang, setLang } = useContext(LanguageContext);
  const t = translations[lang].inicio;

  return (
    <Stack
      height={1}
      sx={{ backgroundColor: "black", color: "white" }}
      alignItems="center"
      justifyContent={"space-between"}
      pb={2}
      pt={4}
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
          // textShadow: `3px 3px 1px ${theme.palette.primary.translucid}`,
        }}
      >
        {t.titulo.toUpperCase()}
      </Typography>
      <Box display={"flex"} gap={2}>
        <Button
          variant="contained"
          component={Link}
          to="/indice"
          sx={{
            py: 1,
            px: 3,
            borderRadius: 100,
            color: "white",
          }}
          onClick={() => setLang("es")}
        >
          <Typography variant="h4"> Español</Typography>
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/indice"
          sx={{
            py: 1,
            px: 3,
            border: `3px solid ${theme.palette.primary.main}`,
            borderRadius: 100,
            color: "white",
          }}
          onClick={() => setLang("en")}
        >
          <Typography variant="h4">English</Typography>
        </Button>
      </Box>
      <img
        src="/logo_banco_republica.png"
        alt="logo moz"
        style={{ width: 163, height: "auto" }}
      />
    </Stack>
  );
}
