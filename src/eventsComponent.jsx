import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import EventIcon from '@mui/icons-material/Event';

export default function Events() {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo('/events')
    }

    return(
        <List>
        <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <EventIcon />
          </ListItemIcon>
          <ListItemText primary='Events' />
        </ListItemButton>
      </ListItem>
      </List>
    )
}