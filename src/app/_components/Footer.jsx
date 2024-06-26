'use client'

// Next modules
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { Roboto_Mono } from 'next/font/google'

// Styles
import styles from './Footer.module.scss'

// Components

import DynamicListContainer from './DynamicListContainer'

// Constants
import socials from '../../../constants/socials'

// const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function Footer({ locale }) {
	const pathname = usePathname()
	const cv = pathname.includes('cv')

	return (
		<footer className={styles.footer} style={{ display: cv ? 'none' : 'flex' }}>
			<DynamicListContainer
				data={socials}
				className={styles.socialsLocalesWrapper}
				delayBase={1.8}
				styles={{ padding: '0 5px 0 0' }}
			>
				{el => (
					<Link
						target='_blank'
						href={el.url}
						
					>
						{el.icon}
					</Link>
				)}
			</DynamicListContainer>
		</footer>
	)
}
