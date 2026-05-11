/** Production site origin (no trailing slash). */
export const SITE_URL = 'https://nautoriouscharters.com';

/** Default Open Graph / Twitter image (absolute URL). Use a stable public asset. */
export const DEFAULT_OG_IMAGE_PATH = '/destinations/miami.jpg';

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
