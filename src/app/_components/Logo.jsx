import Link from 'next/link'
import styles from './Header.module.scss'
import TextToAnimate from './TextToAnimate'

export default function Logo({ locale }) {
	return (
		<Link href={`/${locale}`}>
			<TextToAnimate delay={0.2}>
				<span className={`${styles.logo} bold dark`}>//dominik_frackowiak</span>
			</TextToAnimate>
		</Link>
	)
}
