// Next modules
import Link from 'next/link'

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
	return (
		<footer className={`${styles.footer} ${robotoMono.className}`}>
			<div>
				<TextToAnimate>
					{socials.map(social => (
						<Link key={social.url} target='blank' href={social.url}>
							{social.icon}
						</Link>
					))}
				</TextToAnimate>
			</div>
			<div>
				{locales.map(loc => (
					<button 
						key={loc}
						className={`${styles.footerBtn}  ${robotoMono.className}`}
					>
						<LanguagePicker lang={loc} locale={locale} />
					</button>
				))}
			</div>
		</footer>
	)
}
