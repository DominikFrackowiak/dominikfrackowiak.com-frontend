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
		'Technologies I work with',
		'Follow me',
		'E-mail',
		'Telephone',
		'Languages I speak',
		'Hobbies',
		'Music',
		'Film',
	],
	es: [
		'¡Bienvenido! Soy Dominik Frąckowiak, desarrollador web independiente con base en Madrid, España',
		'Tecnologías con las que trabajo',
		'Sígueme',
		'Correo electrónico',
		'Teléfono',
		'Idiomas que hablo',
		'Aficiones',
		'Música',
		'Cine',
	],
	pl: [
		'Witaj! Nazywam się Dominik Frąckowiak, jestem niezależnym programistą stron internetowych mieszkającym w Madrycie, Hiszpania',
		'Technologie, z którymi pracuję',
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
			<h2 aria-label role='heading' style={{ fontSize: '0px' }}>
				{heading}
			</h2>
		)
	} else {
		return (
			<h1 aria-label role='heading' style={{ fontSize: '0px' }}>
				{heading}
			</h1>
		)
	}
}
