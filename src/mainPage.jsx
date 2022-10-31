import { React } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './loginPage.css'

import {
  Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Toolbar, Typography, AppBar, Button
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox"
import OutboxIcon from '@mui/icons-material/Outbox';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from "@mui/icons-material/Logout"

export default function MainPage() {
  const path = useLocation();
  const navigate = useNavigate()

  const drawerWidth = 250;
  const navigateTo = useNavigate()

  const navInbox = () => {
    navigateTo(`/inbox`)
  }
  const navOutbox = () => {
    navigateTo(`/outbox`)
  }
  const navTrash = () => {
    navigateTo(`/trash`)
  }

  function signOut(e) {
    e.preventDefault()
    localStorage.clear("token")
    navigate('/')
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        {
          (path.pathname) === '/' ? <> </>
            : <div>
              <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, height: '100px' }}>
                  <Button variant='contained' size="small" onClick={signOut} sx={{ marginLeft: 170, marginTop: 3, marginBottom: 3, backgroundColor: "darkslategray", height: "35px", width: '90px' }}>
                    <LogoutIcon /> Logout
                  </Button> <br /> <br />
                </AppBar>

                <Drawer sx={{
                  width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                  },
                }}
                  variant="permanent"
                  anchor="left">
                  <Toolbar>
                    <Typography>Sidebar</Typography>
                  </Toolbar>
                  <Divider />
                  <List>
                    <ListItem>
                      <ListItemButton onClick={navInbox}>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText>Inbox</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <List>
                    <ListItem>
                      <ListItemButton onClick={navOutbox}>
                        <ListItemIcon>
                          <OutboxIcon />
                        </ListItemIcon>
                        <ListItemText>Outbox</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                  <List>
                    <ListItem>
                      <ListItemButton onClick={navTrash}>
                        <ListItemIcon>
                          <DeleteIcon />
                        </ListItemIcon>
                        <ListItemText>Trash</ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Drawer>
              </Box>
            </div>
        }
      </Box>
    </>
  )
}