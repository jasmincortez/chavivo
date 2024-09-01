import {
  Avatar,
  AvatarProps,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import theme from "./theme";

const images = [
  "./people/avatar_6_compressed.jpg",
  "./people/avatar_1_compressed.jpg",
  "./people/avatar_2_compressed.jpg",
  "./people/avatar_4_compressed.jpg",
  "./people/avatar_7.jpg",
  "./people/avatar_5_compressed.jpg",
  "./people/avatar_3_compressed.jpg",
];

const slidePairs = [[0, 1], [2, 3], [4, 5], [6]];

interface CustomAvatarProps extends AvatarProps {
  size: number;
}

const CustomAvatar = (props: CustomAvatarProps) => {
  return (
    <Avatar
      sx={{
        height: props.size,
        width: props.size,
        margin: "0 auto",
        boxShadow: 2,
        filter: "grayScale(100%)",
        "&:hover": { filter: "none" },
        transition: "all 400ms ease-in-out",
      }}
      {...props}
    />
  );
};

export default function SobreNos() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const SLIDE_WIDTH = isDesktop ? 288 : 160;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box width="100%" height={SLIDE_WIDTH + 48}>
        <Carousel
          navButtonsAlwaysInvisible={!isDesktop}
          interval={3000}
          swipe={false}
        >
          {slidePairs.map((pair, i) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: isDesktop ? 6 : 0,
              }}
              key={i}
            >
              <CustomAvatar src={images[pair[0]]} size={SLIDE_WIDTH} />
              {pair.length > 1 && (
                <CustomAvatar src={images[pair[1]]} size={SLIDE_WIDTH} />
              )}
            </Box>
          ))}
        </Carousel>
      </Box>
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
