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

function getPDFTranslations(locale) {
	switch (locale) {
		case 'es':
			return {
				skills: 'Habilidades',
				level1: 'Avanzado',
				level2: 'Intermedio',
				level3: 'Principiante',
				experience: 'Experiencia profesional',
				duration3: 'jul. 2024 - ahora',
				duration1: 'oct. 2022 – mar. 2024',
				duration2: 'oct. 2019 - oct. 2022',
				links: 'Sitio web y redes sociales',
				profile: 'Perfil personal',
				description:
					'Profesional en desarrollo web con tres años de experiencia como freelancer y un año y medio como desarrollador frontend junior en Incloudforever.com, especializado en Next.js/React.js, SCSS/Tailwind y TypeScript, actualmente trabajando como desarrollador frontend en Awakelab en Madrid. Reconocido por su dedicación y capacidad para trabajar de forma independiente, con altas valoraciones de supervisores y colegas. Actualmente estoy ampliando mis conocimientos en Node.js/Express.js/MongoDB/Mongoose y Prisma/PostgreSQL. Comunicativo en tres idiomas, busco una posición donde pueda utilizar mis habilidades y contribuir al éxito de proyectos innovadores.',
				languages: 'Idiomas',
				PL: 'Polaco',
				ES: 'Español',
				EN: 'Inglés',
				langLevel1: 'Lengua materna',
				langLevel2: 'C2',
				langLevel3: 'C1',
				hobbies: 'Aficiones',
				music:
					'Música (soy completamente poliamoroso: desde synth-pop hasta noise rock, desde ambient hasta hardcore punk)',
				film: 'Cine (Buñuel, Wajda, Visconti, Lynch, hermanos Coen, etc.)',
				nature:
					'Naturaleza, perros (comparto mi vida con dos perros de la raza bodeguero andaluz), bicicleta, viajar en mi furgoneta',
				books:
					'Literatura (no ficción, reportaje, ensayo sobre temas sociales)',
			}

		case 'pl':
			return {
				skills: 'Umiejętności',
				level1: 'Zaawansowany',
				level2: 'Średniozaawansowany',
				level3: 'Początkujący',
				experience: 'Doświadczenie zawodowe',
				duration3: 'lip. 2024 - teraz',
				duration1: 'paź. 2022 – mar. 2024',
				duration2: 'paź. 2019 - paź. 2022',
				links: 'Strona internetowa i media społecznościowe',
				profile: 'Profil osobisty',
				description:
					'Profesjonalista w zakresie rozwoju stron internetowych z trzyletnim doświadczeniem jako freelancer i półtorarocznym stażem w Incloudforever.com jako junior frontend developer, specjalizujący się w Next.js/React.js, SCSS/Tailwind, TypeScript, aktualnie pracuję na pozycji frontend developera w Awakelab w Madrycie. Doceniany za oddanie i umiejętność samodzielnej pracy, z dobrą oceną od przełożonych i kolegów. Obecnie poszerzam swoją wiedzę w zakresie Node.js/Express.js/MongoDB/Mongoose oraz Prisma/PostgreSQL. Komunikatywny w trzech językach, szukam pozycji, gdzie mogę wykorzystać moje umiejętności i przyczynić się do sukcesu innowacyjnych projektów.',
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
					'Natura, psy (dzielię życie z dwoma psami rasy bodeguero andaluz), rower, podróże moją furgonetką',
				books: 'Literatura (non-fiction, reportaż, esej o tematyce społecznej)',
			}

		default:
			return {
				skills: 'Skills',
				level1: 'Advanced',
				level2: 'Intermediate',
				level3: 'Beginner',
				experience: 'Professional Experience',
				duration3: 'Jul. 024 - now',
				duration1: 'Oct. 2022 – Mar. 2024',
				duration2: 'Oct. 2019 - Oct. 2022',
				links: 'Website and Social Media',
				profile: 'Personal Profile',
				description:
					'A web development professional with three years of experience as a freelancer and one and a half years as a junior frontend developer at Incloudforever.com, specializing in Next.js/React.js, SCSS/Tailwind, and TypeScript, currently working as a frontend developer at Awakelab in Madrid. Recognized for dedication and the ability to work independently, with high praise from supervisors and colleagues. Currently expanding my knowledge in Node.js/Express.js/MongoDB/Mongoose and Prisma/PostgreSQL. Proficient in three languages, seeking a position where I can utilize my skills and contribute to the success of innovative projects.',
				languages: 'Languages',
				PL: 'Polish',
				ES: 'Spanish',
				EN: 'English',
				langLevel1: 'Native Language',
				langLevel2: 'C2',
				langLevel3: 'C1',
				hobbies: 'Hobbies',
				music:
					'Music (I am completely polyamorous: from synth-pop to noise rock, from ambient to hardcore punk)',
				film: 'Film (Buñuel, Wajda, Visconti, Lynch, Coen brothers, etc.)',
				nature:
					'Nature, dogs (sharing my life with two Andalusian Bodeguero dogs), cycling, traveling in my van',
				books: 'Literature (non-fiction, reportage, essay on social themes)',
			}
	}
}

Font.register({
	family: 'Roboto',
	fonts: [
		{ src: '/assets/fonts/Roboto-Regular.ttf', fontWeight: 400 },
		{ src: '/assets/fonts/Roboto-Medium.ttf', fontWeight: 500 },
		{ src: '/assets/fonts/Roboto-Bold.ttf', fontWeight: 700 },
	],
})

