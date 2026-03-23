import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Critical assets that MUST load before revealing the page
    const criticalAssets = ['/Gradient.png', '/bungeo.png', '/light_backing.png'];
    let loadedCount = 0;

    const checkLoaded = () => {
      loadedCount++;
      if (loadedCount === criticalAssets.length) {
        // Add a slight delay for aesthetic "wow" factor
        setTimeout(() => setLoading(false), 1200);
      }
    };

    criticalAssets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkLoaded;
      img.onerror = checkLoaded; // Don't block forever if an image fails
    });
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            backgroundColor: '#f5ede8',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
          >
            <img
              src="/bungeo.png"
              alt="loading..."
              style={{ width: 120, height: 'auto', imageRendering: 'pixelated' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: "'Redaction35', Georgia, serif",
              fontSize: '0.9rem',
              color: '#8B6060',
              letterSpacing: '0.05em'
            }}
          >
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
