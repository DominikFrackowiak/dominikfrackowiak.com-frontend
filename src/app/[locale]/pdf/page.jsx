'use client'

import React from 'react'

// import { PDFDownloadLink } from '@react-pdf/renderer'

import dynamic from 'next/dynamic'

import { useEffect, useState } from 'react'

// import { useRouter } from 'next/router'

const InvoicePDF = dynamic(() => import('./pdf'), {
	ssr: false,
})

export default function View() {
	// const router = useRouter()

	// const number = router.query.number
	// const locale = router.query.locale

	const [client, setClient] = useState(false)

	useEffect(() => {
		setClient(true)
	}, [])

	if (!client) {
		return <div>Loading...</div>
	}

	return (
		<>
			{/* <InvoicePDF locale={locale} number={number} /> */}
			<InvoicePDF locale='en' number='666' />
			{/* <PDFDownloadLink document={<InvoicePDF/>} filename="Immortalitypass">Download</PDFDownloadLink> */}
		</>
	)
}
