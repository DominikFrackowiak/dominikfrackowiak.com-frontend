'use client'

import styles from './Header.module.scss'

import { usePathname } from 'next/navigation'
import DarkLightModeSwitcher from './darkLightModeSwitcher'

// Components

import Logo from './Logo'
import HamburgerIcon from './HamburgerIcon'

export default function Header({ locale }) {
	const pathname = usePathname()
	const cv = pathname.includes('cv')

	return (
		<header className={styles.header}>
			{!cv && <Logo locale={locale} />}

			<div className={styles.headerIconsWrapper}>
				<DarkLightModeSwitcher className={styles.hamburger} />
				<HamburgerIcon
					href={`${pathname}/?menu=true`}
					className={styles.hamburger}
				/>
			</div>
		</header>
	)
}


