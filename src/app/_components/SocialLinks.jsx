import Link from 'next/link'
import {
	FaGithubSquare,
	FaLinkedin,
	FaCodepen,
	FaWhatsappSquare,
} from 'react-icons/fa'
import TextToAnimate from './TextToAnimate'

const socials = [
	{ url: 'https://github.com/DominikFrackowiak', icon: <FaGithubSquare /> },
	{
		url: 'https://www.linkedin.com/in/dominik-frackowiak-bb57b98b/',
		icon: <FaLinkedin />,
	},
	{ url: 'https://codepen.io/MarianKoniuszko', icon: <FaCodepen /> },
	{ url: 'https://wa.me/34654114393?text=Hello', icon: <FaWhatsappSquare /> },
]

export default function SocialLinks({ className }) {
	let delayBase = 1.8
	return (
		<ul className={className}>
			{socials.map(social => (
				<Link key={social.url} target='_blank' href={social.url}>
					<TextToAnimate delay={(delayBase += 0.1)}>
						<li>{social.icon}</li>
					</TextToAnimate>
				</Link>
			))}
		</ul>
	)
}
