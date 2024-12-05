import { Box, List, ListItem, Stack, Typography } from "@mui/material";

export default function InfoKbc() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        textAlign={"center"}
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          fontSize: "1.20rem",
          fontStyle: "italic",
          mb: 3,
        }}
      >
        {
          "Kombucha é uma bebida fermentada, à base de chá, excelente para a saúde. É adocicado, azedinho, refrescante e frisante."
        }
        <br />
        {"Kombucha é Chá Vivo. Chá Vivo é saúde."}
      </Typography>
      {/* <img src="" width="280px" /> */}
      <Typography textAlign={"justify"}>
        <br />
        {
          "Kombuchá é uma bebida fermentada milenar originada na China, mas que se tornou popular em todo o mundo por seus benefícios à saúde e seu sabor único. Essa bebida é feita a partir da fermentação de chá adoçado por uma colônia simbiótica de bactérias e leveduras, também conhecida como SCOBY (symbiotic culture of bacteria and yeasts)."
        }
        <br />
        <br />
        {
          "Os principais ingredientes da kombuchá são o chá (preto, verde ou de ervas) e o açúcar, que servem como alimento para as bactérias e leveduras durante o processo de fermentação. Esses microorganismos transformam o açúcar em álcool e ácido acético, resultando em uma bebida levemente efervescente, com sabor agridoce e refrescante."
        }
      </Typography>
      <img
        src="./FaqQIcon.svg"
        width="60vw"
        style={{ marginTop: 10, marginBottom: 5 }}
      />
      <Typography textAlign={"justify"}>
        {
          "Além de ser uma alternativa saudável aos refrigerantes e outras bebidas açucaradas, kombuchá oferece diversos benefícios para a saúde:"
        }
        <br />
      </Typography>
      <List sx={{ listStyleType: "disc", pl: 2 }}>
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body1" textAlign={"justify"}>
            Probióticos: A fermentação produz probióticos benéficos para o
            sistema digestivo. Essas bactérias "do bem" auxiliam na saúde
            intestinal, melhoram a absorção de nutrientes e fortalecem o sistema
            imunológico.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body1" textAlign={"justify"}>
            Detoxificação: Kombuchá contém enzimas e ácidos orgânicos que ajudam
            na desintoxicação do corpo, contribuindo para eliminar toxinas e
            resíduos acumulados no organismo.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body1" textAlign={"justify"}>
            Fonte de antioxidantes: O chá utilizado na produção do kombuchá é
            rico em antioxidantes que combatem os radicais livres, protegendo as
            células contra danos e envelhecimento precoce.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body1" textAlign={"justify"}>
            Aumento da energia: Devido à presença de vitaminas do complexo B,
            kombuchá pode contribuir para aumentar os níveis de energia e
            melhorar o humor.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item" }}>
          <Typography variant="body1" textAlign={"justify"}>
            Equilíbrio do pH: A combinação de ácidos orgânicos presente no
            kombuchá pode ajudar a equilibrar o pH do corpo, contribuindo para
            uma melhor saúde geral."
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}
