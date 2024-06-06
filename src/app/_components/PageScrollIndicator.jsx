'use client'

import { motion, useScroll } from 'framer-motion'

export function PageScrollIndicator() {
	const { scrollYProgress } = useScroll()

	return (
		<motion.div
			className='progress-bar'
			style={{
				scaleX: scrollYProgress,
				position: 'fixed',
				top: '0',
				left: '0',
				zIndex: 1000,
				height: 4,
				transformOrigin: '0%',
				background: 'rgb(165, 164, 164)',
				width: '100%',
			}}
		/>
	)
}
