import { HiMiniBolt } from 'react-icons/hi2'
import TextToAnimate from '../_components/TextToAnimate'
import getMainPageData from '@/lib/getMainPageData'

// export async function generateMetadata({ params: { locale } }) {
// 	const textData = await getMainPageData(locale)
// 	return {
// 		title: textData.metaTitle,
// 		description: textData.metaDescription,
// 	}
// }

export default async function Home({ params }) {
	const { locale } = params

	const textData = await getMainPageData(locale)

	return (
		<main className='main'>
			{textData &&
				textData.map((text, index) => (
					<div key={text}>
						<TextToAnimate delay={1 + index * 0.1}>
							{index < textData.length - 1 && <HiMiniBolt className='icon' />}
							<p className='paragraph'>{text.attributes.content}</p>
						</TextToAnimate>
					</div>
				))}
		</main>
	)
}
