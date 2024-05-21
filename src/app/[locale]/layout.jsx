import { Roboto_Mono } from 'next/font/google'
import '../styles/globals.scss'
import Footer from '../_components/Footer'
import Header from '../_components/Header'
import Menu from '../_components/Menu'
import Providers from '../providers'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

// export const revalidate = 3600

export default function RootLayout({ children, params: { locale } }) {
	return (
		<html lang={locale}>
			<body className={robotoMono.className}>
				<Providers>
					<div className='wrapper'>
						<Header locale={locale} />
						<Menu locale={locale} />
						{children}
						<Footer locale={locale} />
					</div>
				</Providers>
			</body>
		</html>
	)
}
