import { getClient } from '../client'
import { gql } from '@apollo/client'

export default async function getAllPostsSlugs(locale) {
	const { data } = await getClient().query({
		query: gql`
			query NewQuery {
				posts {
					nodes {
						slug
					}
				}
			}
		`,
	})

	return data
}
