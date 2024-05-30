'use client'

import { PiCodeBold, PiLightningBold } from 'react-icons/pi'

import Link from 'next/link'
import styles from './Header.module.scss'
import TextToAnimate from './TextsAndIconsAnimation'
import { useSearchParams } from 'next/navigation'



export default function Logo({ locale }) {
	
	const searchParams = useSearchParams()
	const theme = searchParams.get('theme') || 'light'

	// console.log(theme)

	return (
		<TextToAnimate delay={0.2} width={'auto'}>
			<Link href={`/${locale}/`}>
				<span className={`${styles.logo} bold dark`}>
					 DOMINIK FRACKOWIAK
				</span>
			</Link>
		</TextToAnimate>
	)
}
