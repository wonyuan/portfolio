import PageTransition from '@components/PageTransition';
import { Link } from 'react-router-dom';

const lastUpdated = 'march 22, 2025';

const values = [
  {
    term: 'curiosity',
    body: "the world is endlessly interesting. i live this value when i slow down and ask why, when i read things outside my field, and when i let myself be genuinely surprised.",
  }
];

const principles = [
  {
    term: 'well, this is to come',
    body: 'i definitely have principles, but let me think on them first.',
  }
];

export default function Manifesto() {
  return (
    <PageTransition>
      <div style={styles.page}>

        <Link to="/" style={styles.backLink}>← take me back</Link>

        <div style={styles.divider} />

        <h2 style={styles.title}>cat's ever-changing manifesto</h2>
        <p style={styles.subtitle}>
          an ever-evolving document, that i in theory SHOULD be updating, to help me live the life that i want to live (blah). inspired by <a href="https://omarshehata.me/principles" style={{ color: '#9E7070' }}>omar's principles!</a>
        </p>
        <p style={styles.lastUpdated}>last updated {lastUpdated}</p>

        <h2 style={styles.sectionHeading}>values</h2>
        <ul style={styles.list}>
          {values.map(({ term, body }) => (
            <li key={term} style={styles.listItem}>
              <span style={styles.term}>{term}</span>
              {': '}
              {body}
            </li>
          ))}
        </ul>

        <h2 style={{ ...styles.sectionHeading, marginTop: '2.5rem' }}>principles</h2>
        <ul style={styles.list}>
          {principles.map(({ term, body }) => (
            <li key={term} style={styles.listItem}>
              <span style={styles.term}>{term}</span>
              {': '}
              {body}
            </li>
          ))}
        </ul>

        <div style={{ height: '4rem' }} />
      </div>
    </PageTransition>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    padding: 'clamp(2rem, 6vw, 5rem) clamp(1.5rem, 8vw, 6rem)',
    maxWidth: 720,
    margin: '0 auto',
    fontFamily: "'Redaction20', Georgia, serif",
    color: '#3D2828',
  },
  backLink: {
    fontFamily: "'Redaction20', Georgia, serif",
    fontSize: '0.78rem',
    color: '#9E7070',
    textDecoration: 'none',
    display: 'inline-block',
    marginBottom: '1rem',
    transition: 'color 0.15s ease',
  },
  divider: {
    borderTop: '1px solid #c9a89a',
    marginBottom: '2rem',
  },
  title: {
    fontFamily: "'Redaction50', Georgia, serif",
    fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
    fontWeight: 700,
    color: '#3D2828',
    margin: '0 0 0.75rem 0',
    lineHeight: 1.2,
  },
  subtitle: {
    fontFamily: "'Redaction20', Georgia, serif",
    fontSize: '0.88rem',
    color: '#5a3a3a',
    margin: '0 0 0.4rem 0',
    lineHeight: 1.6,
  },
  lastUpdated: {
    fontFamily: "'Redaction20', Georgia, serif",
    fontSize: '0.75rem',
    color: '#9E7070',
    margin: '0 0 2.5rem 0',
  },
  sectionHeading: {
    fontFamily: "'Redaction50', Georgia, serif",
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#3D2828',
    margin: '0 0 1rem 0',
  },
  list: {
    paddingLeft: '1.25rem',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.85rem',
  },
  listItem: {
    fontSize: '0.82rem',
    color: '#5a3a3a',
    lineHeight: 1.65,
  },
  term: {
    fontFamily: "'Redaction50', Georgia, serif",
    fontWeight: 700,
    color: '#3D2828',
  },
};
