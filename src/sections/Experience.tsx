import React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import { Section } from '../components/Section';

type ExperienceItem = {
  title: string;
  place: string;
  period: string;
  description: string;
};

const items: ExperienceItem[] = [
  {
    title: 'Computer Systems Technician – Software Support',
    place: 'Mohawk College',
    period: '2023 – Present',
    description:
      'Coursework in Java, data structures, cloud computing (Azure), .NET, databases, and mobile/web development. Dean’s Honour List.',
  },
  {
    title: 'Freelance / Personal Projects',
    place: 'Remote',
    period: 'Ongoing',
    description:
      'Built web, mobile, and automation projects including Sports Investor App, sports analytics tools, and FrenchieFans website.',
  },
  {
    title: 'Customer Service Team Member',
    place: 'Fortinos',
    period: '2024',
    description:
      'Worked in a fast-paced environment, helping customers and collaborating with a diverse team.',
  },
];

export const Experience: React.FC = () => {
  return (
    <Section id="experience">
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        EXPERIENCE
      </Typography>
      <Typography variant="h3" sx={{ mt: 1, mb: 4, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
        Where I&apos;ve been
      </Typography>

      <Stack spacing={3}>
        {items.map((item) => (
          <Box key={item.title}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
              {item.place} · {item.period}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Section>
  );
};
