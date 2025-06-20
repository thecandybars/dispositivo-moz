import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import translations from "../../utils/translations";

export default function Side() {
  const { lang } = useContext(LanguageContext);
  const t = translations[lang].map;

  // PAGE 0
  const renderPage0 = (
    <>
      <Typography variant="h2" color="primary">
        {t.sideTitle}
      </Typography>

      {t.sideParagraph.split("\n").map((line) => (
        <Typography variant="body1" paragraph key={line.slice(10)}>
          {line}
        </Typography>
      ))}
    </>
  ); //
  // // PAGE 1
  // const renderBooks = t.sideBibliography.books.map((book) => (
  //   <Book book={book} key={book.title} />
  // ));
  // const renderPage1 = (
  //   <Slide direction="right" in={currentPage === 1} mountOnEnter unmountOnExit>
  //     <Stack gap={3}>
  //       {t.sideBibliography.title.split("\n").map((line) => (
  //         <Typography
  //           variant="h2"
  //           color="primary"
  //           key={line.slice(10)}
  //           sx={{ mb: 10, border: "1px solid red" }}
  //         >
  //           {line}
  //         </Typography>
  //       ))}
  //       {renderBooks}
  //     </Stack>
  //   </Slide>

  // const renderBibliographyButton = (
  //   <Button
  //     variant="contained"
  //     color="primary"
  //     onClick={() => setCurrentPage((prev) => 1 - prev)}
  //     sx={{
  //       borderRadius: 100,
  //       height: "60px",
  //       width: "60px",
  //       alignSelf: "flex-end",
  //     }}
  //   >
  //     {currentPage === 0 ? <BibliographyIcon /> : <CancelIcon />}
  //   </Button>
  // );
  return (
    <Stack justifyContent="space-between" mt={2}>
      {renderPage0}
      {/* <Stack> {currentPage === 0 ? renderPage0 : renderPage1}</Stack> */}
      {/* {renderBibliographyButton} */}
    </Stack>
  );
}
