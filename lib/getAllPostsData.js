import { getClient } from '../client'
import { gql } from '@apollo/client'

export default async function getAllPostsData(locale) {
	const { data } = await getClient().query({
		query: gql`
			query NewQuery {
  posts(where: {categoryName: "${locale}"}) {
    nodes {
      id
      slug
      title
      blocks(postTemplate: false)
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        nodes {
          name
        }
      }
      PostsAdditionalFields {
        en
        es
        metadescription
        metatitle
        pl
        thumbnailimg {
          link
        }
      }
    }
  }
}
		`,
	})

	return data
}
