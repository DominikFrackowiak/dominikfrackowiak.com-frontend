'use client'

import { useRouter, usePathname } from 'next/navigation'
import TextToAnimate from './TextToAnimate'

function useLocale() {
	const pathname = usePathname()
	const pathElements = pathname.split('/')
	return pathElements[1] // Assuming the locale is always the second segment.
}

function LanguageSwitcher({ lang, isActive, onSwitchLanguage }) {
	return (
		<TextToAnimate>
			<span
				style={{ fontWeight: isActive ? '600' : '100' }}
				onClick={() => onSwitchLanguage(lang)}
			>
				{lang}
			</span>
		</TextToAnimate>
	)
}

export default function LanguagePicker({ lang }) {
	const locale = useLocale()
	const router = useRouter()

	console.log(locale)

	const handleLanguageSwitch = newLang => {
		const newPath = `/${newLang}${location.pathname.slice(locale.length + 1)}`
		router.push(newPath)
	}

	return (
		<LanguageSwitcher
			lang={lang}
			isActive={locale === lang}
			onSwitchLanguage={handleLanguageSwitch}
		/>
	)
}
