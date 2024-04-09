import { Box, Container, Typography } from "@mui/material"

export default function SobreNos() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Pictures of staff em carousel
      Figure out design for text display
      */}
      <img
        src="https://www.chavivo.com.br/site/wp-content/uploads/2022/04/6e7e583e71fc74bb9245726d6fc24f0f.png"
        width="240px"
      />

      <Typography
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          fontSize: "1.25rem",
        }}
      >
        Bem-vindo à Chá Vivo, uma fábrica de kombucha sediada no coração do Rio
        de Janeiro!
      </Typography>

      <Typography>
        <br />
        <br />
        {
          "Nascida do amor pela saúde, bem-estar e sabores autênticos, a Chá Vivo é uma das pioneiras na produção de Kombuchá do Brasil. Fazemos sempre questão de nos mantermos fiéis ao método ancestral e tradicional de produção do nosso kombucha."
        }
        <br />
        <br />
        {
          "Aqui na Chá Vivo, acreditamos que cada gole de kombuchá deve ser uma jornada de prazer para o paladar e um impulso revigorante para o corpo. Por isso, dedicamos nossos esforços para criar os melhores sabores, utilizando ingredientes orgânicos, ervas frescas e frutas selecionadas cuidadosamente. Com zero adição de insumos artificiais ou ultraprocessados!"
        }
        <br />
        <br />
        {
          "Nossos processos de  fermentação são conduzidos com habilidade e cuidado, assegurando que cada garrafa de Chá Vivo esteja repleta de probióticos benéficos e nutrientes essenciais. Além disso, nosso compromisso com a sustentabilidade ambiental nos impulsiona a adotar práticas ecológicas nas etapas de nossa produção."
        }
        <br />
        <br />
        {
          "Aqui, somos mais do que uma fábrica de kombucha; somos uma família apaixonada por promover uma vida mais saudável e vibrante para todos. Valorizamos cada cliente e parceiro, e nosso objetivo é compartilhar os benefícios incríveis da kombucha com o mundo."
        }
        <br />
        <br />
        {"Kombuchá é Chá Vivo, Chá Vivo é saúde!"}
      </Typography>
    </Box>
  )
}
