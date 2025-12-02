import React from 'react';
import { Typography, Box, Button, Stack, Link as MuiLink } from '@mui/material';
import { Section } from '../components/Section';

export const Contact: React.FC = () => {
  return (
        <Section id="contact">
            <Box sx={{ pb: 20 }}>
                <Typography variant="overline" sx={{ color: 'primary.main' }}>
                    CONTACT
                </Typography>
                <Typography variant="h3" sx={{ mt: 1, mb: 2, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                    Let&apos;s build something
                </Typography>

                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, maxWidth: 520 }}>
                    I&apos;m open to internships, part-time roles, and interesting side projects.
                    If you have an opportunity or an idea you&apos;d like to discuss, feel free
                    to reach out.
                </Typography>

                <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
                    <Button
                    variant="contained"
                    size="large"
                    href="mailto:samuelepinedab2206@gmail.com"
                    >
                    Email me
                    </Button>
                    <MuiLink
                    href="https://github.com/SamuelPineda1"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    >
                    GitHub
                    </MuiLink>
                    <MuiLink
                    href="https://www.linkedin.com/in/samuel-pineda-7a1241265"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    >
                    LinkedIn
                    </MuiLink>
                </Stack>
            </Box>
        </Section>
  );
};
