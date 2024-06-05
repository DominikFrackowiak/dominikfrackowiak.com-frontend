'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

function useLocale() {
	const pathname = usePathname()
	const pathElements = pathname.split('/')
	return pathElements[1]
}

function LanguageSwitcher({ lang, isActive, onSwitchLanguage }) {
	return (
		// <TextToAnimate>
		<span
			style={{ fontWeight: isActive ? '700' : '300', border: '1px solid red' }}
			onClick={() => {
				onSwitchLanguage(lang)
			}}
			className={openSans.className}
		>
			{lang.toUpperCase()}
			{/* {lang} */}
		</span>
		// </TextToAnimate>
	)
}

export default function LanguagePicker({ lang, index }) {
	const searchParams = useSearchParams()

	const tag = searchParams.get('tag')
	// console.log(tag)
	// console.log(lang, index)
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const pathElements = pathname.split('/')

	const isPost =
		(pathElements.length > 3 && pathElements.includes('blog')) || tag !== null

	const handleLanguageSwitch = newLang => {
		const newPath = `/${newLang}${location.pathname.slice(locale.length + 1)}`

		router.prefetch(newPath)

		router.push(newPath)
	}

	const toRender = isPost ? null : (
		<LanguageSwitcher
			lang={lang}
			isActive={locale === lang}
			onSwitchLanguage={handleLanguageSwitch}
		/>
	)

	return toRender
}
