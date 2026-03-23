import { useState, useRef, CSSProperties } from 'react';
import { Box } from '@mantine/core';

const FADE_IN_CSS = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
`;

const workExperiences = [
  {
    company: 'Shopify',
    role: 'software engineer intern',
    duration: 'incoming',
    description: 'tbd!',
    image: 'shopify.png',
  },
  {
    company: 'RBC Borealis',
    role: 'software developer intern',
    duration: 'may 2025 – apr 2025',
    description: 'enabling ai services & ml lifecycles through aws + azure',
    image: 'borealis.png',
  },
  {
    company: 'CovEducation',
    role: 'software developer',
    duration: 'oct 2024 – feb 2025',
    description: 'platform to connect student mentees with the right mentors',
    image: 'coveducation.png',
  },
  {
    company: 'Euna Solutions',
    role: 'software developer intern',
    duration: 'may 2024 – aug 2024',
    description: 'built vendor onboarding workflows for public sector procurement',
    image: 'eunasol.png',
  },
];

const projects = [
  {
    name: 'DirectU',
    role: 'react, python, cohere, mongodb',
    description: 'won 1st for cohere at htn23; your degree w/out the hassle',
    link: 'https://github.com/wonyuan',
    image: 'directu.png',
  },
  {
    name: 'talktome',
    role: 'next.js, python, cohere',
    description: 'won 3rd overall at elle25; healing parent-child relations',
    link: 'https://github.com/wonyuan',
    image: 'talktome.png',
  },
  {
    name: 'linkedout',
    role: 'react, python, mongodb',
    description: 'an any man\'s stepping stone for easier networking',
    link: 'https://github.com/wonyuan',
    image: 'linkedout.png',
  },
  {
    name: 'Reverie',
    role: 'react',
    description: 'a workspace to streamline your study needs',
    link: 'https://github.com/wonyuan',
    image: 'reverie.png',
  },
  {
    name: 'Somi',
    role: 'figma, adobe xd',
    description: 'for figbuild26, helping people stay clean by detecting cravings before they peak.',
    link: 'https://github.com/wonyuan',
    image: 'somi2.png'
  },
  {
    name: 'BrewCareer',
    role: 'figma',
    description: 'won 2nd for ctrl+y designathon, making networking a little less intimidating',
    link: 'https://github.com/wonyuan',
    image: 'brewcareer.png'
  }
];


interface HoverState {
  image: string;
  top: number;
}


function WorkRow({ company, role, duration, description, image, sectionRef, onHover }: {
  company: string; role: string; duration: string;
  description: string; image: string;
  sectionRef: React.RefObject<HTMLDivElement>;
  onHover: (state: HoverState | null) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [bg, setBg] = useState('transparent');

  const handleEnter = () => {
    setBg('rgba(0,0,0,0.04)');
    if (rowRef.current && sectionRef.current) {
      const rowRect = rowRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      onHover({ image, top: rowRect.top - sectionRect.top + rowRect.height / 2 });
    }
  };

  return (
    <div
      ref={rowRef}
      style={{ ...styles.row, background: bg }}
      onMouseEnter={handleEnter}
      onMouseLeave={() => { setBg('transparent'); onHover(null); }}
    >
      <div style={styles.rowTop}>
        <span style={styles.rowLeft}>
          <span style={styles.companyName}>{company}</span>
          <span style={styles.roleText}>&nbsp;&nbsp;{role}</span>
        </span>
        <span style={styles.duration}>{duration}</span>
      </div>
      <div style={styles.rowDesc}>{description}</div>
    </div>
  );
}

function ProjectRow({ name, role, description, link, image, sectionRef, onHover }: {
  name: string; role: string; description: string;
  link: string; image: string;
  sectionRef: React.RefObject<HTMLDivElement>;
  onHover: (state: HoverState | null) => void;
}) {
  const rowRef = useRef<HTMLAnchorElement>(null);
  const [bg, setBg] = useState('transparent');

  const handleEnter = () => {
    setBg('rgba(0,0,0,0.04)');
    if (rowRef.current && sectionRef.current) {
      const rowRect = rowRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();
      onHover({ image, top: rowRect.top - sectionRect.top + rowRect.height / 2 });
    }
  };

  return (
    <a
      ref={rowRef}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...styles.row, textDecoration: 'none', color: 'inherit', background: bg }}
      onMouseEnter={handleEnter}
      onMouseLeave={() => { setBg('transparent'); onHover(null); }}
    >
      <div style={styles.rowTop}>
        <span style={styles.rowLeft}>
          <span style={styles.companyName}>{name}</span>
          <span style={styles.roleText}>&nbsp;&nbsp;{role}</span>
        </span>
      </div>
      <div style={styles.rowDesc}>{description}</div>
    </a>
  );
}

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<HoverState | null>(null);

  return (
    <Box ref={sectionRef} sx={styles.section as any}>
      <style>{FADE_IN_CSS}</style>

      <div style={styles.heading}>work</div>
      <div style={styles.list}>
        {workExperiences.map((exp, i) => (
          <WorkRow key={i} {...exp} sectionRef={sectionRef} onHover={setHovered} />
        ))}
      </div>
      <div style={{ ...styles.heading, marginTop: '2.5rem' }}>projects</div>
      <div style={styles.list}>
        {projects.map((proj, i) => (
          <ProjectRow key={i} {...proj} sectionRef={sectionRef} onHover={setHovered} />
        ))}
      </div>
      <Box
        sx={{
          ...(styles.sideImg as any),
          top: hovered ? hovered.top : 0,
          opacity: hovered ? 1 : 0,
          willChange: 'transform, opacity, top',
          '@media (max-width: 1024px)': {
            display: 'none',
          },
        }}
      >
        <img
          key={hovered?.image}
          src={hovered?.image ?? ''}
          style={{ width: '100%', display: 'block', borderRadius: 10 }}
        />
      </Box>

    </Box>
  );
}


const styles: Record<string, CSSProperties> = {
  section: {
    position: 'relative',
    width: '100%',
    maxWidth: 600,
    margin: '0 auto',
    fontFamily: "'Redaction20', Georgia, serif",
    color: '#3D2828',
  },
  sideImg: {
    position: 'absolute',
    left: 'calc(100% + 2rem)',
    width: 360,
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    pointerEvents: 'none',
    animation: 'fadeIn 0.15s ease',
    zIndex: 10,
    transform: 'translateY(-50%)',
    transition: 'top 0.2s ease',
  },
  heading: {
    fontFamily: "'Redaction50', Georgia, serif",
    fontSize: '1.6rem',
    fontWeight: 700,
    margin: '0 0 0.75rem 0',
    color: '#3D2828',
    paddingLeft: 10,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0,
  },
  row: {
    padding: '10px 10px',
    borderRadius: 6,
    cursor: 'default',
    transition: 'background 0.15s ease',
  },
  rowTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: 4,
  },
  rowLeft: {
    display: 'inline-flex',
    alignItems: 'baseline',
    flexWrap: 'wrap',
  },
  companyName: {
    fontWeight: 700,
    fontSize: '1rem',
    fontFamily: "'Redaction50', Georgia, serif",
  },
  roleText: {
    fontWeight: 400,
    fontSize: '0.9rem',
    color: '#8B6060',
  },
  duration: {
    fontSize: '0.85rem',
    color: '#9E7070',
    whiteSpace: 'nowrap',
  },
  rowDesc: {
    fontSize: '0.88rem',
    color: '#5a3a3a',
    marginTop: 3,
    lineHeight: 1.5,
  },
};
