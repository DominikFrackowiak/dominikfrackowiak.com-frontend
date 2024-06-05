'use client'

import { usePathname } from 'next/navigation'

function handleInfo(locale) {
	switch (locale) {
		case 'es':
			return 'Lo sentimos. Trabajos de mantenimiento, vuelva más tarde.'
		case 'pl':
			return 'Przepraszamy. Prace konserwacyjne, wróć do nas później.'
		default:
			return 'Sorry. Maintenance work, come back later.'
	}
}

export default function MaintenancePage() {
	const pathname = usePathname()
	const locale = pathname.split('/')[1]
	return (
		<main className='main' style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
			<h1>{handleInfo(locale)}</h1>
		</main>
	)
}
