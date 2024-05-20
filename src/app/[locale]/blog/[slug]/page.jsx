import getSinglePostData from '@/lib/getSinglePostData'
import { v4 as uuid } from 'uuid'

export default async function BlogPage({ params: { slug } }) {
	const data = await getSinglePostData(slug)

	const blog = data.posts.nodes[0]
	// console.log(blog)

function extractCodeFromHTML(htmlString) {
	const regex = /<pre class="wp-block-code"><code>(.*?)<\/code><\/pre>/gs
	const match = regex.exec(htmlString)
	return match ? match[1] : ''
}


function handleHeadings(element){
	switch(element.level){
		case 1: return <h1 key={uuid()}>{element.content}</h1>
		return
		case 2: return <h2 key={uuid()}>{element.content}</h2>
	}
}



	// console.log(blog.blocks)
	return (
		<main className='main'>
			<h1>{blog.title}</h1>
			{blog.blocks.map(block => {
				
				if (block.name === 'core/paragraph') {
					return <p key={uuid()}>{block.attributes.content}</p>
				}
				if (block.name === 'core/code') {
					block.htmlContent
					const extractedCode = extractCodeFromHTML(block.htmlContent)
					console.log( extractedCode)
					return (
						<code key={uuid()}>
							{extractedCode}
						</code>
					)
				}
				if(block.name==='core/heading'){
					 const heading = handleHeadings(block.attributes)
						
						return heading
				}
			})}
		</main>
	)
}
