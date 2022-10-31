import {React, useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Button  from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout"
import { Box, AppBar, IconButton, Tooltip, Avatar,MenuItem, Menu, Typography, CssBaseline } from "@mui/material";

export default function AppBarPage() {
    const navigate = useNavigate()
    const { userspage } = useParams()

    const [user, setUser] = useState({});
    const [anchorElUser, setAnchorElUser] = useState(null);
    
    const drawerWidth = 250;

    const fetchApi = () => {
        axios.get('https://reqres.in/api/users?page=1&per_page=12')
          .then((success) => setUser(success.data))
          .catch((failed) => console.log(failed))
      }
      function signOut(e) {
        e.preventDefault()
        localStorage.clear("token")
        navigate('/')
      };
    
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
      useEffect(() => {
        fetchApi()
      }, [])
    return(
        <Box sx={{display:'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                
            {
                    (user.data)?.filter((el) => el.email === userspage).map((el, index) => {
                        return (
                          <div key={index}>
                            <IconButton onClick={handleOpenUserMenu} sx={{ marginLeft: 190, marginTop: 3, marginBottom: 3 }}>
                              <Tooltip title='view profile'>
                                <Avatar src={el.avatar}></Avatar>
                              </Tooltip>
                            </IconButton>
                            <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{el.first_name} {el.last_name} <br /> {el.email} <br />
                  <Button variant='text' size="small" onClick={signOut}> 
                  <LogoutIcon /> Logout
                  </Button> <br /> <br />
                </Typography>
              </MenuItem>
              </Menu>
              </div>
                    )})}
            </AppBar>
        </Box>
    )
}