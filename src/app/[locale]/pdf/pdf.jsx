'use client'

import React from 'react'

import {
	Document,
	Page,
	View,
	Text,
	Image,
	PDFViewer,
	Font,
} from '@react-pdf/renderer'
import { useState, useEffect } from 'react'

function getPDFTranslations(locale) {
	switch (locale) {
		case 'es':
			return {
				text1: 'Este documento',
				text2: 'dará la',
				text3: 'inmortalidad',
				text4: 'a quien lo posea',
				text5: 'Cupón de descuento',
				text6: 'Regístrate',
				text7: `en incloudforver.com/${locale}`,
				text8: 'eligiendo el plan premium',
				text9: 'Pago',
				text10: 'Incluye tu cupón',
				text11: 'en los métodos',
				text12: 'de pago',
				text13: 'Crea',
				text14: 'Incluye tu cupón',
				text15: 'en los métodos',
				text16: 'Registro',
				text17: 'Siguiente',
				text18: 'Pago',
				text19: 'Tengo un cupón',
			}
		case 'en':
			return {
				text1: 'This document',
				text2: 'will grant',
				text3: 'immortality',
				text4: 'to its possessor',
				text5: 'Discount coupon',
				text6: 'Register',
				text7: `at incloudforever.com/${locale}`,
				text8: 'choosing the premium plan',
				text9: 'Payment',
				text10: 'Include your coupon',
				text11: 'in the payment',
				text12: 'methods',
				text13: 'Create',
				text14: 'Include your coupon',
				text15: 'in the methods',
				text16: 'Registration',
				text17: 'Next',
				text18: 'Payment',
				text19: 'I have a coupon',
			}
		case 'de':
			return {
				text1: 'Dieses Dokument',
				text2: 'wird Unsterblichkeit',
				text3: 'verleihen',
				text4: 'dem Besitzer',
				text5: 'Rabattgutschein',
				text6: 'Registrieren',
				text7: `bei incloudforever.com/${locale}`,
				text8: 'wähle den Premium-Plan',
				text9: 'Zahlung',
				text10: 'Fügen Sie Ihren Gutschein hinzu',
				text11: 'bei den Zahlungsmethoden',
				text12: 'Methoden',
				text13: 'Erstellen',
				text14: 'Fügen Sie Ihren Gutschein hinzu',
				text15: 'bei den Methoden',
				text16: 'Registrierung',
				text17: 'Weiter',
				text18: 'Zahlung',
				text19: 'Ich habe einen Gutschein',
			}
		case 'fr':
			return {
				text1: 'Ce document',
				text2: 'accordera',
				text3: "l'immortalité",
				text4: 'à son possesseur',
				text5: 'Coupon de réduction',
				text6: 'Inscrivez-vous',
				text7: `sur incloudforever.com/${locale}`,
				text8: 'en choisissant le plan premium',
				text9: 'Paiement',
				text10: 'Incluez votre coupon',
				text11: 'dans les méthodes',
				text12: 'de paiement',
				text13: 'Créer',
				text14: 'Incluez votre coupon',
				text15: 'dans les méthodes',
				text16: 'Inscription',
				text17: 'Suivant',
				text18: 'Paiement',
				text19: "J'ai un coupon",
			}
		// case 'ja':
		//   return {
		//     text1: 'この文書は',
		//     text2: '不死',
		//     text3: 'を与える',
		//     text4: '所有者に',
		//     text5: '割引クーポン',
		//     text6: '登録',
		//     text7: `incloudforever.com/${locale}で`,
		//     text8: 'プレミアムプランを選択',
		//     text9: '支払い',
		//     text10: 'クーポンを含める',
		//     text11: '支払い方法で',
		//     text12: '方法',
		//     text13: '作成',
		//     text14: 'クーポンを含める',
		//     text15: '方法で'
		//   }
		// case 'ko':
		//   return {
		//     text1: '이 문서는',
		//     text2: '불사를',
		//     text3: '부여할 것이다',
		//     text4: '소유자에게',
		//     text5: '할인 쿠폰',
		//     text6: '등록',
		//     text7: `incloudforever.com/${locale} 에서`,
		//     text8: '프리미엄 플랜 선택',
		//     text9: '결제',
		//     text10: '쿠폰 포함',
		//     text11: '결제 방법에',
		//     text12: '방법들',
		//     text13: '생성',
		//     text14: '쿠폰 포함',
		//     text15: '방법들에'
		//   }
		case 'pt':
			return {
				text1: 'Este documento',
				text2: 'concederá',
				text3: 'imortalidade',
				text4: 'ao seu possuidor',
				text5: 'Cupom de desconto',
				text6: 'Registre-se',
				text7: `em incloudforever.com/${locale}`,
				text8: 'escolhendo o plano premium',
				text9: 'Pagamento',
				text10: 'Inclua seu cupom',
				text11: 'nos métodos',
				text12: 'de pagamento',
				text13: 'Criar',
				text14: 'Inclua seu cupom',
				text15: 'nos métodos',
				text16: 'Registro',
				text17: 'Próximo',
				text18: 'Pagamento',
				text19: 'Tenho um cupom',
			}

		default:
			return {
				text1: 'This document',
				text2: 'will grant',
				text3: 'immortality',
				text4: 'to its possessor',
				text5: 'Discount coupon',
				text6: 'Register',
				text7: `at incloudforever.com/${locale}`,
				text8: 'choosing the premium plan',
				text9: 'Payment',
				text10: 'Include your coupon',
				text11: 'in the payment',
				text12: 'methods',
				text13: 'Create',
				text14: 'Include your coupon',
				text15: 'in the methods',
				text16: 'Registration',
				text17: 'Next',
				text18: 'Payment',
				text19: 'I have a coupon',
			}
	}
}

