import React from 'react';
import { Box, Container } from '@mui/material';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <Box id={id} component="section" sx={{ py: { xs: 8, md: 7 } }}>
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
};
