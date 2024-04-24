import Link from 'next/link'

import { FaBars } from 'react-icons/fa6'

export default function HamburgerIcon({ href, className }) {
	return (
		<Link href={href} className={className}>
			<FaBars />
		</Link>
	)
}
