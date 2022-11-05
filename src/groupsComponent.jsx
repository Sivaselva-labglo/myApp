import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Badge } from "@mui/material";
import GroupIcon from '@mui/icons-material/Group';

export default function Groups() {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo('/groups')
    }
    return(
        <List>
        <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary='Groups' />
        </ListItemButton>
      </ListItem>
      </List>
    )
}