'use client'

// Next modules
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Roboto_Mono } from 'next/font/google'

// Styles
import styles from './Footer.module.scss'

// Components
import SocialLinks from './SocialLinks' // New component for social links
import LocaleButtons from './LocaleButtons' // New component for locale buttons

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function Footer({ locale }) {
	const pathname = usePathname()
	const cv = pathname.includes('cv')

	return (
		<footer
			className={`${styles.footer} ${robotoMono.className}`}
			style={{ display: cv ? 'none' : 'flex' }}
		>
			<SocialLinks className={styles.socialsLocalesWrapper} />
			<LocaleButtons
				locales={['en', 'es', 'pl']}
				currentLocale={locale}
				className={styles.socialsLocalesWrapper}
			/>
		</footer>
	)
}
