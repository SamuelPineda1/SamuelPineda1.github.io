import React from 'react';
import { Box } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { RightNav } from "./components/RightNav";

const App: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Navbar />
      < RightNav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Box sx={{ py: { xs: 8, md: 5 } }}></Box>
    </Box>
  );
};

export default App;

