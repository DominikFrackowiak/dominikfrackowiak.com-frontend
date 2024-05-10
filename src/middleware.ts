import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
	locales: ['en', 'pl', 'es'],

	defaultLocale: 'en',
})

export const config = {
	matcher: ['/', '/(pl|es)/:path*'],
}
