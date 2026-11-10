/** Outside links open in a new tab. */
export function linkTarget(href: string): { target?: '_blank'; rel?: 'noopener' } {
  return /^https?:\/\//.test(href) ? { target: '_blank', rel: 'noopener' } : {};
}

/** Marks the navigation link of the page you are on. */
export function ariaCurrent(href: string, pathname: string): 'page' | undefined {
  const trim = (path: string) => path.replace(/\/$/, '');
  return trim(href) === trim(pathname) ? 'page' : undefined;
}
