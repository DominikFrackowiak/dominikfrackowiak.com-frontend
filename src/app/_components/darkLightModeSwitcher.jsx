'use client'

import { FaRegSun, FaRegMoon } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function DarkLightModeSwitcher() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	if (theme === 'dark') {
		return <FaRegSun onClick={() => setTheme('light')} />
	}

	if (theme === 'light') {
		return <FaRegMoon onClick={() => setTheme('dark')} />
	}
}
