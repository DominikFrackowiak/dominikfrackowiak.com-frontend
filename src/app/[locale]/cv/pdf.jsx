'use client'

import React from 'react'

import {
	Document,
	Page,
	View,
	Text,
	PDFViewer,
	Font,
} from '@react-pdf/renderer'
import { useState, useEffect } from 'react'

function getPDFTranslations(locale) {
	switch (locale) {
		case 'es':
			return {
				skills: 'Habilidades',
				level1: 'Hábil',
				level2: 'Medio',
				level3: 'Principiante',
				experience: 'Experiencia laboral',
				duration1: 'jul. 2023 - ene. 2024',
				duration2: 'ene. 2020 - jul. 2023',
				links: 'Sitio web y redes sociales',
				profile: 'Perfil personal',
				description:
					'Profesional en desarrollo web con tres años de experiencia como freelancer y siete meses en Incloudforever.com como desarrollador frontend junior, especializándome en Next.js/React.js, SCSS/Tailwind, TypeScript. Reconocido por mi dedicación y capacidad de trabajar de manera independiente, con buenas evaluaciones de supervisores y colegas. Actualmente ampliando mis conocimientos en Node.js/Express.js/MongoDB/Mongoose y Prisma/PostgreSQL. Comunicativo en tres idiomas, busco una posición donde pueda aplicar mis habilidades y contribuir al éxito de proyectos innovadores.',
				languages: 'Idiomas',
				PL: 'Polaco',
				ES: 'Español',
				EN: 'Ingles',
				langLevel1: 'Nativo',
				langLevel2: 'C2',
				langLevel3: 'C1',
				hobbies: 'Pasatiempos',
				music:
					'Música (soy totalmente poliamórico: escucho desde synth-pop hasta noise rock, y desde ambient hasta hardcore punk)',
				film: 'Cine (Buñuel, Wajda, Visconti, Lynch, hermanos Cohen etc.)',
				nature: 'Naturaleza, perros (comparto mi vida con dos bodegueros andaluces), bicicleta, viajar en mi furgoneta',
				books: 'Literatura (non-fiction, reportaje, ensayo de temática social)'
			}

		case 'pl':
			return {
				skills: 'Umiejętności',
				level1: 'Zaawansowany',
				level2: 'Średniozaawansowany',
				level3: 'Początkujący',
				experience: 'Doświadczenie zawodowe',
				duration1: 'lip. 2023 - sty. 2024',
				duration2: 'sty. 2020 - lip. 2023',
				links: 'Strona internetowa i media społecznościowe',
				profile: 'Profil osobisty',
				description:
					'Profesjonalista w zakresie rozwoju stron internetowych z trzyletnim doświadczeniem jako freelancer i siedmiomiesięcznym stażem w Incloudforever.com jako junior frontend developer, specjalizujący się w Next.js/React.js, SCSS/Tailwind, TypeScript. Doceniany za oddanie i umiejętność samodzielnej pracy, z dobrą oceną od przełożonych i kolegów. Obecnie poszerzam swoją wiedzę w zakresie Node.js/Express.js/MongoDB/Mongoose oraz Prisma/PostgreSQL. Komunikatywny w trzech językach, szukam pozycji, gdzie mogę wykorzystać moje umiejętności i przyczynić się do sukcesu innowacyjnych projektów.',
				languages: 'Języki',
				PL: 'Polski',
				ES: 'Hiszpański',
				EN: 'Angielski',
				langLevel1: 'Język ojczysty',
				langLevel2: 'C2',
				langLevel3: 'C1',
				hobbies: 'Hobby',
				music:
					'Muzyka (jestem zupełnie poliamoryczny: słucham od synth-popu po noise rock, od ambientu po hardcore punk)',
				film: 'Film (Buñuel, Wajda, Visconti, Lynch, bracia Coen itp.)',
				nature:
					'Natura, psy (dzielię życie z dwoma bodegueros andaluzyjskimi), rower, podróże moją furgonetką',
				books: 'Literatura (non-fiction, reportaż, esej o tematyce społecznej)',
			}


		default:
			return {
				skills: 'Skills',
				level1: 'Advanced',
				level2: 'Intermediate',
				level3: 'Beginner',
				experience: 'Work Experience',
				duration1: 'Jul. 2023 - Jan. 2024',
				duration2: 'Jan. 2020 - Jul. 2023',
				links: 'Website and Social Media',
				profile: 'Personal Profile',
				description:
					'Web development professional with three years of experience as a freelancer and seven months at Incloudforever.com as a junior frontend developer, specializing in Next.js/React.js, SCSS/Tailwind, TypeScript. Recognized for my dedication and ability to work independently, with good evaluations from supervisors and colleagues. Currently expanding my knowledge in Node.js/Express.js/MongoDB/Mongoose, and Prisma/PostgreSQL. Communicative in three languages, seeking a position where I can apply my skills and contribute to the success of innovative projects.',
				languages: 'Languages',
				PL: 'Polish',
				ES: 'Spanish',
				EN: 'English',
				langLevel1: 'Native',
				langLevel2: 'C2',
				langLevel3: 'C1',
				hobbies: 'Hobbies',
				music:
					'Music (I am completely polyamorous: I listen from synth-pop to noise rock, and from ambient to hardcore punk)',
				film: 'Cinema (Buñuel, Wajda, Visconti, Lynch, Coen Brothers etc.)',
				nature:
					'Nature, dogs (I share my life with two Andalusian bodegueros), biking, traveling in my van',
				books: 'Literature (non-fiction, reportage, social themed essays)',
			}
	}
}

