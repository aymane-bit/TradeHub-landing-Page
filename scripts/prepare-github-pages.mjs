import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';
import { fileURLToPath, URL } from 'node:url';

const repositoryName = 'TradeHub-landing-Page';
const pathPrefix = `/${repositoryName}`;
const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));

async function collectHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) return collectHtmlFiles(path);
      return extname(entry.name) === '.html' ? [path] : [];
    }),
  );
  return files.flat();
}

function prefixRootPath(value) {
  if (!value.startsWith('/') || value.startsWith('//')) return value;
  if (value === pathPrefix || value.startsWith(`${pathPrefix}/`)) return value;
  return `${pathPrefix}${value}`;
}

for (const file of await collectHtmlFiles(outputDirectory)) {
  const source = await readFile(file, 'utf8');
  const withPaths = source
    .replace(
      /\b(href|src)=(['"])(\/[^'"]*)\2/g,
      (_, attribute, quote, url) =>
        `${attribute}=${quote}${prefixRootPath(url)}${quote}`,
    )
    .replace(/\bsrcset=(['"])([^'"]*)\1/g, (_, quote, value) => {
      const candidates = value
        .split(',')
        .map((candidate) => {
          const [url, ...descriptor] = candidate.trim().split(/\s+/);
          return [prefixRootPath(url), ...descriptor].join(' ');
        })
        .join(', ');
      return `srcset=${quote}${candidates}${quote}`;
    });
  await writeFile(file, withPaths);
}
