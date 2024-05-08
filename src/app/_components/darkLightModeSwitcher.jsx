'use client'

import { FaRegSun, FaRegMoon } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useRouter, usePathname } from 'next/navigation'
import TextToAnimate from './TextToAnimate'

export default function DarkLightModeSwitcher({ className }) {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme('')

	const router = useRouter()
	const path = usePathname()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<TextToAnimate delay={0.4}>
			<button className={className}>
				{theme === 'light' ? (
					<FaRegMoon onClick={() => setTheme('dark')} />
				) : (
					<FaRegSun onClick={() => setTheme('light')} />
				)}
			</button>
		</TextToAnimate>
	)
}
