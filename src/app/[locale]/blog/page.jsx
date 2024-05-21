import Link from 'next/link'

import getAllPostsData from '@/lib/getAllPostsData'

export default async function AllBlogsPage({ params }) {
	const { locale } = params

	const data = await getAllPostsData(locale)
	const allBlogs = data.posts.nodes
	
	console.log(allBlogs)

	return (
		<main className='main' style={{ zIndex: 1 }}>
			<ul>
				{allBlogs.map(blog => (
					<li key={blog.id} style={{ marginBottom: '30px' }}>
						<Link href={`blog/${blog.slug}`}>
							<h2>{blog.title}</h2>
							<p>
								<small>
									{blog.blocks[0].attributes.content.slice(0, 100)}...
								</small>
							</p>
							<small>Read more</small>
						</Link>
						<div style={{display: 'flex', gap: '20px'}}>
							
							{blog.tags.nodes.map(tag => (
								<button>
									<small>{tag.name}</small>
								</button>
							))}
						</div>
					</li>
				))}
			</ul>
		</main>
	)
}
