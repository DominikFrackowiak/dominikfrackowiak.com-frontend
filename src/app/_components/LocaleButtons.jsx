import TextToAnimate from './TextToAnimate'
import LanguagePicker from './LanguagePicker'

import styles from './Footer.module.scss'

export default function LocaleButtons({ locales, currentLocale, className }) {
	let delayBase = 2.0
	return (
		<div className={className}>
			{locales.map(loc => (
				<button key={loc} className={styles.footerBtn}>
					<TextToAnimate delay={(delayBase += 0.1)}>
						<LanguagePicker lang={loc} locale={currentLocale} />
					</TextToAnimate>
				</button>
			))}
		</div>
	)
}
