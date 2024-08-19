import createMiddleware from 'next-intl/middleware';
import {locales, /* ... */} from './config';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: "always"
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(de|en)/:path*',

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    '/((?!_next|_vercel|.*\\..*).*)'
  ]
};