import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(2, 6, 23, 0.9)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 }}
          >
            Samuel Pineda
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {sections.map((s) => (
              <Button
                key={s.id}
                color="inherit"
                size="small"
                onClick={() => handleScroll(s.id)}
              >
                {s.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="primary"
              size="small"
              href="/SamuelPineda_Resume.pdf" // ajusta esto
              target="_blank"
            >
              Resume
            </Button>
          </Box>

          {/* Simple mobile icon – you can add drawer later */}
          <IconButton
            sx={{ display: { xs: 'flex', md: 'none' } }}
            color="inherit"
            size="small"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
