import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox"
import OutboxIcon from '@mui/icons-material/Outbox';
import DeleteIcon from '@mui/icons-material/Delete';
import {React} from "react";
import { useNavigate } from "react-router-dom";

export default function SideBarPage() {
    const drawerWidth = 250;
    const navigate = useNavigate()
    const navInbox = () => {
        navigate(`/inbox`)
    }
    return(
        <Box sx={{display:'flex'}}>
            <Drawer sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left">
            <Toolbar>
                <Typography>Sidebar</Typography>
            </Toolbar>
            <Divider/>
            <List>
                <ListItem>
                    <ListItemButton onClick={navInbox}>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText>Inbox</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <OutboxIcon/>
                        </ListItemIcon>
                        <ListItemText>Outbox</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <DeleteIcon/>
                        </ListItemIcon>
                        <ListItemText>Trash</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
            </Drawer>
        </Box>
    )
}