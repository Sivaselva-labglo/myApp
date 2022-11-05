import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

export default function Support() {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo('/support')
    }
    return(
        <List>
        <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LiveHelpIcon />
          </ListItemIcon>
          <ListItemText primary='Support' />
        </ListItemButton>
      </ListItem>
      </List>
    )

}