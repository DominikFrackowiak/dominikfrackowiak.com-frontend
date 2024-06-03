'use client'

import { PDF } from '../[locale]/cv/pdf'
import dynamic from 'next/dynamic'
import styles from './../[locale]/cv/cv.module.scss'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'] })

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
			className={`${styles.pdfDownloadLink}`}
		>
			<button className={`${className} bold underlined`}>
				{handleTranslation(locale)}
			</button>
		</PDFDownloadLink>
	)
}
