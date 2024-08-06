// src/App.js
import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './components/Sidebar';
import DashboardHeader from './components/DashboardHeader';
import DashboardContent from './components/DashboardContent';

function App1() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <DashboardHeader />
      <Sidebar />
        <DashboardContent />
      </Box>
    </Box>
  );
}

export default App1;
