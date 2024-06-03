import Link from 'next/link'

import { PiArrowCircleLeft } from 'react-icons/pi'

import styles from './BackToAllPosts.module.scss'

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
				color: '#e04c4c'
			}}
			className={styles.backToAllPosts}
			href={`/${locale}/blog`}
		>
			<PiArrowCircleLeft style={{ fontSize: '20px', color: '#e04c4c' }} />
			<small style={{ fontSize: '14px', fontWeight: '100', color: '#e04c4c' }}>
				{handleTextContent(locale)}
			</small>
		</Link>
	)
}
