// import { useSearchParams } from 'next/navigation'

export function useMenuState({searchParams}) {
	// const [searchParams] = useSearchParams()
	const menu = searchParams.get('menu')

	return {
		isOpen: menu === 'true',
		closeMenu: () => {
			/* Logic to close menu, possibly updating searchParams */
		},
	}
}
