'use client'

import Link from 'next/link'
import styles from './Header.module.scss'

import { useSearchParams } from 'next/navigation'

export default function Logo({ locale, cv }) {
	const searchParams = useSearchParams()
	const theme = searchParams.get('theme') || 'light'

	// console.log(theme)

	return (
		<Link
			href={`/${locale}/`}
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '4px',
				visibility: cv ? 'hidden' : 'visible',
			}}
		>
			<span
				className={`${styles.logo} bold`}
				style={{
					fontWeight: 500,
					fontSize: '20px',
				}}
			>
				DOMINIK FRACKOWIAK
			</span>
			<span
				className={`${styles.logo} bold`}
				style={{
					fontWeight: 300,
					fontSize: '16px',
				}}
			>
				web developer
			</span>
		</Link>
	)
}
