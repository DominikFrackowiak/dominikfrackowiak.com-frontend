import Link from 'next/link'
import styles from './Header.module.scss'
import TextToAnimate from './TextToAnimate'

export default function Logo({ locale }) {
	return (
		<Link href={`/${locale}`}>
			<h1 className={styles.headerH1}>
				<TextToAnimate delay={0.2}>
					<span className={`${styles.logo} bold dark`}>
						//dominik_frackowiak
					</span>
				</TextToAnimate>
			</h1>
		</Link>
	)
}
