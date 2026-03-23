import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '@pages/Home';
import Manifesto from '@pages/Manifesto';
import Notebook from '@pages/Notebook';
import NotebookEntry from '@pages/NotebookEntry';
import CursorBurst from '@components/CursorBurst';
import ScrollToTop from '@components/ScrollToTop';
import { MantineProvider } from '@mantine/core';
import { theme } from '@styles/theme.ts';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/notebook" element={<Notebook />} />
        <Route path="/notebook/:id" element={<NotebookEntry />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        {}
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          backgroundImage: "url('/Gradient.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
        <ScrollToTop />
        <CursorBurst />
        <AnimatedRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
