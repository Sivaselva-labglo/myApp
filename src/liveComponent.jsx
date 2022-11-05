import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import LiveTvIcon from '@mui/icons-material/LiveTv';
export default function Live() {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo('/live')
    }
    return(
        <List>
        <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <LiveTvIcon />
          </ListItemIcon>
          <ListItemText primary='Live' />
        </ListItemButton>
      </ListItem>
      </List>
    )
}