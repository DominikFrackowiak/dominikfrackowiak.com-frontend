export default function handleParagraphToRender(item) {
	const htmlTagRegex = /<[^>]+>/

	const paragraphToRender = htmlTagRegex.test(item) ? (
		<p className='paragraph' dangerouslySetInnerHTML={{ __html: item }}></p>
	) : (
		<p className='paragraph'>{item}</p>
	)

	return paragraphToRender
}
