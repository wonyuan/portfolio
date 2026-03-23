import PageTransition from '@components/PageTransition';
import { Link } from 'react-router-dom';

const notebookEntries = [
  { date: 'mar 22 2025', title: 'mahjong', type: 'poem', id: 'mahjong' }
];

export default function Notebook() {
  return (
    <PageTransition>
      <div style={styles.page}>
        <Link to="/" style={styles.backLink}>← take me back</Link>

        <div style={styles.divider} />

        <h1 style={styles.title}>notebook</h1>
        <p style={styles.subtitle}>writing experiments</p>

        <div style={styles.entriesList}>
          {notebookEntries.map((entry, index) => (
            <div key={index} style={styles.entryRow}>
              <div style={styles.dateCell}>{entry.date}</div>
              <div style={styles.dashCell}>–</div>
              <div style={styles.contentCell}>
                <Link to={`/notebook/${entry.id}`} style={styles.entryTitle}>{entry.title}</Link>
                <div style={styles.entryType}>{entry.type}</div>
              </div>
            </div>
          ))}
        </div>

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
    margin: '0',
    lineHeight: 1,
  },
  subtitle: {
    fontFamily: "'Redaction20', Georgia, serif",
    fontSize: '1rem',
    fontStyle: 'italic',
    color: '#5a3a3a',
    margin: '0.4rem 0 1.5rem 0',
  },
  headerDivider: {
    borderTop: '1.5px solid #aaa',
    marginBottom: '2.5rem',
  },
  entriesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.8rem',
  },
  entryRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
  },
  dateCell: {
    fontFamily: "'Redaction20', Georgia, serif",
    fontSize: '0.95rem',
    color: '#3D2828',
    whiteSpace: 'nowrap',
    marginTop: '0.1rem',
    minWidth: '7.5rem',
    marginRight: '-1rem'
  },
  dashCell: {
    fontFamily: "'Redaction20', Georgia, serif",
    fontSize: '0.95rem',
    color: '#3D2828',
    marginTop: '0.1rem',
    marginRight: '1rem',
    flexShrink: 0,
  },
  contentCell: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.1rem',
  },
  entryTitle: {
    fontFamily: "'Redaction20', Georgia, serif",
    fontSize: '1.05rem',
    color: '#9E7070',
    textDecoration: 'none',
    fontWeight: 500,
  },
  entryType: {
    fontFamily: "'Redaction10', Georgia, serif",
    fontSize: '0.8rem',
    color: '#777',
  },
};
