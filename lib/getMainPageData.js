import {getClient} from '../client'
import { gql } from '@apollo/client'

export default async function getMainPageData(locale) {
	// const res = await fetch(
	// 	'http://192.168.1.132:1410/api/main-page?populate=*',
	// 	{
	// 		next: { revalidate: 10 },
	// 	}

	const { data } = await getClient().query({
		query: gql`
			query NewQuery {
				nodeByUri(uri: "/homepage/${locale}/") {
					... on Homepage {
						homepage {
						    email
        film
        followme
        hobbies
        languages
        music
        technologies
        telephone
        welcome
        metadescription
        metatitle
						}
					}
				}
			}
		`,
	})

	return data?.nodeByUri?.homepage
}
