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
import useImagePreloader from '@hooks/useImagePreloader';
import LoadingScreen from '@components/LoadingScreen';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Preload global assets in the background
  useImagePreloader(['/Gradient.png', '/Cross.cur', '/fish-bone.svg']);
  
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
        <LoadingScreen />
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
