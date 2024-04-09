import { Box, List, ListItem, Stack, Typography } from "@mui/material"

export default function InfoKbc() {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        width={"100%"}
        sx={{ mt: 10, mb: 10 }}
      >
        <img
          width={"20%"}
          src="https://www.chavivo.com.br/site/wp-content/uploads/2022/04/d855945ee727b83d174f140712c16373.png"
        />
        <img
          width={"20%"}
          src="https://www.chavivo.com.br/site/wp-content/uploads/2022/04/3f22fbef9004193cdfa15843efea1934.png"
        />
        <img
          width={"20%"}
          src="https://www.chavivo.com.br/site/wp-content/uploads/2022/04/574354cdd79e6ad37368a82ceef0444f.png"
        />
        <img
          width={"20%"}
          src="https://www.chavivo.com.br/site/wp-content/uploads/2022/04/e7ff5ea636b7501a673883eeb39c69c0.png"
        />
        <img
          width={"20%"}
          src="https://www.chavivo.com.br/site/wp-content/uploads/2022/04/bfff9535688797a60901318524993856.png"
        />
      </Stack>
      <Typography
        textAlign={"center"}
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          fontSize: "1.25rem",
        }}
      >
        {
          "Kombucha é uma bebida fermentada, à base de chá, excelente para a saúde. É adocicado, azedinho, refrescante e frisante."
        }
        <br />
        {"Kombucha é Chá Vivo. Chá Vivo é saúde."}
      </Typography>

      <Typography textAlign={"justify"}>
        <br />
        <br />
        {
          "Kombuchá é uma bebida fermentada milenar originada na China, mas que se tornou popular em todo o mundo por seus benefícios à saúde e seu sabor único. Essa bebida é feita a partir da fermentação de chá adoçado por uma colônia simbiótica de bactérias e leveduras, também conhecida como SCOBY (symbiotic culture of bacteria and yeasts)."
        }
        <br />
        <br />
        {
          "Os principais ingredientes da kombuchá são o chá (preto, verde ou de ervas) e o açúcar, que servem como alimento para as bactérias e leveduras durante o processo de fermentação. Esses microorganismos transformam o açúcar em álcool e ácido acético, resultando em uma bebida levemente efervescente, com sabor agridoce e refrescante."
        }
        <br />
        <br />
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
  )
}