Font.register({
	family: 'Avenir',
	fonts: [
		{ src: '/assets/fonts/Avenir-Light.ttf', fontWeight: 100 },
		{ src: '/assets/fonts/Avenir-Book.ttf', fontWeight: 300 },
		{ src: '/assets/fonts/Avenir-Medium.ttf', fontWeight: 700 },
		{ src: '/assets/fonts/Avenir-Heavy.ttf', fontWeight: 800 },
		{ src: '/assets/fonts/Avenir-Black.ttf', fontWeight: 900 },
	],
})

function PDF({ locale = 'en', number = '666' }) {
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
				// Banner
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
								fontWeight: '700',
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
				// Main Wrapper
				<View
					id='mainWrapper'
					style={{ display: 'flex', flexDirection: 'row' }}
				>
					// Left column
					<View
						id='leftSide'
						style={{
							width: '60%',
							padding: '15px',
							display: 'flex',
							gap: '15px',
						}}
					>
						// Skills
						<Text style={{ fontSize: '12px', fontWeight: '800' }}>
							Habilidades
						</Text>
						// Skill
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
								Hábil
							</Text>
						</View>
						// Skill
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
								Hábil
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
								Principiante
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
								Hábil
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
								Hábil
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
								Medio
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
								Hábil
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
								Hábil
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
								Medio
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
								Principiante
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
								Hábil
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
								Principiante
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
								Principiante
							</Text>
						</View>
						// End single skill // End skills // Experiences
						<Text style={{ fontSize: '12px', fontWeight: '800' }}>
							Experiencia laboral
						</Text>
						// Experience
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
								<Text style={{ fontSize: '8px' }}>jul. 2023 - ene. 2024</Text>
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
						// End of experience
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
								<Text style={{ fontSize: '8px' }}>ene. 2020 - jul. 2023</Text>
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
						// End of experience // End of experiences // Social media
						<Text style={{ fontSize: '12px', fontWeight: '800' }}>
							Sitio web y redes sociales
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
						// End of social media
					</View>
					// Right column
					<View
						id='rightSide'
						style={{
							width: '60%',
							padding: '15px',
							display: 'flex',
							gap: '15px',
						}}
					>
						<Text style={{ fontSize: '12px', fontWeight: '800' }}>
							Perfil personal
						</Text>
						<Text
							style={{
								fontSize: '10px',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							Profesional en desarrollo web con tres años de experiencia como
							freelancer y siete meses en Incloudforever.com como desarrollador
							frontend junior, especializándome en Next.js/React.js,
							SCSS/TypeScript. Reconocido por mi dedicación y capacidad de
							trabajar de manera independiente, con buenas evaluaciones de
							supervisores y colegas. Actualmente ampliando mis conocimientos en
							Node.js/Express.js/MongoDB/Mongoose y Prisma/PostgreSQL.
							Comunicativo en tres idiomas, busco una posición donde pueda
							aplicar mis habilidades y contribuir al éxito de proyectos
							innovadores.
						</Text>
						<Text style={{ fontSize: '12px', fontWeight: '800' }}>Idiomas</Text>
						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								paddingBottom: '8px',
								borderBottom: '1px dotted black',
							}}
						>
							<Text style={{ fontSize: '10px' }}>Polaco</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>
								Nativo
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
							<Text style={{ fontSize: '10px' }}>Español</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>C2</Text>
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
							<Text style={{ fontSize: '10px' }}>Ingles</Text>
							<Text style={{ fontSize: '10px', color: '#ed4b32cf' }}>C1</Text>
						</View>
						<Text style={{ fontSize: '12px', fontWeight: '800' }}>
							Pasatiempos
						</Text>

						<Text style={{ fontSize: '10px', paddingBottom: '8px',
								borderBottom: '1px dotted black', }}>
							Música (soy totalmente poliamórico: escucho desde synth-pop hasta
							noise rock, y desde ambient hasta hardcore punk)
						</Text>
						<Text style={{ fontSize: '10px', paddingBottom: '8px',
								borderBottom: '1px dotted black', }}>
							Cine (Buñuel, Wajda, Visconti, Lynch, hermanos Cohen etc.)
						</Text>
						<Text style={{ fontSize: '10px', paddingBottom: '8px',
								borderBottom: '1px dotted black', }}>
							Naturaleza, perros (comparto mi vida con dos bodegueros
							andaluces), bicicleta, viajar en mi furgoneta
						</Text>
						<Text style={{ fontSize: '10px', paddingBottom: '8px',
								borderBottom: '1px dotted black', }}>
							Literatura (non-fiction, reportaje, ensayo de temática social)
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
			<PDF locale={locale} number={number} />
		</PDFViewer>
	)
}
