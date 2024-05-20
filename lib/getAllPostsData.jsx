import client from '@/client'
import { gql } from '@apollo/client'

export default async function getAllPostsData(locale) {
	const { data } = await client.query({
		query: gql`
			query NewQuery {
				posts(where: { categoryName: "${locale}" }) {
					nodes {
     id
      postId
      slug
      title
      blocks(postTemplate: false)
      PostsAdditionalFields {
        
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
