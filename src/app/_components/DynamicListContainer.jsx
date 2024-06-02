export default function DynamicListContainer({
	children,
	data,
	className,
	styles,
}) {
	return (
		<ul className={`alignCenter ${className}`}>
			{data.map((el, index) => (
				<li key={el.key || index} style={styles}>
					{children(el, index)}
				</li>
			))}
		</ul>
	)
}
