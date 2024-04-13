import Link from 'next/link'
import styles from './Header.module.scss'

// Components
import TextToAnimate from './TextToAnimate'

export default function Header({ locale }) {
	return (
		<header className={styles.header}>
			<Link href={`/${locale}`}>
				<TextToAnimate>
					<h1 className={styles.headerH1}>
						<span className='bold dark txt'>//dominik_frackowiak</span>
						<span className='bold txt'>web_developer</span>
					</h1>
				</TextToAnimate>
			</Link>
		</header>
	)
}

// 		<Link href={`/${locale}/blog`}>
