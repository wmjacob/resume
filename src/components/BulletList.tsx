import React from 'react';
import { List, ListItem } from '@mui/material';

export const BulletList: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <List sx={{ listStyleType: 'disc', padding: 0, marginLeft: 3 }}>
    {children}
  </List>
);

export const BulletListItem: React.FC<{children: React.ReactNode}> = ({ children }) => (
  <ListItem sx={{ display: 'list-item', padding: 0 }}>
    {children}
  </ListItem>
);
