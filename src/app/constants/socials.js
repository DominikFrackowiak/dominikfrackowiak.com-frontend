import {
	FaGithubSquare,
	FaLinkedin,
	FaCodepen,
	FaWhatsappSquare,
} from 'react-icons/fa'

import {
	IoLogoGithub,
	IoLogoLinkedin,
	IoLogoCodepen,
	IoLogoWhatsapp,
} from 'react-icons/io5'

const socials = [
	{ url: 'https://github.com/DominikFrackowiak', icon: <IoLogoGithub /> },
	{
		url: 'https://www.linkedin.com/in/dominik-frackowiak-bb57b98b/',
		icon: <IoLogoLinkedin />,
	},
	{ url: 'https://codepen.io/MarianKoniuszko', icon: <IoLogoCodepen /> },
	{ url: 'https://wa.me/34654114393?text=Hello', icon: <IoLogoWhatsapp /> },
]

export default socials
