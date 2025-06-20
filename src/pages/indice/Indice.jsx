import { useContext } from "react";
import translations from "../../utils/translations";
import { LanguageContext } from "../../contexts/LanguageContext";
import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
import { CircleIcon } from "../../utils/icons";
import { Link } from "react-router";

export default function Indice() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].inicio;
  const renderIndice = t.indice.map((item) => (
    <List key={item}>
      <ListItem sx={{ display: "flex", gap: 2, alignItems: "baseline" }}>
        <CircleIcon fontSize="small" color="primary" />
        <Typography variant="h2">{item}</Typography>
      </ListItem>
    </List>
  ));
  return (
    <Stack
      height={1}
      sx={{ backgroundColor: "black", color: "white" }}
      alignItems="center"
      justifyContent={"space-between"}
      p={8}
      gap={2}
    >
      <Typography variant="h4" px={24} pb={4}>
        Vive esta experiencia arqueológica. Aquí encontraras historias sobre…
      </Typography>
      <Box>{renderIndice}</Box>
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
        style={{ width: 120, height: "auto" }}
      />
    </Stack>
  );
}
