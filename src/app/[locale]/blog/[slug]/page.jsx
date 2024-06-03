import getSinglePostData from '@/lib/getSinglePostData'
import { v4 as uuid } from 'uuid'
import parse from 'html-react-parser'

import styles from '../blog.module.scss'
import getAllPostsSlugs from '@/lib/getAllPostsSlugs'

// export async function generateStaticParams() {
// 	const data = await getAllPostsSlugs()
// 	return data.posts.nodes.map(slug => ({
// 		slug: slug.slug,
// 	}))
// }

export default async function BlogPage({ params: { slug } }) {
	const data = await getSinglePostData(slug)

	const blog = data.posts.nodes[0]

	// function extractCodeFromHTML(htmlString) {
	// 	const regex = /<pre class="wp-block-code"><code>(.*?)<\/code><\/pre>/gs
	// 	const match = regex.exec(htmlString)
	// 	return match ? match[1] : ''
	// }

	// function convertSpacesToNbsp(htmlContent) {
	// 	return htmlContent.replace(/(?<=\s)\s/g, '&nbsp;')
	// }

	function handleHeadings(element) {
		switch (element.level) {
			case 1:
				return <h1 key={uuid()}>{element.content}</h1>
				break
			case 2:
				return <h2 key={uuid()}>{element.content}</h2>
		}
	}

	// console.log(blog)
	return (
		<main className='main'>
			<h1>{blog.title}</h1>
			{blog.blocks.map(block => {
				if (block.name === 'core/paragraph') {
					return (
						<p className={styles.paragraph} key={uuid()}>
							{block.attributes.content}
						</p>
					)
				}

				if (block.name === 'core/preformatted') {
					return <div key={uuid()}>{parse(block.htmlContent)}</div>
				}
				if (block.name === 'core/heading') {
					const heading = handleHeadings(block.attributes)

					return heading
				}
			})}
		</main>
	)
}
