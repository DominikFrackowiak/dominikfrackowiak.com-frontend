import { getClient } from '@/client'
import { gql } from '@apollo/client'

export default async function getSinglePostData(slug) {
	const { data } = await getClient().query({
		query: gql`
			query NewQuery {
				posts(where: { name: "${slug}" }) {
			   nodes {
      id
      postId
      slug
      title
      blocks(postTemplate: false, htmlContent: true)
      PostsAdditionalFields {
        metadescription
        metatitle
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
