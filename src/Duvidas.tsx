import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import FilterVintageIcon from "@mui/icons-material/FilterVintage";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { Link } from "react-router-dom";
import FaqItem from "./components/FaqItem";

export default function Duvidas() {
  return (
    <Box>
      <Typography variant="h2" sx={{ my: 3, fontFamily: "Playfair Display" }}>
        Dúvidas
      </Typography>

      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {/* FAQ 1 */}
        <FaqItem question="O que é o Kombuchá e como ele é produzido?">
          <ListItemText>
            {"Saiba mais sobre o que é kombuchá e nossa produção "}
            <Link color="inherit" to="/o-que-e-kombucha">
              aqui!
            </Link>
          </ListItemText>
        </FaqItem>

        {/* FAQ 2 */}
        <FaqItem
          question="Quais ingredientes são utilizados na fabricação do nosso Kombuchá?"
          answer="Nossos kombuchás são compostos de: água potável, infusão de Camellia Sinensis (chá verde e chá preto), cultura de kombuchá (SCOBY), suco de frutas e açúcar demerara orgânico."
        />

        {/* FAQ 3 */}
        <FaqItem
          question="O Kombuchá contém álcool? Qual é o teor alcoólico?
          "
          answer="Aqui na Chá Vivo, não visamos produzir kombuchá como uma bebida alcóolica, e seu teor é inferior a 0,05%, não sendo considerado bebida alcoólica e sendo seguro para consumo."
        />

        {/*FAQ 4 */}
        <FaqItem
          question="Quais são os benefícios à saúde proporcionados pelo Kombuchá?"
          answer="Para"
        >
          <ListItemText>
            {
              "Além de ser uma alternativa saudável aos refrigerantes e outras bebidas açucaradas, kombuchá oferece diversos benefícios para a saúde. "
            }
            <Link color="inherit" to="/o-que-e-kombucha">
              Saiba mais aqui!
            </Link>
          </ListItemText>
        </FaqItem>

        {/* FAQ 5 */}
      </List>
    </Box>
  );
}
