import Link from 'next/link'

const links = [
	{ path: '/cv', label: '// curriculum_vitae' },
	{ path: '/blog', label: '// blog' },
	{ path: '/', label: '// start' },
]

export default function NavigationLinks({ locale }) {
	return (
		<>
			{links.map(link => (
				<Link key={link.path} href={`/${locale}${link.path}`}>
					{link.label}
				</Link>
			))}
		</>
	)
}
