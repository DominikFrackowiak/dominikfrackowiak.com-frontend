import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

// Używamy eksportu ES Modules zamiast CommonJS
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/spanish.html',
				destination: '/es',
				permanent: true,
			},
			{
				source: '/polish.html',
				destination: '/pl',
				permanent: true,
			},
			{
				source: '/english.html',
				destination: '/en',
				permanent: true,
			},
		]
	},
}

// Eksportuj używając składni ES Modules
export default withNextIntl(nextConfig)
