import { Fragment } from 'react'
import getMainPageData from '@/lib/getMainPageData'
import handleParagraphToRender from '@/utils/handleParagraphToRender'
import {
	handleDataToDisplay,
	handleHeadingsToDisplay,
} from '@/utils/handleDataToDisplay'

export async function generateMetadata({ params: { locale }, searchParams }) {
	const textData = await getMainPageData(locale)
	const theme = searchParams.theme || 'light'
	const title = textData?.metatitle || 'Dominik Frackowiak'
	const description = textData?.description || 'Dominik Frackowiak'

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
	const items = handleDataToDisplay(locale, textData)

	const main =
		menu !== 'true' ? (
			<main className='main'>
				{items.length > 0 &&
					items.map((item, index) => {
						return (
							<Fragment key={index}>
								{handleHeadingsToDisplay(locale, index)}
								{handleParagraphToRender(item)}
							</Fragment>
						)
					})}
			</main>
		) : null

	return main
}
