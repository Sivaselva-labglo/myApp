import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';
export default function Feed() {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo('/feeds')
    }
    return(
        <List>
        <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <FeedIcon />
          </ListItemIcon>
          <ListItemText primary='Feed' />
        </ListItemButton>
      </ListItem>
      </List>
    )
}