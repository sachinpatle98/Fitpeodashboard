// src/components/CustomerFeedback.js
import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

const CustomerFeedback = () => {
  const feedbacks = [
    { name: 'Jenny Wilson', rating: 5, feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome.' },
    { name: 'Dianne Russell', rating: 4, feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.' },
    { name: 'Devon Lane', rating: 5, feedback: 'Normally wings are wings, but theirs are lean meaty and tender, and properly sauced. Top notch food.' },
  ];

  return (
    <Card sx={{ backgroundColor: '#3c3c3e', color: 'white', mb: 2 }}>
      <CardContent>
        <Typography variant="h6">Customer's Feedback</Typography>
        <List>
          {feedbacks.map((feedback, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>{feedback.name.charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={feedback.name}
                secondary={
                  <>
                    <Typography variant="body2" color="textSecondary">
                      {feedback.feedback}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {'⭐'.repeat(feedback.rating)}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CustomerFeedback;
