import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Badge } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';

export default function Messages() {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo('/messages')
    }
  return (
    <div>
    <List>
      <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <MessageIcon />
          </ListItemIcon>
          <ListItemText primary='Messages' />
          <Badge badgeContent='6' color="error" />
        </ListItemButton>
      </ListItem>
    </List>
</div>
  )
}