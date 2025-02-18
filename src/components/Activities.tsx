import React from 'react';
import { Box, Typography } from '@mui/material';
import { BulletList, BulletListItem } from './BulletList';

const Activities: React.FC = () => (
  <Box>
    <Typography variant="h5">
      Activities
    </Typography>
    <BulletList>
      <BulletListItem>
        <Typography variant="body1">
          Men’s Fraternal Organization: Past President and Current Officer; organized and planned annual operations and events.
        </Typography>
      </BulletListItem>
      <BulletListItem>
        <Typography variant="body1">
          Cleveland Foodbank (Volunteer): Assisted with packing and loading donated food.
        </Typography>
      </BulletListItem>
      <BulletListItem>
        <Typography variant="body1">
          Cleveland Metroparks (Volunteer): Participated in trail cleanups and organized hikes.
        </Typography>
      </BulletListItem>
    </BulletList>
  </Box>
);

export default Activities;
