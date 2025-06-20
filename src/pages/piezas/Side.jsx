/* eslint-disable react/prop-types */
import { Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";

export default function Side({ title, body }) {
  // TEXTOS
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].piezas;
  const sideParagraph = t.sideParagraph.split("\n").map((line) => (
    <Typography variant="body1" paragraph key={line.slice(10)}>
      {line}
    </Typography>
  ));
  const bodyParagraph = body.split("\n").map((line) => (
    <Typography variant="body1" paragraph key={line.slice(10)}>
      {line}
    </Typography>
  ));

  return (
    <Stack height={1} mt={2} gap={4} overflow="scroll">
      <Box>
        <Typography variant="h2" color="primary">
          {t.sideTitle}
        </Typography>
        {sideParagraph}
      </Box>
      <Box>
        <Typography variant="h2" color="primary">
          {title}
        </Typography>
        {bodyParagraph}
      </Box>
    </Stack>
  );
}
