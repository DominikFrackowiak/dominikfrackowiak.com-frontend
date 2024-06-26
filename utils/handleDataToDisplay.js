import Underline from "../src/app/_components/Underline"


export function handleDataToDisplay(locale, textData) {
	const items = textData
		? [
				textData.welcome,
				textData.technologies,
				textData.followme,
				textData.email,
				textData.telephone,
				textData.languages,
				textData.hobbies,
				textData.music,
				textData.film,
		  ]
		: []

	return items
} 



const headingsToDisplay = {
	en: [
		"Welcome! I'm Dominik Frąckowiak, freelance web developer based in Madrid, Spain",
		// 'Welcome',
		'Technologies',
		'Follow me',
		'E-mail',
		'Telephone',
		'Languages',
		'Hobbies',
		'Music',
		'Film',
	],
	es: [
		'¡Bienvenido! Soy Dominik Frąckowiak, desarrollador web independiente con base en Madrid, España',
		// '¡Bienvenido!',
		'Tecnologías',
		'Sígueme',
		'Correo electrónico',
		'Teléfono',
		'Idiomas',
		'Aficiones',
		'Música',
		'Cine',
	],
	pl: [
		'Witaj! Nazywam się Dominik Frąckowiak, jestem niezależnym programistą stron internetowych mieszkającym w Madrycie, Hiszpania',
		// 'Witaj!',
		'Technologie',
		'Śledź mnie',
		'E-mail',
		'Telefon',
		'Języki, którymi mówię',
		'Hobby',
		'Muzyka',
		'Film',
	],
}

export function handleHeadingsToDisplay(locale, index) {
	const heading = headingsToDisplay[locale][index]

	if (index !== 0) {
		return (
			
				<div>
					<h2 aria-label role='heading'>
						{heading}
					</h2>
					<Underline
						style={{
							animationDelay: `${index * 0.2}s`,
						}}
					/>
				</div>
			
		)
	} else {
		return (
			<h1 aria-label role='heading' style={{ height: 0, fontSize: '0px' }}>
				{heading}
			</h1>
		)
	}

		// return (
		// 	<h2 aria-label role='heading' style={{fontWeight: 400}}>
		// 		{heading}
		// 	</h2>
		// )
}
