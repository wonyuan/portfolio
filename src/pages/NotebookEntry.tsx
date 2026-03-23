import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import PageTransition from '@components/PageTransition';
import { getEntry } from '../lib/notebook';

export default function NotebookEntry() {
  const { id } = useParams<{ id: string }>();
  const entry = id ? getEntry(id) : null;

  const displayedEntry = entry ?? {
    title: id?.replace(/-/g, ' ') ?? 'Untitled',
    date: '',
    type: '',
    body: 'Content coming soon...',
  };

  return (
    <PageTransition>
      <div style={styles.page}>
        <Link to="/notebook" style={styles.backLink}>← back to notebook</Link>
        <div style={styles.divider} />

        <h1 style={styles.title}>{displayedEntry.title}</h1>
        <p style={styles.subtitle}>yum yum yum</p>

        <div style={styles.contentSection}>
          <ReactMarkdown
            components={{
              p: ({ children }) => <p style={styles.paragraph}>{children}</p>,
              
            }}
          >
            {displayedEntry.body}
          </ReactMarkdown>
        </div>

        <div style={{ height: '6rem' }} />
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
    fontSize: '2.4rem',
    fontWeight: 700,
    margin: '0',
    lineHeight: 1.1,
  },
  subtitle: {
    fontFamily: "'Redaction20', Georgia, serif",
    fontSize: '1rem',
    fontStyle: 'italic',
    color: '#9E7070',
    margin: '0.4rem 0 2rem 0',
  },
  contentSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  paragraph: {
    fontSize: '1.05rem',
    lineHeight: 1.75,
    margin: '0 0 1.4rem 0',
    fontFamily: "'Redaction20', Georgia, serif",
  },
};
