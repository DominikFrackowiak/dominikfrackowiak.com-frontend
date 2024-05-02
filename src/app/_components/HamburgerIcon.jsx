import Link from 'next/link'
import TextToAnimate from './TextToAnimate'

import { FaBars } from 'react-icons/fa6'

export default function HamburgerIcon({ href, className }) {
	return (
		<TextToAnimate delay={0.4}>
			<Link href={href} className={className}                                                      >
				<FaBars />
			</Link>
		</TextToAnimate>
	)
}
