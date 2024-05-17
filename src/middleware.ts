import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	locales: ['default', 'en', 'es', 'pl'],
	defaultLocale: 'en',
	localePrefix: 'always',
	localeDetection: true,
})

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
}
