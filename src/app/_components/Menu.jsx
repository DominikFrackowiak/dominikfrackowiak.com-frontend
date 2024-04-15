import Link from "next/link"

export default function Menu({locale}) {

  return (
		<main>
			<Link href={`/${locale}/pdf`}>//curriculum_vitae</Link>
			<Link href={`/${locale}/blog`}>//blog</Link>
			<Link href={`/${locale}`}>//start</Link>
		</main>
	)
}
