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

export default function Duvidas() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Typography variant="h2" sx={{ my: 3 }}>
        Dúvidas
      </Typography>

      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {/* FAQ 1 */}
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <FilterVintageIcon />
          </ListItemIcon>
          <ListItemText primary="O que é o Kombuchá e como ele é produzido?" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <EmojiNatureIcon />
              </ListItemIcon>
              <ListItemText>
                {"Saiba mais sobre o que é kombuchá e nossa produção "}
                <Link color="inherit" to="/o-que-e-kombucha">
                  aqui!
                </Link>
              </ListItemText>
            </ListItemButton>
          </List>
        </Collapse>

        {/* FAQ 2 */}
      </List>
    </Box>
  );
}
