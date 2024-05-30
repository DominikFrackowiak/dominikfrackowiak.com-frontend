import Link from 'next/link'
import TextToAnimate from './TextsAndIconsAnimation'

import { PiList, PiListBold } from 'react-icons/pi'

export default function HamburgerIcon({ href, className }) {
	return (
		<TextToAnimate delay={0.6}>
			<button className={className}>
				<Link href={href} className={className}>
					<PiList />
				</Link>
			</button>
		</TextToAnimate>
	)
}
