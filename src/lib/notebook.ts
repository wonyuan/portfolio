interface NotebookEntryData {
  title: string;
  date: string;
  type: string;
  body: string;
}

const modules = import.meta.glob('../content/notebook/*.md', {
  eager: true,
  as: 'raw',
});

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      meta[key.trim()] = rest.join(':').trim().replace(/^"|"$/g, '');
    }
  }
  return { meta, body: match[2].trim() };
}

const entries: Record<string, NotebookEntryData> = {};

for (const [path, raw] of Object.entries(modules)) {
  const slug = path.replace(/^.*\//, '').replace(/\.md$/, '');
  const { meta, body } = parseFrontmatter(raw as string);
  entries[slug] = {
    title: meta.title ?? slug,
    date: meta.date ?? '',
    type: meta.type ?? '',
    body,
  };
}

export function getEntry(slug: string): NotebookEntryData | null {
  return entries[slug] ?? null;
}
