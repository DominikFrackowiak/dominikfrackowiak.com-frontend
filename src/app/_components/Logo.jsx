'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import TextToAnimate from './TextToAnimate'
import { useSearchParams } from 'next/navigation'

export default function Logo({ locale }) {
	const searchParams = useSearchParams()
	const theme = searchParams.get('theme') || 'light'

	console.log(theme)

	return (
		<Link href={`/${locale}/?theme=${theme}`}>
			<TextToAnimate delay={0.2}>
				<span className={`${styles.logo} bold dark`}>//dominik_frackowiak</span>
			</TextToAnimate>
		</Link>
	)
}
