import { getClient } from '@/client'
import { gql } from '@apollo/client'

export default async function getPostsByTag(locale, tag) {
	const { data } = await getClient().query({
		query: gql`
			query NewQuery {
				posts(where: { categoryName: "${locale}", tag: "${tag}" }) {
					nodes {
     id
      slug
      title
      blocks(postTemplate: false)
      PostsAdditionalFields {
        
        en
        es
        pl
        
      }
      tags {
        nodes {
          name
        }
      }
    }
				}
			}
		`,
	})

	return data
}
