// src/components/DashboardContent.js
import React from 'react';
import { Box, Grid,Typography } from '@mui/material';
import StatsCard from './StatsCard';
import BarChart from './BarChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CancelIcon from '@mui/icons-material/Cancel';
import { Flex, Progress } from "antd";


const DashboardContent = () => {
  return (
    <Box sx={{ ml: 10, mt: 8, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <StatsCard title="Total Orders" value="75" icon={<ShoppingCartIcon />} change="+3%" color="green" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <StatsCard title="Total Delivered" value="70" icon={<LocalShippingIcon />} change="-3%" color="red" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <StatsCard title="Total Cancelled" value="5" icon={<CancelIcon />} change="+3%" color="green" />
        </Grid>
        <Grid item xs={12} sm={3}>
        <StatsCard 
          title="Net Profit" 
          value="$6759.25" 
          icon={<ShoppingCartIcon />} 
          change="+3%" 
          color="green"
        >
          <Progress
            type="circle"
            size={45}
            trailColor="white"
            percent={75}
            format={(percent) => `${percent}%`}
          />
          <Typography style={{ fontSize: '8px', marginTop: '5px' }}>
            Values here have been rounded off.
          </Typography>
        </StatsCard>
        </Grid>
        <Grid item xs={12} sm={8}>
        <Typography variant="h6">Activity</Typography>
          <BarChart />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatsCard title="Goals" value="" icon={<ShoppingCartIcon />} change="" color="white" />
          <StatsCard title="Popular Dishes" value="" icon={<ShoppingCartIcon />} change="" color="white" />
          <StatsCard title="Menus" value="" icon={<ShoppingCartIcon />} change="" color="white" />
        </Grid>
        <Grid item xs={12} sm={8}>
          <RecentOrders />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CustomerFeedback />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
