import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { Link as MuiLink } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import FaqItem from "./components/FaqItem";

export default function Duvidas() {
  return (
    <Box>
      <Typography variant="h2" sx={{ my: 3, fontFamily: "Playfair Display" }}>
        Dúvidas
      </Typography>

      <List sx={{ width: "100%", bgcolor: "transparent" }}>
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
          question="O Kombuchá contém álcool? Qual é o teor alcoólico?"
          answer="Aqui na Chá Vivo, não visamos produzir kombuchá como uma bebida alcóolica, e seu teor é inferior a 0,05%, não sendo considerado bebida alcoólica e sendo seguro para consumo."
        />

        {/*FAQ 4 */}
        <FaqItem question="Quais são os benefícios à saúde proporcionados pelo Kombuchá?">
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
        <FaqItem
          question="Posso consumir Chá Vivo todos os dias?"
          answer="O Chá Vivo pode ser consumido todos os dias.
          Em qualquer caso, a moderação é fundamental para todos os grupos de pessoas que desejam consumir kombuchá. É importante escolher um kombuchá de qualidade, como a Chá Vivo, proveniente de fontes confiáveis e que siga padrões seguros de produção."
        />

        {/* FAQ 6 */}
        <FaqItem
          question="Qual o momento ideal para consumir kombuchá?"
          answer="Indicamos o consumo de Chá Vivo substituindo refrigerante e bebidas açucaradas.
          O momento ideal pode variar de acordo com seu gosto e necessidade. Escute seu corpo!"
        />

        {/* FAQ 7 */}
        <FaqItem
          question="Qual é a quantidade recomendada?"
          answer="Recomendamos para iniciantes o consumo de um copo de Chá Vivo por dia e aumentar o volume de acordo com seu gosto e como seu corpo reagir às propriedades do Kombuchá."
        />

        {/* FAQ 8 */}
        <FaqItem
          question="Kombuchá pode ser consumido por crianças e gestantes?"
          answer="O Chá Vivo pode ser consumido por crianças e gestantes.
          É sempre recomendado que um profissional de saúde seja consultado para formular uma dieta balanceada para esses grupos."
        />

        {/* FAQ 9 */}
        <FaqItem
          question="A nossa marca utiliza embalagens sustentáveis para o Kombuchá?"
          answer="Buscamos sempre pela sustentabilidade. Nossas garrafas de vidro são esterilizadas e reutilizadas para menor impacto ambiental."
        />

        {/* FAQ 10 */}
        <FaqItem question="Onde posso encontrar Chá Vivo?">
          <ListItemText>
            {"Veja todos os lugares onde você pode encontrar a Chá Vivo "}
            <Link color="inherit" to="/onde-encontrar">
              aqui!
            </Link>
          </ListItemText>
        </FaqItem>

        {/* FAQ 11 */}
        <FaqItem
          question="O Kombuchá precisa ser refrigerado?"
          answer="Para o consumo ideal, nosso kombuchá precisa ser refrigerado."
        />

        {/* FAQ 12 */}
        <FaqItem
          question="O nosso Kombuchá é livre de aditivos e conservantes artificiais?"
          answer="Sim! O Chá Vivo é feito através de uma produção natural e não contém aditivos ou conservantes artificiais."
        />

        {/* FAQ  13 */}
        <FaqItem question="É possível fazer pedidos online ou por telefone para entrega em domicílio?">
          <ListItemText>
            {
              "Sim! A Chá Vivo possui um sistema de delivery. Faça seu pedido pelo nosso "
            }
            <MuiLink color="inherit" href="https://wa.me/5521984278801">
              WhatsApp!
            </MuiLink>
          </ListItemText>
        </FaqItem>

        {/* FAQ 14 */}
        <FaqItem
          question="O Kombuchá é adequado para veganos e vegetarianos?"
          answer="O Chá Vivo, com exceção do sabor Jun (mel), é adequado para veganos e vegetarianos."
        />

        {/* FAQ 15 */}
        <FaqItem
          question="O Kombuchá é adequado para veganos e vegetarianos?"
          answer="O Chá Vivo, com exceção do sabor Jun (mel), é adequado para veganos e vegetarianos."
        />

        {/* FAQ 16 */}
        <FaqItem
          question="O Chá Vivo é sem glúten?"
          answer="O Chá Vivo é totalmente isento de glúten."
        />

        {/* FAQ 17 */}
      </List>
    </Box>
  );
}
