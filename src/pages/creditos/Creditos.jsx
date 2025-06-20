import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Creditos() {
  return (
    <Stack
      alignItems={"center"}
      height={1}
      gap={2}
      p={4}
      sx={{ overflowY: "scroll" }}
    >
      <Typography variant="h2" color="primary">
        Creditos
      </Typography>

      <Stack alignItems={"center"}>
        <Typography variant="h3" color="primary">
          Guion e investigación Fundación Erigaie
        </Typography>
        <Typography variant="body" color="primary">
          Monika Therrien
        </Typography>
        <Typography variant="body" color="primary">
          Fernando Suescun
        </Typography>
        <Typography variant="body" color="primary">
          Laura Niño
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Typography variant="h3" color="primary">
          Curaduría Museo del Oro
        </Typography>
        <Typography variant="body" color="primary">
          Lina María Campos Quintero
        </Typography>
        <Typography variant="body" color="primary">
          María Alicia Uribe Villegas
        </Typography>
        <Typography variant="body" color="primary">
          Lucy Amalia Gómez
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Typography variant="h3" color="primary">
          Producción
        </Typography>
        <Typography variant="body" color="primary">
          Atractor S.A.S.
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Typography variant="h3" color="primary">
          Diseño de narrativas digitales
        </Typography>
        <Typography variant="body" color="primary">
          Elder Manuel Tobar Panchoaga
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Typography variant="h3" color="primary">
          Traducción al inglés
        </Typography>
        <Typography variant="body" color="primary">
          Michael Charles Sparrow
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Typography variant="h3" color="primary">
          Diseño museográfico Museo del Oro
        </Typography>
        <Typography variant="body" color="primary">
          Luz Ángela Fino Peña
        </Typography>
        <Typography variant="body" color="primary">
          Juliana Jaramillo Naranjo
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Typography variant="h3" color="primary">
          Asesoría de producción Museo del Oro
        </Typography>
        <Typography variant="body" color="primary">
          Margarita Valdivieso Beltrán
        </Typography>
      </Stack>

      <Stack alignItems={"center"}>
        <Typography variant="h3" color="primary">
          Diseño gráfico
        </Typography>
        <Typography variant="body" color="primary">
          Tangrama
        </Typography>
      </Stack>

      <Stack alignItems={"center"} width="40%" textAlign={"center"} gap={1}>
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
      </Stack>
    </Stack>
  );
}
