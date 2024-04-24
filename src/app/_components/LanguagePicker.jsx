'use client'

import { useRouter, usePathname } from 'next/navigation'
import TextToAnimate from './TextToAnimate'
import { Roboto_Mono } from 'next/font/google'
const robotoMono = Roboto_Mono({ subsets: ['latin'] })

function useLocale() {
	const pathname = usePathname()
	const pathElements = pathname.split('/')
	return pathElements[1] 
}

function LanguageSwitcher({ lang, isActive, onSwitchLanguage }) {
	return (
		<TextToAnimate>
			<span
				style={{ fontWeight: isActive ? '700' : '200' }}
				className={robotoMono.className}
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
