'use client'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'

import styles from './Header.module.scss'

// Components

import Logo from './Logo'
import HamburgerIcon from './HamburgerIcon'
import DarkLightModeSwitcher from './darkLightModeSwitcher'
import DownloadPdf from './DownloadPdf'

export default function Header({ locale }) {
	const pathname = usePathname()
	const route = useRouter()
	const cv = pathname.includes('cv')
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		route.push(`${pathname}/?theme=${theme}`)
	}, [theme])

	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<Logo locale={locale} cv={cv} />

				{cv && (
					<DownloadPdf locale={locale} className={styles.pdfDownloadLink} />
				)}

				<ul className={styles.headerIconsWrapper}>
					<li>
						<DarkLightModeSwitcher
							className={`${styles.hamburger} ${styles.darkModeSwitcher}`}
						/>
					</li>
					<li>
						<HamburgerIcon
							href={`${pathname}/?menu=true`}
							className={styles.hamburger}
						/>
					</li>
				</ul>
			</div>
		</header>
	)
}
