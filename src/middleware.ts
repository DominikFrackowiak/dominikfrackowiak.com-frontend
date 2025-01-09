import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
	locales: ['default', 'en', 'es', 'pl'],
	defaultLocale: 'en',
	localePrefix: 'always',
	localeDetection: true,
})

export function middleware(request: NextRequest) {
	const response = intlMiddleware(request)

	const searchParams = request.nextUrl.searchParams.toString()

	response.headers.set('x-search-params', searchParams || 'no value')

	return response
}

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
}
