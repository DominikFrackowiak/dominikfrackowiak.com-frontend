import Link from 'next/link'

const links = [
	{ path: '/', label: '// start' },
	{ path: '/cv', label: '// curriculum_vitae' },
	{ path: '/blog', label: '// blog' },
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
