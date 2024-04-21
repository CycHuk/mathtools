import { evaluateFunction, derivativeFunction } from './functions.js'

function muellerMethod(func, a, b, eps) {
	let x_1 = a

	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	const header = ['K', 'x(K-2)', 'x(K-1)', `x(K)`, 'A', 'C', 'B', `q`, `x(K+1)`]
	let iterations = []

	let iter_count = 0

	let x_2 = x_1 - eps
	let x_3 = x_2 - eps

	while (Math.abs(x_3 - x_2) > eps || iter_count <= 1) {
		const funcX_1 = evaluateFunction(func, x_1)
		const funcX_2 = evaluateFunction(func, x_2)
		const funcX_3 = evaluateFunction(func, x_3)

		const q = (x_3 - x_2) / (x_2 - x_1)

		const A = q * funcX_3 - q * (1 + q) * funcX_2 + q ** 2 * funcX_1
		const B = (2 * q + 1) * funcX_3 - (1 + q) ** 2 * funcX_2 + q ** 2 * funcX_1
		const C = (1 + q) * funcX_3

		let x =
			x_3 -
			(2 * C * (x_3 - x_2)) /
				(B + Math.sqrt(B ** 2 - 4 * A * C) > 0
					? B + Math.sqrt(B ** 2 - 4 * A * C)
					: B - Math.sqrt(B ** 2 - 4 * A * C))

		iterations.push([
			iter_count,
			x_1.toFixed(5),
			x_2.toFixed(5),
			x_3.toFixed(5),
			A.toFixed(5),
			B.toFixed(5),
			C.toFixed(5),
			q.toFixed(5),
			x.toFixed(5),
		])

		x_1 = x_2
		x_2 = x_3
		x_3 = x

		iter_count++
	}

	return { x: x_3, header, iterations }
}

export default muellerMethod
