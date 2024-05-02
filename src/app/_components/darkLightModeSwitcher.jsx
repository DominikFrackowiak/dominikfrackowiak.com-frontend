'use client'

import { FaRegSun, FaRegMoon } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import { useRouter, usePathname } from 'next/navigation'

export default function DarkLightModeSwitcher() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()
	const router = useRouter()
	const path = usePathname()

	useEffect(() => setMounted(true), [])

	useEffect(() => {
		setTheme('light')
		router.push(`${path}/?theme=${theme}`)
	}, [])

	useEffect(() => {
		router.push(`${path}/?theme=${theme}`)
	}, [theme])

	useEffect(() => {
		router.push(`${path}/?theme=${theme}`)
	}, [path])

	if (!mounted) return null

	if (theme === 'dark') {
		return <FaRegSun onClick={() => setTheme('light')} />
	}

	if (theme === 'light') {
		return <FaRegMoon onClick={() => setTheme('dark')} />
	}
}