export function PDF({ locale }) {
	const translations = getPDFTranslations(locale)

	return (
		<Document title='DominikFrackowiak_CV'>
			<Page
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: '15px',
					gap: '10px',
				}}
			>
				<View
					id='banner'
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignContent: 'center',
						height: '75px',
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
								fontFamily: 'Roboto',
								fontWeight: '700',
							}}
						>
							Dominik Frackowiak
						</Text>
						<Text
							style={{
								fontFamily: 'Roboto',
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
								fontFamily: 'Roboto',
								color: 'white',
								fontSize: '10px',
								textAlign: 'right',
							}}
						>
							dominikfrac@gmail.com
						</Text>
						<Text
							style={{
								fontFamily: 'Roboto',
								color: 'white',
								fontSize: '10px',
								textAlign: 'right',
							}}
						>
							+34 654114393
						</Text>
						<Text
							style={{
								fontFamily: 'Roboto',
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
							gap: '16px',
						}}
					>
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '11px',
								fontWeight: '500',
								color: '#ed4b32cf',
							}}
						>
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								React.js
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								Next.js
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								Astro.js
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								TypeScript
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								JavaScript
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								SASS/SCSS
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								Tailwind
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>GIT</Text>
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								Strapi
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								Wordpress
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								Prisma
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>BEM</Text>
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								Node.js / Express.js
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								MongoDB / Mongoose
							</Text>
						</View>

						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '11px',
								fontWeight: '500',
								color: '#ed4b32cf',
							}}
						>
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
								<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
									Frontend Developer
								</Text>
								<Text style={{ fontFamily: 'Roboto', fontSize: '8px' }}>
									{translations.duration3}
								</Text>
							</View>
							<Text
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									height: '90%',
									fontFamily: 'Roboto',
									fontSize: '9px',
									lineHeight: '1',
									padding: '5px 10px',
									borderRadius: '10px',
									color: '#ed4b32cf',
									backgroundColor: '#e2867885',
								}}
							>
								Awakelab
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
								<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
									Frontend Developer Junior
								</Text>
								<Text style={{ fontFamily: 'Roboto', fontSize: '8px' }}>
									{translations.duration1}
								</Text>
							</View>
							<Text
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									height: '90%',
									fontFamily: 'Roboto',
									fontSize: '9px',
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
								<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
									Freelance Frontend Developer
								</Text>
								<Text style={{ fontFamily: 'Roboto', fontSize: '8px' }}>
									{translations.duration2}
								</Text>
							</View>
							<Text
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									height: '90%',
									fontFamily: 'Roboto',
									fontSize: '9px',
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
					</View>

					<View
						id='rightSide'
						style={{
							width: '45%',
							padding: '15px',
							display: 'flex',
							gap: '14px',
						}}
					>
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '11px',
								fontWeight: '500',
								color: '#ed4b32cf',
							}}
						>
							{translations.profile}
						</Text>
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '9px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
								lineHeight: '1.5',
							}}
							lang={locale}
						>
							{translations.description}
						</Text>
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '11px',
								fontWeight: '500',
								color: '#ed4b32cf',
							}}
						>
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								{translations.PL}
							</Text>
							<Text
								style={{
									fontFamily: 'Roboto',
									fontSize: '9px',
									color: '#ed4b32cf',
								}}
							>
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								{translations.ES}
							</Text>
							<Text
								style={{
									fontFamily: 'Roboto',
									fontSize: '9px',
									color: '#ed4b32cf',
								}}
							>
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
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								{translations.EN}
							</Text>
							<Text
								style={{
									fontFamily: 'Roboto',
									fontSize: '9px',
									color: '#ed4b32cf',
								}}
							>
								{translations.langLevel3}
							</Text>
						</View>
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '11px',
								fontWeight: '500',
								color: '#ed4b32cf',
							}}
						>
							{translations.hobbies}
						</Text>

						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '9px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
								lineHeight: '1.5',
							}}
						>
							{translations.music}
						</Text>
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '9px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
								lineHeight: '1.5',
							}}
						>
							{translations.film}
						</Text>
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '9px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
								lineHeight: '1.5',
							}}
						>
							{translations.nature}
						</Text>
						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '9px',
								paddingBottom: '8px',
								lineHeight: '1.5',
							}}
						>
							{translations.books}
						</Text>

						<Text
							style={{
								fontFamily: 'Roboto',
								fontSize: '11px',
								fontWeight: '500',
								color: '#ed4b32cf',
							}}
						>
							{translations.links}
						</Text>
						<View
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								paddingBottom: '8px',

								gap: '3px',
							}}
						>
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								https://github.com/DominikFrackowiak
							</Text>
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								https://www.linkedin.com/in/dominik-frackowiak/
							</Text>

							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								https://codepen.io/MarianKoniuszko/pens/popular
							</Text>
							<Text style={{ fontFamily: 'Roboto', fontSize: '9px' }}>
								https://dominikfrackowiak.com
							</Text>
						</View>
					</View>
				</View>
			</Page>
		</Document>
	)
}

export default function PDFView({ locale }) {
	return (
		<PDFViewer
			style={{ width: '100%', minHeight: '140vh' }}
			filename='DominikFrackowiak_CV'
		>
			<PDF locale={locale} />
		</PDFViewer>
	)
}
