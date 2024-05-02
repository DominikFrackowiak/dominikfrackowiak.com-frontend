'use client'

import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'

import { FaXmark } from 'react-icons/fa6'
import styles from './Menu.module.scss'

import AnimatedMenu from './AnimatedMenu'
import NavigationLinks from './NavigationLinks'

export default function Menu({ locale }) {
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const menu = searchParams.get('menu')

	return (
		
		<main
			className={styles.menu}
			style={{
				opacity: menu === 'true' ? 1 : 0,
				zIndex: menu === 'true' ? 100 : 0,
			}}
		>
			<AnimatedMenu isOpen={menu}>
				<nav className={styles.nav}>
					<Link href={`${pathname}`}>
						<FaXmark className={styles.closeIcon} />
					</Link>
					<NavigationLinks locale={locale}/>
				</nav>
			</AnimatedMenu>
		</main>
	)
}
