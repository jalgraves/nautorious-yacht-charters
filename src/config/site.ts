/** Production site origin (no trailing slash). */
export const SITE_URL = 'https://nautoriouscharters.com';

/** Default Open Graph / Twitter image (absolute URL). Use a stable public asset. */
export const DEFAULT_OG_IMAGE_PATH = '/destinations/miami.jpg';

/**
 * Contact-form Lambda Function URL (the `contact_form_function_url` Terraform
 * output from the infrastructure `aws/lambda/` stack). Set at build time via
 * the VITE_CONTACT_FORM_URL environment variable.
 */
export const CONTACT_FORM_URL = import.meta.env.VITE_CONTACT_FORM_URL ?? '';

/** Key identifying this site in the Lambda's per-site SITES config. */
export const CONTACT_FORM_SITE = 'nautoriouscharters';

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}
