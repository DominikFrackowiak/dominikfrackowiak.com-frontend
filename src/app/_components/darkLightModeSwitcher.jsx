'use client'


import { PiSun, PiMoon } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import TextToAnimate from './TextsAndIconsAnimation'

export default function DarkLightModeSwitcher({ className }) {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme('dark')

	// console.log('THEME: ', theme)

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
				{theme === 'light' ? <PiMoon /> : <PiSun />}
			</button>
		</TextToAnimate>
	)
}
