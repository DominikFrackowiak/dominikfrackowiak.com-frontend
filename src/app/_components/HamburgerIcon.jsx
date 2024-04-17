import Link from 'next/link'
import TextToAnimate from './TextToAnimate'

export default function HamburgerIcon({ href, icon, className, children }) {
	return (
		<Link href={href} className={className}>
			{icon || <TextToAnimate delay={0.2}>{children}</TextToAnimate>}
		</Link>
	)
}
