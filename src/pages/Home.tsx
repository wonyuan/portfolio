import { Stack, Image, Box, Text, Flex, Tooltip } from '@mantine/core';
import PortfolioSection from '@components/PortfolioSection';
import React, { useState } from 'react';
import SongPill from '@components/SongPill';
import ScrollHint from '@components/ScrollHint';
import PageTransition from '@components/PageTransition';
import { Link } from 'react-router-dom';
import useImagePreloader from '@hooks/useImagePreloader';

const ProfileCard = () => (
  <div style={{ background: 'rgba(105, 96, 96, 0.9)', borderRadius: 8, padding: '10px 12px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'left', gap: 8, minWidth: 130, pointerEvents: 'none', fontFamily: 'inherit', }}>
    <img
      src="/mememe.jpg"
      alt="catherine"
      loading="lazy"
      decoding="async"
      style={{ width: 200, height: 200, borderRadius: 6, objectFit: 'cover' }}
    />
    <div style={{ textAlign: 'left', lineHeight: 1.5 }}>
      <div style={{ fontSize: 12, color: '#fff', fontWeight: 700, marginBottom: 2 }}>catherine, 가원, 嘉媛</div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.9)' }}>📍 Toronto, ON</div>
    </div>
  </div>
);

const HoverImage = ({ src, top, left, width, baseZ, label, link, customTooltip }: {
  src: string; top: string; left: string; width: string;
  baseZ: number; label?: string; link?: string;
  customTooltip?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'absolute', top, left, width, zIndex: baseZ,
        transition: 'transform 0.3s ease',
        cursor: link ? 'pointer' : 'default',
        userSelect: 'none',
        WebkitUserDrag: 'none',
        '&:hover': { transform: 'scale(1.1)', zIndex: baseZ + 1 },
        '@media (max-width: 480px)': { display: 'none' },
      }}
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {customTooltip && hovered && (
        <div style={{
          position: 'absolute',
          bottom: '110%',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 999,
          pointerEvents: 'none',
          animation: 'fadeInUp 0.15s ease',
        }}>
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateX(-50%) translateY(6px); }
              to   { opacity: 1; transform: translateX(-50%) translateY(0); }
            }
          `}</style>
          {customTooltip}
        </div>
      )}

      {customTooltip ? (
        <Image src={src} alt="" draggable={false} imageProps={{ loading: 'lazy', decoding: 'async' }} onDragStart={e => e.preventDefault()} style={{ width: '100%' }} />
      ) : label ? (
        <Tooltip label={label} color="rgba(105, 96, 96, 0.9)" style={{ fontWeight: '700' }}>
          <Image src={src} alt="" draggable={false} imageProps={{ loading: 'lazy', decoding: 'async' }} onDragStart={e => e.preventDefault()} style={{ width: '100%' }} />
        </Tooltip>
      ) : (
        <Image src={src} alt="" draggable={false} imageProps={{ loading: 'lazy', decoding: 'async' }} onDragStart={e => e.preventDefault()} style={{ width: '100%' }} />
      )}
    </Box>
  );
};

const Home = () => {
  const [clicked, setClicked] = useState(false);

  useImagePreloader(['/light_backing.png', '/frog.png', '/bungeo.png', '/doggy.png', '/star.png', '/sticker.png', '/tomato.png', '/mememe.jpg', '/shopify.png', '/borealis.png', '/coveducation.png', '/eunasol.png', '/directu.png', '/talktome.png', '/linkedout.png', '/reverie.png', '/somi2.png', '/brewcareer.png',]);

  return (
    <PageTransition>
      <ScrollHint />
      <Flex
        sx={{
          minHeight: '100vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '5rem',
          paddingBottom: 'clamp(3.5rem, 11vw, 7rem)',
          paddingLeft: 'clamp(1rem, 4vw, 2rem)',
          paddingRight: 'clamp(1rem, 4vw, 2rem)',
          boxSizing: 'border-box'
        }}
      >
        <SongPill />
        { }
        <Box
          sx={{
            position: 'relative',
            width: '90vw',
            maxWidth: '500px',
            aspectRatio: '1 / 1',
            marginTop: '35px',
            '@media (max-width: 600px)': { marginTop: '60px', width: '95vw' },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              backgroundImage: `url('/light_backing.png')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              zIndex: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Stack
              sx={{
                width: '95%',
                height: '100%',
                overflow: 'auto',
                padding: 'clamp(1.5rem, 4vw, 8rem)',
                marginLeft: 'clamp(0rem, 3vw, 3rem)',
                marginRight: '1rem',
                boxSizing: 'border-box',
                justifyContent: 'center',
                marginBottom: '2vw',
                '@media (max-width: 600px)': {
                  padding: '3.5rem',
                  marginLeft: '0',
                  gap: '0.75rem',
                },
                '@media (max-width: 400px)': {
                  padding: '3rem',
                },
              }}
            >
              <Text
                size="xxxl"
                fw="700"
                style={{ fontFamily: "'Redaction50', Georgia, serif", marginBottom: '-15px', fontSize: '1.75rem' }}
                sx={{ wordBreak: 'break-word', '@media (max-width: 600px)': { fontSize: '1.25rem' } }}
              >
                hey, i'm catherine!
              </Text>

              <Text
                size="xl"
                fw={400}
                style={{ fontFamily: "'Redaction20', Georgia, serif" }}
                sx={{ '@media (max-width: 600px)': { fontSize: '0.85rem' } }}
              >
                i’m a developer/student in engineering. currently interested in open source development! curr, i lead the design team at deltahacks,
                <br />
                <Box
                  component="span"
                  sx={{ fontSize: '1.25rem', fontWeight: 400, '@media (max-width: 600px)': { fontSize: '0.85rem' } }}
                >
                  and i'm also a lover of&nbsp;
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    <Box
                      component="span"
                      onMouseEnter={() => setClicked(true)}
                      onMouseLeave={() => setClicked(false)}
                      sx={{
                        display: 'inline',
                        color: '#784141',
                        cursor: 'default',
                        textDecoration: 'underline',
                        textDecorationColor: '#945555',
                        '&:hover': { color: '#945555' },
                      }}
                    >
                      {['m', 'a', 'n', 'y'].map((letter, i) => (
                        <span
                          key={i}
                          style={{
                            display: 'inline-block',
                            animation: 'letterWave 1.4s ease-in-out infinite',
                            animationDelay: `${i * 0.12}s`,
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                    </Box>
                    {clicked && (
                      <span style={{
                        position: 'absolute',
                        bottom: '130%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 999,
                        pointerEvents: 'none',
                        animation: 'fadeInUp 0.15s ease',
                        whiteSpace: 'nowrap',
                      }}>
                        <span style={{
                          display: 'block',
                          background: 'rgba(105, 96, 96, 0.92)',
                          borderRadius: 8,
                          padding: '8px 12px',
                          boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                          fontFamily: "'Redaction35', Georgia, serif",
                          fontSize: '1rem',
                          color: '#fff',
                          lineHeight: 1.7,
                        }}>
                          LORDE!!! pokopia ₍^. .^₎Ⳋ, and <br />
                          thermal equilibrium maxing <br />
                          <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>(foot heater on, window open)</span>
                        </span>
                      </span>
                    )}
                  </span>
                  &nbsp;things.
                </Box>
              </Text>
            </Stack>
          </Box>

          { }
          <HoverImage src="/frog.png" top="-12%" left="16.5%" width="22%" baseZ={2} label="let's connect!" link="https://linkedin.com/in/yangc137" />
          <HoverImage src="/bungeo.png" top="-5%" left="28.5%" width="24%" baseZ={10} />
          <HoverImage src="/doggy.png" top="74%" left="-6%" width="38%" baseZ={6} label="on my mind..." link="https://boxd.it/faaa7" />
          <HoverImage src="/star.png" top="-7%" left="78%" width="25%" baseZ={10} label="reach out!" link="mailto:52cathyang@gmail.com" />
          <HoverImage src="/sticker.png" top="72%" left="-4%" width="21%" baseZ={10} customTooltip={<ProfileCard />} />
          <HoverImage src="/tomato.png" top="81%" left="74%" width="30%" baseZ={10} label="more of my work..." link="https://github.com/wonyuan" />
        </Box>
        <Box sx={{ marginTop: '8rem', width: '100%', maxWidth: 900 }}>
          <PortfolioSection />
        </Box>
        <Box sx={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          marginTop: '4rem',
          marginBottom: '-1rem',
          '@media (max-width: 600px)': {
            alignItems: 'center',
            marginTop: '2rem',
          },
        }}>
          { }
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.6rem' }}>
            {[
              { label: 'manifesto', href: '/manifesto' },
              { label: 'notebook', href: '/notebook' },
            ].map(({ label, href }) => (
              <Link
                key={label}
                to={href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  textDecoration: 'none',
                  color: '#9E7070',
                  fontFamily: "'Redaction20', Georgia, serif",
                  fontSize: '0.85rem',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#784141')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9E7070')}
              >
                { }
                <svg width="7" height="10" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: 'pixelated', flexShrink: 0 }}>
                  { }
                  <rect x="0" y="0" width="2" height="2" fill="#C4A090" />
                  <rect x="2" y="2" width="2" height="2" fill="#C4A090" />
                  <rect x="4" y="4" width="2" height="2" fill="#C4A090" />
                  <rect x="6" y="6" width="2" height="2" fill="#C4A090" />
                  <rect x="4" y="8" width="2" height="2" fill="#C4A090" />
                  <rect x="2" y="10" width="2" height="2" fill="#C4A090" />
                  <rect x="0" y="12" width="2" height="2" fill="#C4A090" />
                  { }
                  <rect x="2" y="0" width="2" height="2" fill="#9E7070" />
                  <rect x="4" y="2" width="2" height="2" fill="#9E7070" />
                  <rect x="6" y="4" width="2" height="2" fill="#9E7070" />
                  <rect x="8" y="6" width="2" height="2" fill="#9E7070" />
                  <rect x="6" y="8" width="2" height="2" fill="#9E7070" />
                  <rect x="4" y="10" width="2" height="2" fill="#9E7070" />
                  <rect x="2" y="12" width="2" height="2" fill="#9E7070" />
                </svg>
                {label}
              </Link>
            ))}
          </div>
        </Box>
      </Flex>
    </PageTransition>
  );
};

export default Home;
