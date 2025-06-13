import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';

export default function NavBar(props) {
    const {drawerWidth, content} = props
    const location = useLocation()
    const path = location.pathname
    const navigate = useNavigate()

    const [open, setOpen] = React.useState(false);
    const changeOpenStatus =() =>{
        setOpen(!open)
    }

    const handleLogout = () => {
      // Clear user data from localStorage or sessionStorage
      localStorage.removeItem('user'); // Assuming you're using localStorage for user data

      // Optionally, if using context or state to store the user session, clear it here as well.
      
      // Redirect to the login page and refresh the page
      navigate('/');  // Navigate to login page
      window.location.reload();  // Refresh the page after logging out
  };

    const myDrawer = (
        <div>
             <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/admin" selected={"/admin" === path}>
                  <ListItemIcon>
                        <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Home/Orders"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/inventory" selected={"/inventory" === path}>
                  <ListItemIcon>
                        <InventoryIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Inventory"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton component={Link} to="/create" selected={"/create" === path}>
                  <ListItemIcon>
                        <BorderColorIcon/>
                  </ListItemIcon>
                  <ListItemText primary={"Add Product"} />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                        <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Logout"} />
                        </ListItemButton>
                    </ListItem>
          </List>
        </Box>
        </div>
    )

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>

            <IconButton 
                color = "inherit"
                onClick={changeOpenStatus}
                sx = {{mr:2, display:{sm:"none"}}}>
                <MenuIcon/>
            </IconButton>

          <Typography variant="h6" noWrap component="div" sx={{paddingLeft:'30px'}}>
            Gani Works
          </Typography>
        </Toolbar>

      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          display: {xs:"none", sm:"block"},
          width: drawerWidth,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >'
        {myDrawer}
       
      </Drawer>

      <Drawer
        variant="temporary"
        open = {open}
        onClose = {changeOpenStatus}
        sx={{
          display: {xs:"block", sm:"none"},
          width: drawerWidth,
          flexShrink: 0,
          ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        {myDrawer}
       
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

         {content}

      </Box>
    </Box>
  );
}