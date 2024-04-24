import { HiMiniBolt } from 'react-icons/hi2'
import TextToAnimate from '../_components/TextToAnimate'
import getMainPageData from '@/lib/getMainPageData'

export async function generateMetadata({ params: { locale } }) {
	const textData = await getMainPageData(locale)
	return {
		title: textData.metaTitle,
		description: textData.metaDescription,
	}
}

export default async function Home({ params }) {
	const { locale } = params

	const textData = await getMainPageData(locale)

	const items = textData
		? [
				textData.welcome,
				textData.technologies,
				textData.followMe,
				textData.email,
				textData.telephone,
				textData.languages,
				textData.hobbies,
				textData.music,
				textData.films,
				
		  ]
		: []

	return (
		<main className='main'>
			{items.length &&
				items.map((item, index) => (
					<div key={index} style={{ width: '100%' }}>
						<TextToAnimate delay={1 + index * 0.1}>
							<div
								className='paragraph'
								dangerouslySetInnerHTML={{ __html: item }}
							></div>
							{index < items.length - 1 && <HiMiniBolt className='icon' />}
						</TextToAnimate>
					</div>
				))}
		</main>
	)
}
