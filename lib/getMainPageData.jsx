import client from '@/client'
import { gql } from '@apollo/client'

export default async function getMainPageData(locale) {
	// const res = await fetch(
	// 	'http://192.168.1.132:1410/api/main-page?populate=*',
	// 	{
	// 		next: { revalidate: 10 },
	// 	}
	console.log(locale)
	const { data } = await client.query({
		query: gql`
  query NewQuery {
    nodeByUri(uri: "/${locale}/") {
      ... on Page {
        blocks(postTemplate: false)
      }
    }
  }
`,
	})

	return data.nodeByUri.blocks
}
