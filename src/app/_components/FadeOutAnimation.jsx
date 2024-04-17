'use client'

import { motion } from 'framer-motion'

export default function FadeOutAnimation({ children, menu }) {
	if (menu === 'true') {
		return (
			<motion.div
				initial={{ opacity: 1, zIndex: 0 }}
				animate={{ opacity: 0, zIndex: 100 }}
				transition={{ duration: 0.3 }}
			>
				{children}
			</motion.div>
		)
	} else {
		return (
			<motion.div
				initial={{ opacity: 0, zIndex: 100 }}
				animate={{ opacity: 1, zIndex: 0 }}
				transition={{ duration: 0.3 }}
			>
				{children}
			</motion.div>
		)
	}
}
