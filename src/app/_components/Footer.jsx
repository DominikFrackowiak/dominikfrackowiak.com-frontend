'use client'

// Next modules
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Font
import { Roboto_Mono } from 'next/font/google'

// Styles
import styles from './Footer.module.scss'

// Icons
import {
	FaGithubSquare,
	FaLinkedin,
	FaCodepen,
	FaWhatsappSquare,
} from 'react-icons/fa'

// Components
import LanguagePicker from './LanguagePicker'
import TextToAnimate from './TextToAnimate'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

// Constants
const socials = [
	{
		url: 'https://github.com/DominikFrackowiak',
		icon: <FaGithubSquare />,
	},
	{
		url: 'https://www.linkedin.com/in/dominik-frackowiak-bb57b98b/',
		icon: <FaLinkedin />,
	},
	{
		url: 'https://codepen.io/MarianKoniuszko',
		icon: <FaCodepen />,
	},
	{
		url: 'https://wa.me/34654114393?text=Hello',
		icon: <FaWhatsappSquare />,
	},
]

const locales = ['en', 'es', 'pl']

export default function Footer({ locale }) {
	const pathname = usePathname()
	const pdf = pathname.includes('pdf')
	console.log(pdf)
	let delayBase = 1.8
	return (
		<footer
			className={`${styles.footer} ${robotoMono.className}`}
			style={{ display: pdf ? 'none' : 'flex' }}
		>
			<div className={styles.socialsLocalesWrapper}>
				{socials.map(social => (
					<Link key={social.url} target='_blank' href={social.url}>
						<TextToAnimate delay={(delayBase += 0.1)}>
							{social.icon}
						</TextToAnimate>
					</Link>
				))}
			</div>

			<div className={styles.socialsLocalesWrapper}>
				{locales.map(loc => (
					<button
						key={loc}
						className={`${styles.footerBtn}  ${robotoMono.className}`}
					>
						<TextToAnimate delay={(delayBase += 0.1)}>
							<LanguagePicker lang={loc} locale={locale} />
						</TextToAnimate>
					</button>
				))}
			</div>
		</footer>
	)
}
