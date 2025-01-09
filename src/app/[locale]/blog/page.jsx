import Link from 'next/link'

import getAllPostsData from '../../../../lib/getAllPostsData'
import getPostsByTag from '../../../../lib/getPostsByTag'

import styles from './blog.module.scss'
import { createUrl } from '../../../../utils/createUrl'

import { headers } from 'next/headers'
import BackToAllPosts from '../../_components/BackToAllPosts'
import Underline from '../../_components/Underline'

function handleReadMoreButtonInternationalization(locale) {
	switch (locale) {
		case 'es':
			return 'Leer más'

		case 'pl':
			return 'Czytaj więcej'

		default:
			return 'Read more'
	}
}

export async function generateMetadata({ params: { locale }, searchParams }) {
	// const textData = await getMainPageData(locale)
	const theme = searchParams.theme || 'light'
	const title = 'Dominik Frackowiak | Blog'
	const description = 'Dominik Frackowiak | Blog'

	return {
		title,
		description,
		icons: {
			icon:
				theme === 'dark'
					? '/favicon-dark/favicon.png'
					: '/favicon-light/favicon.png',
		},
	}
}

export default async function AllBlogsPage({
	params: { locale },
	searchParams: { tag },
}) {
	let data

	if (tag === undefined) {
		data = await getAllPostsData(locale)
	} else {
		data = await getPostsByTag(locale, tag)
	}

	const allBlogs = data.posts.nodes

	const headersList = headers()
	const pathname = headersList.get('x-invoke-path') || ''

	// console.log(allBlogs)

	return (
		<main className='main' style={{ zIndex: 1 }}>
			{tag && <BackToAllPosts locale={locale} />}
			<ul className={styles.list}>
				{allBlogs.map(blog => {
					return (
						<li
							key={blog.id}
							style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
						>
							<Link href={`blog/${blog.slug}`}>
								<h2 className={`${styles.heading2}`}>{blog.title}</h2>

								<p className='paragraph'>
									{blog.blocks[0].attributes.content.slice(0, 100)}...
								</p>
								<span className='underlined'>
									{handleReadMoreButtonInternationalization(locale)}
								</span>
							</Link>
							<div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
								{blog.tags.nodes.map(tag => {
									const tagSearchParams = new URLSearchParams()
									tagSearchParams.set('tag', tag.name)
									const tagUrl = createUrl(pathname, tagSearchParams)
									return (
										<button key={tag.name} className={styles.button}>
											<Link href={tagUrl}>
												<small>{tag.name}</small>
											</Link>
										</button>
									)
								})}
							</div>
						</li>
					)
				})}
			</ul>
		</main>
	)
}
