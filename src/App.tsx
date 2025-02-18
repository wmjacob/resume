import {
  Container,
  Typography,
  Box,
  Divider
} from '@mui/material';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Activities from './components/Activities';
import Education from './components/Education';

const App = () => {
  const fullName = import.meta.env.VITE_FULL_NAME;
  const linkedIn = import.meta.env.VITE_LINKEDIN;
  const email = import.meta.env.VITE_EMAIL;
  return (
    <Box display="flex" justifyContent="center" width="100vw">
      <Container maxWidth="md">
        <Box display="flex" flexDirection="column" gap={1}>
          {/* Header */}
          <Box py={2} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" component="h1" fontWeight="bold">
            {fullName}
            </Typography>
            <Typography variant="body1">
              <a href={`mailto:${email}`}>{email}</a>
              {" • "}
              <a href={linkedIn} target="_blank">LinkedIn</a>
              {" • "} 
              <a href="https://github.com/wmjacob" target="_blank">Github</a>
            </Typography>
          </Box>

          {/* Summary */}
          <Summary /> 

          <Divider flexItem />

          {/* Skills Sections */}
          <Skills />
          
          <Divider flexItem />

          {/* Experience */}
          <Experience />
          
          <Divider flexItem />

          {/* Education */}
          <Education />
          
          <Divider flexItem />

          {/* Activities */}
          <Activities />
          
          <Divider flexItem />

          {/* Hobbies */}
          <Hobbies />
        </Box>
      </Container>
    </Box>
  );
};

export default App;
