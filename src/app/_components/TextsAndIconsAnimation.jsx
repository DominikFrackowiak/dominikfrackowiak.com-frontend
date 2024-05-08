'use client'

import { motion } from 'framer-motion'

export default function TextToAnimate({ children, delay }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: '40px' }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay }}
		>
			{children}
		</motion.div>
	)
}
