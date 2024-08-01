import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

export default function Galeria() {
  // TODO: Add function to make img bigger on hover or click

  return (
    <Box>
      <Typography variant="h2" sx={{ fontFamily: "Playfair Display" }}>
        Galeria
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "./insta/drinks.jpg",
    title: "Drinks",
  },
  {
    img: "./insta/uta.jpg",
    title: "Uta",
  },
  {
    img: "./insta/angra.jpg",
    title: "Angra",
  },
  {
    img: "./insta/Lele.jpg",
    title: "Lele",
  },
  {
    img: "./insta/jaeflor.jpg",
    title: "Ja e Flor",
  },
  {
    img: "./insta/botls.jpg",
    title: "Bottles",
  },
  {
    img: "./insta/loveu.jpg",
    title: "Lov U",
  },
  {
    img: "./insta/skate.jpg",
    title: "Skate",
  },
  {
    img: "./insta/cortez.jpg",
    title: "Cortez",
  },
  {
    img: "./insta/crab.jpg",
    title: "Crab",
  },

  {
    img: "./insta/tasting.jpg",
    title: "Tasting",
  },

  {
    img: "./insta/mari.jpg",
    title: "Mari",
  },
];
