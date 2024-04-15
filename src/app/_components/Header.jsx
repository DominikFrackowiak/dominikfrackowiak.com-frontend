'use client'

import Link from 'next/link'
import styles from './Header.module.scss'
import { FaBars } from 'react-icons/fa6'

import { usePathname } from 'next/navigation'

// Components
import TextToAnimate from './TextToAnimate'

export default function Header({ locale }) {
	const pathname = usePathname()
 const pdf = pathname.includes('pdf')

	return (
		<header className={styles.header}>
			{!pdf && <Link href={`/${locale}`}>
				<h1 className={styles.headerH1}>
					<TextToAnimate delay={0.2}>
						<span className={`${styles.logo} bold dark`}>
							//dominik_frackowiak
						</span>
					</TextToAnimate>
					{/* <TextToAnimate delay={0.5}>
						<span className='bold txt'>web_developer</span>
					</TextToAnimate> */}
				</h1>
			</Link>
}
			<Link href={'/?menu=true'}>
				<FaBars className={styles.hamburger} />
			</Link>
		</header>
	)
}

// 		<Link href={`/${locale}/blog`}>
