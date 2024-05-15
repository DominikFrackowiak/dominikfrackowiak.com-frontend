// 'use client'

// import { FaRegSun, FaRegMoon } from 'react-icons/fa6'
// import { useState, useEffect } from 'react'
// import { useTheme } from 'next-themes'
// import { useRouter, usePathname } from 'next/navigation'
// import TextToAnimate from './TextsAndIconsAnimation'

// export default function DarkLightModeSwitcher({ className }) {
// 	const [mounted, setMounted] = useState(false)
// 	const { theme, setTheme } = useTheme('')

// 	console.log('THEME: ', theme)

// 	const router = useRouter()
// 	const path = usePathname()

// 	useEffect(() => {
// 		setMounted(true)
// 	}, [])

// 	if (!mounted) return null

// 	return (
// 		<TextToAnimate delay={0.4}>
// 			<button className={className}>
// 				{theme === 'light' ? (
// 					<FaRegMoon onClick={() => setTheme('dark')} />
// 				) : (
// 					<FaRegSun onClick={() => setTheme('light')} />
// 				)}
// 			</button>
// 		</TextToAnimate>
// 	)
// }

'use client'

import { FaRegSun, FaRegMoon } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import TextToAnimate from './TextsAndIconsAnimation'

export default function DarkLightModeSwitcher({ className }) {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme('dark')

	console.log('THEME: ', theme)

	const router = useRouter()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted || theme === undefined) return null

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
	}

	return (
		<TextToAnimate delay={0.4}>
			<button className={className} onClick={toggleTheme}>
				{theme === 'light' ? <FaRegMoon /> : <FaRegSun />}
			</button>
		</TextToAnimate>
	)
}
