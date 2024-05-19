import Link from 'next/link'
import TextToAnimate from './TextsAndIconsAnimation'

import { FaBars } from 'react-icons/fa6'

export default function HamburgerIcon({ href, className }) {
	return (
		<TextToAnimate delay={0.6}>
			<Link href={href} className={className}>
				<button className={className}>
					<FaBars/>
				</button>
			</Link>
		</TextToAnimate>
	)
}
