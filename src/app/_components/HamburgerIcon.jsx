import Link from 'next/link'
import TextToAnimate from './TextsAndIconsAnimation'

import { FaBars } from 'react-icons/fa6'
import { IoMenuOutline, IoMenuSharp } from 'react-icons/io5'

export default function HamburgerIcon({ href, className }) {
	return (
		<TextToAnimate delay={0.6}>
			<button className={className}>
				<Link href={href} className={className}>
				<IoMenuSharp/>
				</Link>
			</button>
		</TextToAnimate>
	)
}
