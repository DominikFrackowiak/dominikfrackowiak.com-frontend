'use client'

import styles from './Header.module.scss'
import { FaBars } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

// Components

import Logo from './Logo'
import HamburgerIcon from './HamburgerIcon'

export default function Header({ locale }) {
	const pathname = usePathname()
	const cv = pathname.includes('cv')

	return (
		<header className={styles.header}>
			{!cv && <Logo locale={locale} />}
			<HamburgerIcon
				href={`${pathname}/?menu=true`}
				icon={<FaBars />}
				className={styles.hamburger}
			/>
		</header>
	)
}

// 		<Link href={`/${locale}/blog`}>
