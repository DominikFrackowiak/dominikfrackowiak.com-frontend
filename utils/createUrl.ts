import { ReadonlyURLSearchParams } from 'next/navigation'

export function createUrl(
	pathname: String,
	params: URLSearchParams | ReadonlyURLSearchParams
) {
	const paramsString = params.toString()
	const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

	return `${pathname}${queryString}`
}
