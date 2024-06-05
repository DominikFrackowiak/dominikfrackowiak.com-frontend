'use client'

import Link from 'next/link'
import styles from './Header.module.scss'

import { useSearchParams } from 'next/navigation'

export default function Logo({ locale, cv, maintenance }) {
	const searchParams = useSearchParams()
	const theme = searchParams.get('theme') || 'light'

	// console.log(theme)

	return (
		<Link
			href={!maintenance ? `/${locale}/` : `/maintenance`}
			style={{
				display: 'flex',
				flexDirection: 'column',
				// gap: '2px',
				visibility: cv ? 'hidden' : 'visible',
			}}
		>
			<span className={`${styles.logo} bold`}>DOMINIK FRACKOWIAK</span>
			<span className={`${styles.logo} ${styles.logoSmallSpan}`}>
				Web Developer
			</span>
		</Link>
	)
}
