'use client'

import { useRouter, usePathname } from 'next/navigation'
import TextToAnimate from './TextToAnimate'

export default function LanguagePicker({ lang }) {
	const pathname = usePathname()
	const router = useRouter()

	const pathElements = pathname.split('/')
	const locale = pathElements[1]

	return (
		<TextToAnimate>
			<span
				style={{
					fontWeight: locale === lang ? '600' : '100',
				}}
				onClick={() => {
					pathElements.splice(1, 1, lang)

					const newUrl = pathElements.join('/')
					router.push(newUrl)
				}}
			>
				{lang}
			</span>
		</TextToAnimate>
	)
}
