import Link from 'next/link'

import { PiArrowCircleLeft } from 'react-icons/pi'

function handleTextContent(locale) {
	switch (locale) {
		case 'pl':
			return 'Wszystkie wpisy'
			break
		case 'es':
			return 'Todas las entradas'
			break
		default:
			return 'All posts'
	}
}

export default function BackToAllPosts({ locale, index }) {
	return (
		<Link
			style={{
				display: index !== 2 ? 'none' : 'flex',
				gap: '10px',
				alignItems: 'center',
			}}
			href={`/${locale}/blog`}
		>
			<PiArrowCircleLeft />
			<small style={{ fontSize: '18px', fontWeight: '100' }}>
				{handleTextContent(locale)}
			</small>
		</Link>
	)
}
