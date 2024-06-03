'use client'

import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'

import { PiX } from 'react-icons/pi'
import { IoCloseOutline } from 'react-icons/io5'
import styles from './Menu.module.scss'

import AnimatedMenu from './AnimatedMenu'
import NavigationLinks from './NavigationLinks'

export default function Menu({ locale }) {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const menu = searchParams.get('menu')

	return (
		<div
			className={styles.menu}
			style={{
				opacity: menu === 'true' ? 1 : 0,
				zIndex: menu === 'true' ? 100 : 0,
			}}
		>
			<div className={styles.header}>
				<Link href={pathname} className={styles.closeIcon}>
					{/* <FaXmark className={styles.closeIcon} /> */}
					<PiX />
				</Link>
			</div>

			<AnimatedMenu isOpen={menu}>
				<nav className={styles.nav}>
					<NavigationLinks locale={locale} className={styles.menuLinks}/>
				</nav>
			</AnimatedMenu>
		</div>
	)
}
