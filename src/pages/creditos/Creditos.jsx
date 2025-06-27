import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";

export default function Creditos() {
  // TEXTOS
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].creditos;
  return (
    <Stack
      alignItems={"center"}
      height={1}
      gap={2}
      p={4}
      sx={{ overflowY: "scroll" }}
    >
      {t.parrafos.map((parrafo) => (
        <Typography
          variant="h5"
          color="primary"
          key={parrafo}
          width="60%"
          textAlign="center"
        >
          {parrafo}
        </Typography>
      ))}

      <img src="boletin.jpeg" alt="Boletín del Museo del Oro" width="30%" />

      <Typography variant="h2" color="primary">
        {t.titulo}
      </Typography>

      {t.secciones.map((section) => (
        <Stack
          alignItems={"center"}
          key={section.title}
          width="60%"
          gap={1}
          textAlign={"center"}
        >
          <Typography variant="h3" color="primary">
            {section.titulo}
          </Typography>
          {section.subtitulos.map((subtitulo) => (
            <Typography variant="body" color="primary" key={subtitulo}>
              {subtitulo}
            </Typography>
          ))}
        </Stack>
      ))}

      {/* <Stack alignItems={"center"} width="40%" textAlign={"center"} gap={1}>
        <Typography variant="h3" color="primary">
          Referencias
        </Typography>
        <Typography variant="body" color="primary">
          Biblioteca del Congreso de los Estados Unidos. Mapa Cartagena de
          Baptista Boazio, Walter Bigges, Lieutenant Croftes, 1586.
        </Typography>
        <Typography variant="body" color="primary">
          Archivo General de Indias [AGI]. MP-PANAMA, 20. Plano de Antonelli,
          Las cosas mas particulares de la ciudad de Cartagena. Redibujado por
          Atractor S.A.S., 2025.
        </Typography>
        <Typography variant="body" color="primary">
          Archivo General de Indias [AGI]. MP-PANAMA, 2. Modelo de cómo quedará
          el muelle de Cartagena después de hecho como agora el Señor Governador
          lo quiere hacer, 1571. Redibujado por Atractor S.A.S., 2025.
        </Typography>
      </Stack> */}
    </Stack>
  );
}
