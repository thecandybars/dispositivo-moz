/* eslint-disable react/prop-types */
import { Stack, Typography } from "@mui/material";

export default function Side({ title, body }) {
  const bodyParagraph = body.split("\n").map((line) => (
    <Typography variant="body1" paragraph key={line.slice(10)}>
      {line}
    </Typography>
  ));
  return (
    <Stack height={1} mt={2}>
      <Typography variant="h2" color="primary">
        {title}
      </Typography>
      {bodyParagraph}
    </Stack>
  );
}
