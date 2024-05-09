import TextToAnimate from './TextsAndIconsAnimation'
import LanguagePicker from './LanguagePicker'

import styles from './Footer.module.scss'

export default function LocaleButtons({ locales, currentLocale, className }) {
	let delayBase = 2.0
	return (
		<ul className={className}>
			{locales.map(loc => (
				<li key={loc}>
					<button className={styles.footerBtn}>
						<TextToAnimate delay={(delayBase += 0.1)}>
							<LanguagePicker lang={loc} locale={currentLocale} />
						</TextToAnimate>
					</button>
				</li>
			))}
		</ul>
	)
}
