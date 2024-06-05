'use client'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

import { PiGlobe } from 'react-icons/pi'

import styles from './Header.module.scss'

// Components

import Logo from './Logo'
import HamburgerIcon from './HamburgerIcon'
import DarkLightModeSwitcher from './darkLightModeSwitcher'
import DownloadPdf from './DownloadPdf'
import LanguageMenu from './LanguageMenu'
import DynamicListContainer from './DynamicListContainer'
import LanguagePicker from './LanguagePicker'
import { Basic } from './Popover'

export default function Header({ locale }) {
	const pathname = usePathname()
	const route = useRouter()
	const cv = pathname.includes('cv')
	const maintenance = pathname.includes('maintenance')
	const { theme, setTheme } = useTheme()
	const searchParams = useSearchParams()

	const pathElements = pathname.split('/')

	const isPost = pathElements.length > 3 && pathElements.includes('blog')

	console.log(searchParams)

	useEffect(() => {
		route.push(`${pathname}/?theme=${theme}`)
	}, [theme])

	return (
		<header className={styles.header}>
			<div className={styles.headerWrapper}>
				<Logo locale={locale} cv={cv} maintenance={maintenance} />

				{cv && (
					<DownloadPdf locale={locale} className={styles.pdfDownloadLink} />
				)}

				<ul className={styles.headerIconsWrapper}>
					{!isPost && <li className={styles.languagePicker}>
						<Basic
							styles={`${styles.hamburger} ${styles.darkModeSwitcher}`}
						></Basic>
					</li>}
					<li>
						<DarkLightModeSwitcher
							className={`${styles.hamburger} ${styles.darkModeSwitcher}`}
						/>
					</li>
					<li>
						{!maintenance && (
							<HamburgerIcon
								href={`${pathname}/?menu=true`}
								className={styles.hamburger}
							/>
						)}
					</li>
				</ul>
			</div>
		</header>
	)
}
