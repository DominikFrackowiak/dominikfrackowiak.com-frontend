import TextToAnimate from './TextsAndIconsAnimation'

export default function DynamicListContainer({
	children,
	data,
	className,
	delayBase,
}) {
	const calculateDelay = index => delayBase + 0.1 * index

	return (
		<ul className={`alignCenter ${className}`}>
			{data.map((el, index) => (
				<li key={el.key || el}>
					<TextToAnimate delay={calculateDelay(index)}>
						{children(el)}
					</TextToAnimate>
				</li>
			))}
		</ul>
	)
}
