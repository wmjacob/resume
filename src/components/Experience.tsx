import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { BulletList, BulletListItem } from './BulletList';

const STYLES = {
  STACKCOL: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1
  },
};

const Experience: React.FC = () => {
  const theme = useTheme();
  const bold = theme.typography.fontWeightBold;
  return (
    <Box sx={STYLES.STACKCOL}>
      <Box sx={STYLES.STACKCOL}>
        <Box>
          <Typography color="primary" variant="h5" fontWeight={bold}>
            BrightEdge Technologies – Senior Software Engineer
          </Typography>
          <Typography fontStyle="italic" variant="subtitle1">
            Cleveland, OH (January 2019 – February 2025)
          </Typography>
        </Box>
        <Typography variant="body1">
          I was engineer number one in BrightEdge’s Cleveland Office, setting the tone for the culture, contributing significantly to the product and its infrastructure, and being the senior voice in the room as we grew from $20M to $120M in revenue.
        </Typography>
        <Box>
          <Typography variant="subtitle2" fontWeight={bold}>Leadership &amp; Strategy:</Typography>
          <BulletList>
            <BulletListItem>
              <Typography variant="body1">
                Led feature rollouts by architecting end-to-end solutions — from infrastructure planning and cost analysis to ERD design and workflow mapping — and translating business requirements into actionable development plans.
              </Typography>
            </BulletListItem>
            <BulletListItem>
              <Typography variant="body1">
                Cultivated team cohesion and camaraderie through clear communication, collaborative problem solving, and hands-on leadership, mentoring developers via one-on-one sessions, code reviews, and pair programming. During my time in engineering leadership, we shipped over 20 new features.
              </Typography>
            </BulletListItem>
          </BulletList>
        </Box>
        <Box>
          <Typography variant="subtitle2" fontWeight={bold}>Full-Stack Development &amp; DevOps:</Typography>
          <BulletList>
            <BulletListItem>
              <Typography variant="body1">
                Developed scalable APIs and services using modern backend frameworks; engineered responsive front-end interfaces while maintaining legacy systems when necessary.
              </Typography>
            </BulletListItem>
            <BulletListItem>
              <Typography variant="body1">
                Standardized local development with Docker Compose, reducing onboarding time by 80%; oversaw containerized deployments using Docker and Kubernetes with Helm, Kustomize, and Skaffold.
              </Typography>
            </BulletListItem>
          </BulletList>
        </Box>
        <Box>
          <Typography variant="subtitle2" fontWeight={bold}>Product Innovation &amp; Data Pipelines:</Typography>
          <BulletList>
            <BulletListItem>
              <Typography variant="body1">
                Designed and developed the Content Advisor product, integrating AI-driven content generation and feedback to enhance SEO strategies.
              </Typography>
            </BulletListItem>
            <BulletListItem>
              <Typography variant="body1">
                Built robust ETL pipelines for the SearchIQ product, automating data ingestion, and ensuring timely data availability.
              </Typography>
            </BulletListItem>
            <BulletListItem>
              <Typography variant="body1">
                Developed external integrations for major analytics and webmaster platforms, facilitating secure data access via OAuth, eliminating the need for CS guidance during onboarding.
              </Typography>
            </BulletListItem>
          </BulletList>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={1}>
        <Box>
          <Typography color="primary" variant="h5" fontWeight={bold}>
            Vertical Knowledge – Senior Software Engineer
          </Typography>
          <Typography variant="subtitle1" fontStyle="italic">
            Chagrin Falls, OH (October 2013 – December 2018)
          </Typography>
        </Box>
        <Typography variant="body1">
          At Vertical Knowledge, I grew with the company, starting as an intern and eventually becoming a senior software engineer as we transformed from a niche data provider to a leading developer of classified software solutions for elite department of defense customers.
        </Typography>
        <Box>
          <Typography variant="body1" fontWeight={bold}>Career Progression &amp; Impact:</Typography>
          <BulletList>
            <BulletListItem>
              <Typography variant="body1">
                Advanced from pioneering rapid prototyping as an intern to delivering large-scale, production-ready applications as a senior engineer.
              </Typography>
            </BulletListItem>
            <BulletListItem>
              <Typography variant="body1">
                Automated complex processes, such as retail data categorization and real-time social media tracking, significantly reducing manual workloads.
              </Typography>
            </BulletListItem>
          </BulletList>
        </Box>
        <Box>
        <Typography variant="body1" fontWeight={bold}>Project Development &amp; Agile Implementation:</Typography>
          <BulletList>
            <BulletListItem>
              <Typography variant="body1">
                Engineered management portals and tracking applications using modern web frameworks, improving operational efficiency and scalability.
              </Typography>
            </BulletListItem>
            <BulletListItem>
              <Typography variant="body1">
                Developed large-scale applications for government contracts, transitioning from experimental prototypes to structured, agile-driven production systems.
              </Typography>
            </BulletListItem>
            <BulletListItem>
              <Typography variant="body1">
                Implemented continuous integration pipelines and containerization strategies, modernizing workflows and ensuring robust system performance.
              </Typography>
            </BulletListItem>
          </BulletList>
        </Box>
      </Box>
      <Box sx={STYLES.STACKCOL}>
        <Box>
          <Typography color="primary" variant="h5" fontWeight={bold}>
            Candor Transportation and Logistics – Business Analyst
          </Typography>
          <Typography variant="subtitle1" fontStyle="italic">
            Cleveland, OH (May 2012 – September 2013)
          </Typography>
        </Box>
        <BulletList>
          <BulletListItem>
            <Typography variant="body1">
              Managed payroll operations and financial reporting, ensuring accuracy and timeliness.
            </Typography>
          </BulletListItem>
          <BulletListItem>
            <Typography variant="body1">
              Led weekly business meetings to drive operational efficiency and strategic decision-making.
            </Typography>
          </BulletListItem>
          <BulletListItem>
            <Typography variant="body1">
              Analyzed and optimized operational workflows, contributing to significant process improvements.
            </Typography>
          </BulletListItem>
        </BulletList>
      </Box>
    </Box>
  );
};

export default Experience;