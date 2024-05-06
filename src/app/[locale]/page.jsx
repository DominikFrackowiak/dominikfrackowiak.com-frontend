import { HiMiniBolt } from 'react-icons/hi2'
import TextToAnimate from '../_components/TextToAnimate'
import getMainPageData from '@/lib/getMainPageData'

export async function generateMetadata({ params: { locale }, searchParams }) {
	const textData = await getMainPageData(locale)

	const title = textData?.metatitle || 'Dominik Frackowiak'
	const description = textData?.description || 'Dominik Frackowiak'
	const theme = searchParams?.theme || 'light'

	return {
		title,
		description,
		icons: {
			icon:
				theme === 'dark'
					? '/favicon-dark/favicon.ico'
					: '/favicon-light/favicon.ico',
		},
	}
}

export default async function Home({ params, searchParams }) {
	const menu = searchParams?.menu

	const { locale } = params
	const textData = await getMainPageData(locale)
	const items = textData
		? [
				textData.welcome,
				textData.technologies,
				textData.followme,
				textData.email,
				textData.telephone,
				textData.languages,
				textData.hobbies,
				textData.music,
				textData.film,
		  ]
		: []

	const htmlTagRegex = /<[^>]+>/

	const main =
		menu !== 'true' ? (
			<main className='main'>
				{items.length > 0 &&
					items.map((item, index) => (
						<TextToAnimate
							delay={1 + index * 0.1}
							key={index}
							style={{ width: '100%' }}
						>
							{htmlTagRegex.test(item) ? (
								<p
									className='paragraph'
									dangerouslySetInnerHTML={{ __html: item }}
								></p>
							) : (
								<p className='paragraph'>{item}</p>
							)}
							{index < items.length - 1 && <HiMiniBolt className='icon' />}
						</TextToAnimate>
					))}
			</main>
		) : null

	return  main 
}
