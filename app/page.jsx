import Image from 'next/image'
import styles from './page.module.scss'

export default async function Home() {
	const res = await fetch('http://localhost:1337/api/main?populate=text', {
		next: { revalidate: 10 },
	})
	const data = await res.json()

	console.log(data.data.attributes.text)
	return (
		<main className={styles.main}>
			{data.data.attributes.text.map(item => (
				<p
					key={data.data.id}
					dangerouslySetInnerHTML={{ __html: item.Paragraph }}
				/>
			))}
		</main>
	)
}
