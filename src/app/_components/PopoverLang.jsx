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

export const PopoverLang = ({ styles, locale }) => {
	const pathname = usePathname()
	console.log(pathname.split('/'))

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
							gap: '15px',
							width: '120px',
							backgroundColor: '#C94747',
							fontSize: '18px',
							fontWeight: '300',
						}}
					>
						{languages.map(lang => {
							const url = handleLink(pathname, lang.value)
							console.log(locale, lang.value)
							return (
								<li
									key={lang.value}
									style={{
										display: locale === lang.value ? 'none' : 'flex',
										justifyContent: 'center',
										padding: '10px 0',
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
