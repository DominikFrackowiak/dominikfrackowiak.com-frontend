import { HiMiniBolt } from 'react-icons/hi2'
import TextToAnimate from '../_components/TextToAnimate'

export default async function Home({ params: { locale }}, searchParams) {
	console.log(searchParams)
	const res = await fetch('http://localhost:1410/api/main-page?populate=*', {
		next: { revalidate: 10 },
	})
	const data = await res.json()

	const handleLocaleText = locale => {
		switch (locale) {
			case 'es':
				return data.data.attributes.localizations.data[1].attributes
				break
			case 'pl':
				return data.data.attributes.localizations.data[0].attributes
				break
			default:
				return data.data.attributes
		}
	}

	let textData = handleLocaleText(locale)

	const items = [
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
