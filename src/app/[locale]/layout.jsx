import { Open_Sans } from 'next/font/google'
import '../styles/globals.scss'
import Footer from '../_components/Footer'
import Header from '../_components/Header'

import Providers from '../providers'

const openSans = Open_Sans({ subsets: ['latin'] })

export const revalidate = 1000

export default function RootLayout({ children, params: { locale } }) {
	return (
		<html lang={locale}>
			<body className={openSans.className}>
				<Providers>
					<Header locale={locale} />
					<div className='wrapper'>
						
						{children}
						<Footer locale={locale} />
					</div>
				</Providers>
			</body>
		</html>
	)
}
