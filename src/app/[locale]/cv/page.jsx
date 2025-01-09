'use client'

import React from 'react'

import dynamic from 'next/dynamic'
import { usePathname, useSearchParams } from 'next/navigation'

import DownloadPdf from '../../_components/DownloadPdf'

import styles from './cv.module.scss'

const InvoicePDF = dynamic(() => import('./pdf'), {
	ssr: false,
})

export default function View() {
	const pathname = usePathname()
 const locale = pathname.split('/')[1]
	const searchParams = useSearchParams()

	const theme = searchParams.get('theme')
	const faviconUrl = theme === 'dark' ? '/favicon-dark/favicon.png' : '/favicon-light/favicon.png'

	return (
		<>
			<head>
				<title>Dominik Fackowiak | Curriculum Vitae</title>
				<meta name='description' content={`Curriculum Vitae for ${locale}`} />
				<link rel='icon' type='image/png' href={faviconUrl} />
			</head>
			<div className={styles.pdfWrapper}>
				<InvoicePDF locale={locale} />
			</div>
			<div className={styles.pdfButtonWrapper}>
				<DownloadPdf locale={locale} />
			</div>
		</>
	)
}
