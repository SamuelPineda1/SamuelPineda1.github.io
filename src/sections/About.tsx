import React from 'react';
import { Typography, Box, Chip, Stack } from '@mui/material';
import { Section } from '../components/Section';

export const About: React.FC = () => {
  return (
    <Section id="about">
      <Typography variant="overline" sx={{ color: 'primary.main' }}>
        ABOUT
      </Typography>
      <Typography variant="h3" sx={{ mt: 1, mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
        A bit about me
      </Typography>

      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
        I&apos;m an international student at Mohawk College studying Computer Systems
        Technician – Software Support. I enjoy building web and mobile apps, experimenting
        with sports analytics, and automating workflows with tools like FastAPI, n8n, and
        Telegram bots. I care about clean code, performance, and making things that are
        actually useful.
      </Typography>

      <Box>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          Focus areas right now:
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          <Chip label="Full-stack apps" variant="outlined" />
          <Chip label="Cloud & automation" variant="outlined" />
          <Chip label="Data structures & algorithms" variant="outlined" />
          <Chip label="Sports analytics tools" variant="outlined" />
        </Stack>
      </Box>
    </Section>
  );
};
