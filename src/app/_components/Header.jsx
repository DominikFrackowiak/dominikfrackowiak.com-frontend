'use client'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import styles from './Header.module.scss'

// Components

import Logo from './Logo'

import DarkLightModeSwitcher from './darkLightModeSwitcher'
import DownloadPdf from './DownloadPdf'

import { PopoverLang } from './PopoverLang'
import { PopoverMenu } from './PopoverMenu'

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
					<li>
						<DarkLightModeSwitcher className={styles.hamburger} />
					</li>

					{!isPost && (
						<li className={styles.languagePicker}>
							<PopoverLang
								styles={styles.hamburger}
								locale={locale}
								theme={theme}
							></PopoverLang>
						</li>
					)}

					<li className={styles.languagePicker}>
						<PopoverMenu
							styles={styles.hamburger}
							locale={locale}
							theme={theme}
						/>
					</li>
				</ul>
			</div>
		</header>
	)
}
