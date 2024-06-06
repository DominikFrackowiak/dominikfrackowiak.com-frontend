'use client'

import { Popover } from '@ark-ui/react'
import { PiList } from 'react-icons/pi'
import Link from 'next/link'



const links = [
	{
		value: '/',
		label: 'Start',
	},

	{
		value: '/cv',
		label: 'Curriculum Vitae',
	},
	{
		value: '/blog',
		label: 'Blog',
	},
]

export const PopoverMenu = ({ styles, locale }) => {
	

	function handleLink(pathname, locale) {
		return `/${locale}${pathname}`
	}

	return (
		<Popover.Root>
			<Popover.Trigger>
				<Popover.Indicator>
					<PiList className={styles} />
				</Popover.Indicator>
			</Popover.Trigger>
			<Popover.Positioner>
				<Popover.Content>
					<ul
						style={{
							display: 'flex',
							flexDirection: 'column',

							width: '170px',
							backgroundColor: '#C94747',
							fontSize: '18px',
							fontWeight: '300',
						}}
					>
						{links.map(link => {
							const url = handleLink(link.value, locale)
							return (
								<li
									key={link.value}
									style={{
										display: 'flex',
										justifyContent: 'center',
										padding: '10px 0',
									}}
								>
									<Link href={url}>{link.label}</Link>
								</li>
							)
						})}
					</ul>
				</Popover.Content>
			</Popover.Positioner>
		</Popover.Root>
	)
}
