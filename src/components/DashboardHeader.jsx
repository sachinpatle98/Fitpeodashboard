// src/components/DashboardHeader.js
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box ,ListItemIcon} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';

const DashboardHeader = () => {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ backgroundColor: '#1c1c1e' }}>
         <ListItemIcon>
            <DashboardIcon style={{ color: 'blue' }} />
          </ListItemIcon>
          <IconButton size="large" color="inherit">
            <SearchIcon />
          </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton size="large" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton size="large" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
