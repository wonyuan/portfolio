import { useState, useEffect } from 'react';

const CSS = `
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(6px); }
}
@keyframes fadeOut {
  to { opacity: 0; pointer-events: none; }
}
`;

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) setVisible(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{CSS}</style>
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        animation: 'bob 1.4s ease-in-out infinite',
        pointerEvents: 'none',
        userSelect: 'none',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}>
        {}
        <span style={{
          fontFamily: "'Redaction20', Georgia, serif",
          fontSize: '0.7rem',
          color: '#9E7070',
          letterSpacing: '0.08em',
          textTransform: 'lowercase',
        }}>
          scroll
        </span>

        {}
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ imageRendering: 'pixelated' }}
        >
          {}
          <rect x="0" y="0" width="2" height="2" fill="#C4A090" />
          <rect x="2" y="2" width="2" height="2" fill="#C4A090" />
          <rect x="4" y="4" width="2" height="2" fill="#C4A090" />
          <rect x="6" y="6" width="2" height="2" fill="#C4A090" />
          <rect x="8" y="4" width="2" height="2" fill="#C4A090" />
          <rect x="10" y="2" width="2" height="2" fill="#C4A090" />
          <rect x="12" y="0" width="2" height="2" fill="#C4A090" />

          {}
          <rect x="0" y="2" width="2" height="2" fill="#9E7070" />
          <rect x="2" y="4" width="2" height="2" fill="#9E7070" />
          <rect x="4" y="6" width="2" height="2" fill="#9E7070" />
          <rect x="6" y="8" width="2" height="2" fill="#9E7070" />
          <rect x="8" y="6" width="2" height="2" fill="#9E7070" />
          <rect x="10" y="4" width="2" height="2" fill="#9E7070" />
          <rect x="12" y="2" width="2" height="2" fill="#9E7070" />
        </svg>
      </div>
    </>
  );
}
