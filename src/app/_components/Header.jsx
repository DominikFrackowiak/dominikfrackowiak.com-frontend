'use client'
import { useEffect } from 'react'
import { useTheme } from 'next-themes'

import styles from './Header.module.scss'

import { usePathname, useRouter } from 'next/navigation'
import DarkLightModeSwitcher from './darkLightModeSwitcher'

// Components

import Logo from './Logo'
import HamburgerIcon from './HamburgerIcon'

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
			{!cv && <Logo locale={locale} />}

			<ul className={styles.headerIconsWrapper}>
				<li>
					<DarkLightModeSwitcher className={styles.hamburger} />
				</li>
				<li>
					<HamburgerIcon
						href={`${pathname}/?menu=true`}
						className={styles.hamburger}
					/>
				</li>
			</ul>
		</header>
	)
}
