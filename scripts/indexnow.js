const fs = require('fs');
const path = require('path');

const KEY = 'e7b047a2bced4007ac9a7c86e83a297a';
const BASE_URL = 'https://sacredsanskriti.com';

const STATIC_PAGES = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/privacy',
  '/terms',
  '/mantras-chants',
  '/rituals',
  '/symbols',
  '/myth-vs-text',
  '/practices',
  '/hinduism-qa',
];

const CATEGORIES = [
  'mantras-chants',
  'rituals',
  'symbols',
  'myth-vs-text',
  'practices',
  'hinduism-qa',
];

function getSlugs(category) {
  const dir = path.join(process.cwd(), 'content', category);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace('.md', ''));
}

async function submit() {
  const urls = [
    ...STATIC_PAGES.map(p => `${BASE_URL}${p}`),
    ...CATEGORIES.flatMap(cat =>
      getSlugs(cat).map(slug => `${BASE_URL}/${cat}/${slug}`)
    ),
  ];

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const res = await fetch('https://api.indexnow.org/IndexNow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'sacredsanskriti.com',
      key: KEY,
      keyLocation: `${BASE_URL}/${KEY}.txt`,
      urlList: urls,
    }),
  });

  if (res.ok) {
    console.log(`Done — ${urls.length} URLs submitted (HTTP ${res.status})`);
    urls.forEach(u => console.log('  ', u));
  } else {
    const text = await res.text();
    console.error(`Failed (HTTP ${res.status}): ${text}`);
    process.exit(1);
  }
}

submit();
