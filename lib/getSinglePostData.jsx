import client from '@/client'
import { gql } from '@apollo/client'

export default async function getSinglePostData(slug) {
	const { data } = await client.query({
		query: gql`
			query NewQuery {
				posts(where: { name: "${slug}" }) {
					nodes {
						id
						postId
						slug
						title
						blocks(postTemplate: false)
						PostsAdditionalFields {
							metadescription
							metatitle
							en
							es
							pl
						}
					}
				}
			}
		`,
	})

	return data
}
