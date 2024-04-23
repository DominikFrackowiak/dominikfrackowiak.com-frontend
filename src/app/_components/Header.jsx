'use client'

import styles from './Header.module.scss'
import { FaBars, FaRegSun, FaRegMoon } from 'react-icons/fa6'
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
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					position: 'fixed',
					right: '2.5vw',
					top: '40px',
					width: '130px',
					cursor: 'pointer',
				}}
			>
				<DarkLightModeSwitcher />
				<HamburgerIcon
					href={`${pathname}/?menu=true`}
					icon={<FaBars />}
					className={styles.hamburger}
				/>
			</div>
		</header>
	)
}

// 		<Link href={`/${locale}/blog`}>
