'use client'

import { Popover } from '@ark-ui/react'
import { PiGlobe } from 'react-icons/pi'
import Link from 'next/link'

import { usePathname } from 'next/navigation'

const languages = [
	{
		value: 'en',
		label: 'English',
	},

	{
		value: 'es',
		label: 'Español',
	},
	{
		value: 'pl',
		label: 'Polski',
	},
]

export const PopoverLang = ({ styles, locale, theme }) => {
	const pathname = usePathname()

	console.log(theme)

	function handleLink(pathname, language) {
		const pathArray = pathname.split('/')
		pathArray[1] = language
		return pathArray.join('/')
	}

	return (
		<Popover.Root>
			<Popover.Trigger>
				<Popover.Indicator>
					<PiGlobe className={styles} />
				</Popover.Indicator>
			</Popover.Trigger>
			<Popover.Positioner>
				<Popover.Content>
					<ul
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '120px',
							backgroundColor: theme === 'light' || theme==='system' ? '#1f1d1d' : '#C94747',
							fontSize: '16px',
							fontWeight: '300',
						}}
					>
						{languages.map(lang => {
							const url = handleLink(pathname, lang.value)

							return (
								<li
									key={lang.value}
									style={{
										display: locale === lang.value ? 'none' : 'flex',
										justifyContent: 'center',
										padding: '10px 0',
										width: '100%',
										height: '100%',
									}}
								>
									<Link href={url}>{lang.label}</Link>
								</li>
							)
						})}
					</ul>
				</Popover.Content>
			</Popover.Positioner>
		</Popover.Root>
	)
}
