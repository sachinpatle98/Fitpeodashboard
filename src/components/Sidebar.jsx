// src/components/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 90,
        height: '100vh',
        backgroundColor: '#2c2c2e',
        color: 'white',
        position: 'fixed',
        marginTop:"60px",
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon style={{ color: 'blue' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon style={{ color: 'white' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContentPasteIcon style={{ color: 'white' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceWalletIcon style={{ color: 'white' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon style={{ color: 'white' }} />
          </ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
