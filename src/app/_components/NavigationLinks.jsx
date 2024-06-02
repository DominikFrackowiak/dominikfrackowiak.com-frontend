import Link from 'next/link'

const links = [
	{ path: '/', label: 'START' },
	{ path: '/cv', label: 'CURRICULUM VITAE' },
	{ path: '/blog', label: 'BLOG' },
]

export default function NavigationLinks({ locale }) {
	
	return (
		<>
			{links.map(link => (
				<Link
					key={link.path}
					href={`/${locale}${link.path}`}
					
				>
					{link.label}
				</Link>
			))}
		</>
	)
}
