import React from 'react';
import { Box, Typography } from '@mui/material';

const STYLES = {
  STACKCOL: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1
  },
};

const Skills: React.FC = () => (
  <Box sx={STYLES.STACKCOL}>
    <Box>
      <Typography variant="body1" fontWeight="bold">Languages & Core Tools:</Typography>
      <Typography variant="body1">
        HTML5, JavaScript, TypeScript, Node.js, CSS3, Sass, Python (3 &amp; 2.7), SQL, Git, Bash
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" fontWeight="bold">Design &amp; UX:</Typography>
      <Typography variant="body1">
        System Architecture, Entity Relations, UX Design, Workflows, Wireframes, Rapid Prototyping, Figma
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" fontWeight="bold">Backend Frameworks &amp; APIs:</Typography>
      <Typography variant="body1">
        FastAPI, Django, Express, Flask
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" fontWeight="bold">Frontend Technologies:</Typography>
      <Typography variant="body1">
        React, Angular, RxJS, React Query, Material-UI, Highcharts, Redux, Lodash, jQuery
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" fontWeight="bold">DevOps &amp; Build Tools:</Typography>
      <Typography variant="body1">
        Docker (Dockerfiles, Docker Compose), Kubernetes (YAML, Helm, Kustomize, Skaffold), Jenkins CI, GitLab CI, Bitbucket, Webpack, Vite, pnpm
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" fontWeight="bold">Databases &amp; Cloud Services:</Typography>
      <Typography variant="body1">
        Elasticsearch, PostgreSQL, MySQL, Redis, GCP (BigQuery, CloudSQL, Cloud Functions, Cloud Run, Cloud Storage), Azure, Oracle
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" fontWeight="bold">Monitoring &amp; Logging:</Typography>
      <Typography variant="body1">
        Grafana, Prometheus, Sentry, ELK Stack
      </Typography>
    </Box>
    <Box>
      <Typography variant="body1" fontWeight="bold">Collaboration:</Typography>
      <Typography variant="body1">
        JIRA, Confluence
      </Typography>
    </Box>
  </Box>
);

export default Skills;
