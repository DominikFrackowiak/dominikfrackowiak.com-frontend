'use client'

import React from 'react'

import { PDF } from './pdf'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

import styles from './cv.module.scss'

// export async function metadata({ params, searchParams }) {
// 	console.log(searchParams)
// 	const theme = searchParams?.theme || 'light'

// 	return {
// 		icons: {
// 			icon:
// 				theme === 'dark'
// 					? '/favicon-dark/favicon.ico'
// 					: '/favicon-light/favicon.ico',
// 		},
// 	}
// }

const InvoicePDF = dynamic(() => import('./pdf'), {
	ssr: false,
})

const handleTranslation = locale => {
	switch (locale) {
		case 'es':
			return 'descargar CV'
			break
		case 'pl':
			return 'pobierz CV'
		default:
			return 'download CV'
	}
}

const PDFDownloadLink = dynamic(
	() => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
	{ ssr: false }
)

export default function View() {
	const [client, setClient] = useState(false)
	const pathname = usePathname()
	const locale = pathname.split('/')[1]
	const searchParams = useSearchParams()
	const menu = searchParams.get('menu')



	useEffect(() => {
		setClient(true)
	}, [])

	if (!client) {
		return <div>Loading...</div>
	}

	return (
		<>
			{!menu && <PDFDownloadLink
				document={<PDF locale={locale} />}
				fileName='DominikFrackowiak_CV.pdf'
				style={{ position: 'fixed', top: 0, marginInline: 'auto', zIndex: '100'}}
			>
				<div className={`${styles.pdfDownloadLink} bold underlined`}>
					{handleTranslation(locale)}
				</div>
			</PDFDownloadLink>}

			<div className={styles.pdfWrapper}>
				<InvoicePDF locale={locale} />
			</div>
		</>
	)
}
