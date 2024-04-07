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

export interface Faq {
  question: string;
  answer?: string;
  children?: JSX.Element;
}

export default function FaqItem(props: Faq) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  function Answer() {
    if (props.children) {
      return props.children;
    }

    if (props.answer) {
      return <ListItemText primary={props.answer} />;
    }

    return null;
  }

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FilterVintageIcon />
        </ListItemIcon>
        <ListItemText primary={props.question} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <EmojiNatureIcon />
            </ListItemIcon>
            {/* Answer can either be passed in as a prop, or child JSX */}
            <Answer />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
