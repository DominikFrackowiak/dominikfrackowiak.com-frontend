'use client'

import { motion } from 'framer-motion'

// Animation configurations as objects
const animations = {
	enter: {
		initial: { opacity: 0, x: '100vw' },
		animate: { opacity: 1, x: 0 },
		transition: { duration: 0.5 },
	},
	exit: {
		initial: { opacity: 0, x: 0 },
		animate: { opacity: 1, x: '100vw' },
		transition: { duration: 0.5 },
	},
}

export default function AnimatedMenu({ children, isOpen }) {
	const animation = isOpen ? animations.enter : animations.exit

	return <motion.div {...animation}>{children}</motion.div>
}
