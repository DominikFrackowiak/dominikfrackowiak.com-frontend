'use client'

import { PiCodeBold, PiLightningBold } from 'react-icons/pi'

import Link from 'next/link'
import styles from './Header.module.scss'
import TextToAnimate from './TextsAndIconsAnimation'
import { useSearchParams } from 'next/navigation'



export default function Logo({ locale, cv}) {
	
	const searchParams = useSearchParams()
	const theme = searchParams.get('theme') || 'light'

	// console.log(theme)

	return (
		<TextToAnimate delay={0.2} width={'auto'}>
			<Link
				href={`/${locale}/`}
				style={{ display: 'flex', flexDirection: 'column', gap: '4px', visibility: cv?'hidden':'visible' }}
			>
				<span
					className={`${styles.logo} bold`}
					style={{
						height: '23px',
						fontWeight: 500,
						fontSize: '20px',
						padding: '4px 8px',
					}}
				>
					DOMINIK FRACKOWIAK
				</span>
				<span
					className={`${styles.logo}`}
					style={{
						fontSize: '16px',
						fontWeight: 100,
						height: '22px',
						width: '140px',
						padding: '4px 8px',
					}}
				>
					WEB DEVELOPER
				</span>
			</Link>
		</TextToAnimate>
	)
}
