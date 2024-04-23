'use client'

import React from 'react'

import { PDF } from './pdf'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { useEffect, useState } from 'react'

import styles from './cv.module.scss'

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

	useEffect(() => {
		setClient(true)
	}, [])

	if (!client) {
		return <div>Loading...</div>
	}

	return (
		<div className={styles.pdfWrapper}>
			<PDFDownloadLink
				document={<PDF locale={locale} />}
				fileName='DominikFrackowiak_CV.pdf'
			>
				<div className={`${styles.pdfDownloadLink} bold underlined`}>
					{handleTranslation(locale)}
				</div>
			</PDFDownloadLink>

			<InvoicePDF locale={locale} />
		</div>
	)
}
