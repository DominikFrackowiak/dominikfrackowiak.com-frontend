'use client'

import { PiSun, PiMoon } from 'react-icons/pi'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'


export default function DarkLightModeSwitcher({ className }) {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme('dark')


	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted || theme === undefined) return null

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'

		setTheme(newTheme)
	}

	return (
		<button className={className} onClick={toggleTheme}>
			{theme === 'light' ? <PiMoon /> : <PiSun />}
		</button>
	)
}
