import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Box, Divider, Drawer, List, ListItem, Toolbar, Typography, AppBar, Button, IconButton, Avatar, Menu, MenuItem, Badge
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout"
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import Groups2Icon from '@mui/icons-material/Groups2';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AddIcon from '@mui/icons-material/Add';
import { CalendarMonthRounded } from "@mui/icons-material";

import './loginPage.css'
import SearchBar from "./searchBar";
import Messages from "./components/messagesComponent";
import Feed from "./components/feedComponent";
import Groups from "./components/groupsComponent";
import Live from "./components/liveComponent";
import Courses from "./components/coursesComponent";
import Support from "./components/supportComponent";
import Events from "./components/eventsComponent";
import Announcement from "./components/announcementComponent";


export default function MainPage() {
  const path = useLocation();
  const navigate = useNavigate()

  const [anchorElUser, setAnchorElUser] = useState(null);

  const drawerWidth = 250;

  const OpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const CloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
                <AppBar position="fixed"
                  sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, height: '100px' }} >

                  <Toolbar sx={{ margin: '20px' }}>

                    <SearchBar />

                    <Badge badgeContent='' color="error">
                      <CircleNotificationsIcon fontSize='large' sx={{ marginLeft: '450px' }} />
                    </Badge>

                    <CalendarMonthRounded fontSize="large" sx={{ marginLeft: '20px' }} />

                    <IconButton onClick={OpenUserMenu} >
                      <Avatar alt="Sivaa" src="/" sx={{ marginLeft: '20px', width: 56, height: 56 }} />
                      <Typography sx={{ marginLeft: '20px', color: "white" }}> Sivaa </Typography>
                      <ExpandMoreIcon sx={{ marginLeft: '10px' }} />
                    </IconButton>

                    <Menu
                      sx={{ mt: '70px', }} id="menu-appbar" anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top', horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top', horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={CloseUserMenu}
                    >
                      <MenuItem>
                        <SettingsIcon />
                        <Typography textAlign="center" sx={{ marginLeft: '4px' }}> Profile Setting  </Typography>
                      </MenuItem>
                      <Divider />

                      <MenuItem>
                        <Groups2Icon />
                        <Typography textAlign="center" sx={{ marginLeft: '4px' }}> My Followings  </Typography>
                      </MenuItem>
                      <Divider />

                      <MenuItem>
                        <ImportContactsIcon />
                        <Typography textAlign="center" sx={{ marginLeft: '4px' }}> My Courses  </Typography>
                      </MenuItem>
                      <Divider />

                      <MenuItem>
                        <SubscriptionsIcon />
                        <Typography textAlign="center" sx={{ marginLeft: '4px' }}> My Subscription  </Typography>
                      </MenuItem>
                      <Divider />

                      <MenuItem>
                        <ScheduleIcon />
                        <Typography textAlign="center" sx={{ marginLeft: '4px' }}> Schedule Live Session </Typography>
                      </MenuItem>
                      <Divider />

                      <MenuItem>
                        <Button variant='contained' size="small" onClick={signOut} sx={{ marginLeft: '45px' }}>
                          <LogoutIcon /> Logout
                        </Button>
                      </MenuItem>

                    </Menu>

                  </Toolbar>
                </AppBar>

                <Drawer sx={{
                  width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', },
                }}
                  variant="permanent"
                  anchor="left"
                >
                  <Toolbar>
                    <Typography variant="h5"> ONE NET </Typography>
                  </Toolbar>

                  <List>
                    <ListItem>
                      <Button variant="contained" sx={{ backgroundColor: 'green', marginLeft: '35px' }}>
                        <AddIcon /> Create Post
                      </Button>
                    </ListItem>
                  </List>

                  <Messages />
                  <Feed />
                  <Groups />
                  <Live />
                  <Courses />
                  <Support />
                  <Events />
                  <Announcement />

                </Drawer>
              </Box>
            </div>
        }
      </Box>
    </>
  )
}