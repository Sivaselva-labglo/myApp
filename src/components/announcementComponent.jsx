import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Badge } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';

export default function Announcement() {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo('/announcements')
    }
    return(
        <List>
        <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <CampaignIcon />
          </ListItemIcon>
          <ListItemText primary='Announcement' />
          <Badge badgeContent='5' color="error" />
        </ListItemButton>
      </ListItem>
      </List>
    )
}