Font.register({
	family: 'Lato',
	fonts: [
		{ src: '/assets/fonts/Lato-Regular.ttf', fontWeight: 400 },
		{ src: '/assets/fonts/Lato-Bold.ttf', fontWeight: 700 },
		{ src: '/assets/fonts/Lato-Black.ttf', fontWeight: 900 },
	],
})

function PDF({ locale = 'en' }) {
	const translations = getPDFTranslations(locale)

	return (
		<Document>
			<Page
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: '15px',
					gap: '15px',
				}}
			>
				<View
					id='banner'
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignContent: 'center',
						height: '80px',
						padding: '20px',
						backgroundColor: '#ed4b32cf',
						borderRadius: '20px',
					}}
				>
					<View style={{ width: '60%', height: '100%', gap: '4px' }}>
						<Text
							style={{
								color: 'white',
								fontSize: '24px',
								fontWeight: '900',
							}}
						>
							Dominik Frackowiak
						</Text>
						<Text
							style={{
								color: 'white',
								fontSize: '12px',
							}}
						>
							Frontend Developer Junior
						</Text>
					</View>
					<View style={{ width: '40%', height: '100%', gap: '4px' }}>
						<Text
							style={{
								color: 'white',
								fontSize: '10px',
								textAlign: 'right',
							}}
						>
							dominikfrac@gmail.com
						</Text>
						<Text
							style={{
								color: 'white',
								fontSize: '10px',
								textAlign: 'right',
							}}
						>
							+34 654114393
						</Text>
						<Text
							style={{
								color: 'white',
								fontSize: '9px',
								textAlign: 'right',
							}}
						>
							dominikfrackowiak.com
						</Text>
					</View>
				</View>

				<View
					id='mainWrapper'
					style={{ display: 'flex', flexDirection: 'row' }}
				>
					<View
						id='leftSide'
						style={{
							width: '60vw',
							padding: '15px',
							display: 'flex',
							gap: '15px',
						}}
					>
						<Text style={{ fontSize: '12px', fontWeight: '700' }}>
							{translations.skills}
						</Text>

						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>React.js</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level1}
							</Text>
						</View>

						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>Next.js</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level1}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>TypeScript</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level2}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>JavaScript</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level1}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>SASS/SCSS</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level1}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>Tailwind</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level2}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>GIT</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level1}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>Strapi</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level1}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>Wordpress</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level2}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>Prisma</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level3}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>BEM</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level1}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>Node.js / Express.js</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level3}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>MongoDB / Mongoose</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.level3}
							</Text>
						</View>

						<Text style={{ fontSize: '12px', fontWeight: '700' }}>
							{translations.experience}
						</Text>

						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<View style={{ display: 'flex', gap: '4px' }}>
								<Text style={{ fontSize: '10px' }}>
									Frontend Developer Junior
								</Text>
								<Text style={{ fontSize: '8px' }}>
									{translations.duration1}
								</Text>
							</View>
							<Text
								style={{
									fontSize: '10px',
									lineHeight: '1',
									padding: '5px 10px',
									borderRadius: '10px',
									color: '#ed4b32cf',
									backgroundColor: '#e2867885',
								}}
							>
								Incloudforever.com
							</Text>
						</View>

						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<View style={{ display: 'flex', gap: '4px' }}>
								<Text style={{ fontSize: '10px' }}>
									Freelance Frontend Developer
								</Text>
								<Text style={{ fontSize: '8px' }}>
									{translations.duration2}
								</Text>
							</View>
							<Text
								style={{
									fontSize: '10px',
									lineHeight: '1',
									padding: '5px 10px',
									borderRadius: '10px',
									color: '#ed4b32cf',
									backgroundColor: '#e2867885',
								}}
							>
								Freelance
							</Text>
						</View>

						<Text style={{ fontSize: '12px', fontWeight: '700' }}>
							{translations.links}
						</Text>
						<View
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
								gap: '3px',
							}}
						>
							<Text style={{ fontSize: '10px' }}>
								https://github.com/DominikFrackowiak
							</Text>
							<Text style={{ fontSize: '10px' }}>
								https://www.linkedin.com/in/dominik-frackowiak/
							</Text>
							<Text style={{ fontSize: '10px' }}>
								https://dominikfrackowiak.com
							</Text>
						</View>
					</View>

					<View
						id='rightSide'
						style={{
							width: '40%',
							padding: '15px',
							display: 'flex',
							gap: '15px',
						}}
					>
						<Text style={{ fontSize: '12px', fontWeight: '700' }}>
							{translations.profile}
						</Text>
						<Text
							style={{
								fontSize: '10px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							{translations.description}
						</Text>
						<Text style={{ fontSize: '12px', fontWeight: '800' }}>
							{translations.languages}
						</Text>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>{translations.PL}</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.langLevel1}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>{translations.ES}</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.langLevel2}
							</Text>
						</View>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>{translations.EN}</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								{translations.langLevel3}
							</Text>
						</View>
						<Text style={{ fontSize: '12px', fontWeight: '800' }}>
							{translations.hobbies}
						</Text>

						<Text
							style={{
								fontSize: '10px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							{translations.music}
						</Text>
						<Text
							style={{
								fontSize: '10px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							{translations.film}
						</Text>
						<Text
							style={{
								fontSize: '10px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							{translations.nature}
						</Text>
						<Text
							style={{
								fontSize: '10px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							{translations.books}
						</Text>
					</View>
				</View>
			</Page>
		</Document>
	)
}

export default function PDFView({ locale, number }) {
	const [client, setClient] = useState(false)

	useEffect(() => {
		setClient(true)
	}, [])

	if (!client) {
		return <div>Loading...</div>
	}

	return (
		<PDFViewer style={{ width: '100%', minHeight: '100vh' }}>
			<PDF locale={locale} />
		</PDFViewer>
	)
}
