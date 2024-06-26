import { Box, Typography } from "@mui/material";
import Carousel from "./components/Carousel";

const images = [
  "./people/avatar_6.jpg",
  "./people/avatar_1.jpg",
  "./people/avatar_2.jpg",
  "./people/avatar_4.jpg",
  "./people/avatar_7.jpg",
  "./people/avatar_5.jpg",
  "./people/avatar_3.jpg",
];

export default function SobreNos() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Carousel images={images} slidesToShow={2} />

      <Typography
        textAlign={"center"}
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          fontSize: "1.25rem",
          mb: 3,
        }}
      >
        {"Bem-vindo à Chá Vivo, uma fábrica de kombucha"}
        <br />
        {"sediada no coração do Rio de Janeiro!"}
      </Typography>
      <img
        src="https://www.chavivo.com.br/site/wp-content/uploads/2022/04/6e7e583e71fc74bb9245726d6fc24f0f.png"
        width="280px"
      />
      <Typography textAlign={"justify"}>
        <br />
        {
          "Nascida do amor pela saúde, bem-estar e sabores autênticos, a Chá Vivo é uma das pioneiras na produção de Kombuchá do Brasil. Fazemos sempre questão de nos mantermos fiéis ao método ancestral e tradicional de produção do nosso kombucha."
        }
        <br />
        <br />
        {
          "Aqui na Chá Vivo, acreditamos que cada gole de kombuchá deve ser uma jornada de prazer para o paladar e um impulso revigorante para o corpo. Por isso, dedicamos nossos esforços para criar os melhores sabores, utilizando ingredientes orgânicos, ervas frescas e frutas selecionadas cuidadosamente. Com zero adição de insumos artificiais ou ultraprocessados!"
        }
      </Typography>
      <img
        src="./FaqQIcon.svg"
        width="60vw"
        style={{ marginTop: 10, marginBottom: 5 }}
      />
      <Typography textAlign={"justify"}>
        {
          "Nossos processos de fermentação são conduzidos com habilidade e cuidado, assegurando que cada garrafa de Chá Vivo esteja repleta de probióticos benéficos e nutrientes essenciais. Além disso, nosso compromisso com a sustentabilidade ambiental nos impulsiona a adotar práticas ecológicas nas etapas de nossa produção."
        }
        <br />
        <br />
        {
          "Aqui, somos mais do que uma fábrica de kombucha; somos uma família apaixonada por promover uma vida mais saudável e vibrante para todos. Valorizamos cada cliente e parceiro, e nosso objetivo é compartilhar os benefícios incríveis da kombucha com o mundo."
        }
        <br />
        <br />
      </Typography>
      <Typography
        textAlign={"center"}
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          fontSize: "1.25rem",
          fontStyle: "italic",
          mt: 2,
          mb: 5,
        }}
      >
        Kombuchá é Chá Vivo, Chá Vivo é saúde!
      </Typography>
    </Box>
  );
}
