'use client'

import React from 'react'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { useEffect, useState } from 'react'

import styles from './cv.module.scss'

const InvoicePDF = dynamic(() => import('./pdf'), {
	ssr: false,
})

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
			<InvoicePDF locale={locale} />
		</div>
	)
}
