// src/components/StatsCard.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const StatsCard = ({ title, value, icon, change, color, children }) => {
    return (
    <Card sx={{ backgroundColor: '#3c3c3e', color: 'white', mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: 2 }}>{icon}</Box>
          <Box>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="h4">{value}</Typography>
            <Typography variant="body2" sx={{ color }}>
              {change}
            </Typography>
          </Box>
        </Box>
        {children && (
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            {children}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
