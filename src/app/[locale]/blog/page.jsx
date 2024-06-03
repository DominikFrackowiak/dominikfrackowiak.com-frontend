import Link from 'next/link'

import getAllPostsData from '@/lib/getAllPostsData'
import getPostsByTag from '@/lib/getPostsByTag'
import styles from './blog.module.scss'

export async function generateStaticParams() {
	return [{ locale: 'es' }, { locale: 'en' }, { locale: 'pl' }]
}

export default async function AllBlogsPage({
	params: { locale },
	searchParams: { tag },
}) {
	let data
	console.log(tag)
	if (tag === undefined) {
		data = await getAllPostsData(locale)
	} else {
		data = await getPostsByTag(locale, tag)
	}

	const allBlogs = data.posts.nodes

	// console.log(allBlogs)

	return (
		<main className='main' style={{ zIndex: 1 }}>
			<ul className={styles.list}>
				{allBlogs.map(blog => (
					<li
						key={blog.id}
						style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
					>
						<Link href={`blog/${blog.slug}`}>
							<h2 className={`${styles.heading2} underline`}>{blog.title}</h2>
							<p className={styles.paragraph}>
								<small>
									{blog.blocks[0].attributes.content.slice(0, 100)}...
								</small>
							</p>
							<button className={styles.readMore}>
								Read more
							</button>
						</Link>
						<div style={{ display: 'flex', gap: '20px' }}>
							{blog.tags.nodes.map(tag => (
								<button key={tag.name} className={styles.button}>
									<Link href={`/${locale}/blog?tag=${tag.name}`}>
										<small>{tag.name}</small>
									</Link>
								</button>
							))}
						</div>
					</li>
				))}
			</ul>
		</main>
	)
}
