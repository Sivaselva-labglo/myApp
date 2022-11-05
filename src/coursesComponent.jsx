import React from "react";
import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export default function Courses() {
    const navigateTo = useNavigate()

    const handleClick = () => {
        navigateTo('/courses')
    }
  return (
    <List>
      <ListItem>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <ImportContactsIcon />
          </ListItemIcon>
          <ListItemText primary='Courses' />
        </ListItemButton>
      </ListItem>
    </List>
  )
}