import React from 'react';
import { Box, Typography } from '@mui/material';

const Education: React.FC = () => (
  <Box>
    <Typography variant="h5">
      Education
    </Typography>
    <Typography variant="body1" fontWeight="bold">
      Cornell University, College of Agriculture and Life Sciences, Ithaca, NY
    </Typography>
    <Typography variant="body1">
      Bachelor of Science in Biological Sciences (Concentration in Computational Biology); Minor in Applied Economics and Management in Finance, January 2012<br />
    </Typography>
    <Typography variant="body1" fontStyle="italic">
      Dean’s List: Fall 2009, Spring 2010
    </Typography>
  </Box>
);

export default Education;