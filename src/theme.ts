import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#22c55e', // accent green
    },
    background: {
      default: '#020617', // page background
      paper: '#020617',   // cards blend with bg
    },
    text: {
      primary: '#e5e7eb',
      secondary: '#9ca3af',
    },
    divider: '#111827',
  },
  typography: {
    fontFamily: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", system-ui, sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: '"Space Grotesk", system-ui, sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.03em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid #111827',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});
