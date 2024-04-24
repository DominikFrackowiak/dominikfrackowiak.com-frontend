function handleLocaleText(data, locale) {
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



export default async function getMainPageData(locale) {
	const res = await fetch(
		'http://192.168.1.132:1410/api/main-page?populate=*',
		{
			next: { revalidate: 10 },
		}
	)
	const data = await res.json()
	const textData = handleLocaleText(data, locale)
 return textData
}
