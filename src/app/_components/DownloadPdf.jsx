'use client'

import { PDF } from '../[locale]/cv/pdf'
import dynamic from 'next/dynamic'

const handleTranslation = locale => {
	switch (locale) {
		case 'es':
			return 'descargar CV'
			break
		case 'pl':
			return 'pobierz CV'
			break
		default:
			return 'download CV'
	}
}

const PDFDownloadLink = dynamic(
	() => import('@react-pdf/renderer').then(mod => mod.PDFDownloadLink),
	{ ssr: false }
)

export default function DownloadPdf({ locale, className }) {
	return (
		<PDFDownloadLink
			document={<PDF locale={locale} />}
			fileName={`DominikFrackowiak_CV_${locale}.pdf`}
			style={{
				position: 'fixed',
				top: '30px',
				left: '50%',
				transform: 'translateX(-50%)',
				zIndex: '100',
				fontSize: '20px',
			}}
		>
			<button className={`${className} bold underlined`}>
				{handleTranslation(locale)}
			</button>
		</PDFDownloadLink>
	)
}
