import getSinglePostData from '@/lib/getSinglePostData'
import React from 'react'

export default async function BlogPage({ params: { slug } }) {
	const data = await getSinglePostData(slug)

const blog = data.posts.nodes[0]

console.log(blog.blocks)
	return <main className='main'>
		<h1>{blog.title}</h1>
		{blog.blocks.map(block => {
			if(block.name==='core/paragraph'){
				return <p>{block.attributes.content}</p>
			}
		})}
	</main>
}
