import { evaluateFunction } from './functions'

function bisectionMethod(func, a, b, eps) {
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	let iterCount = 0

	const header = ['K', 'a', 'f(a)', 'b', 'f(b)', 'x', 'f(x)']
	let iterations = []

	while ((b - a) / 2 > eps) {
		const x = (a + b) / 2

		const funcA = evaluateFunction(func, a)
		const funcB = evaluateFunction(func, b)
		const funcX = evaluateFunction(func, x)

		iterations.push([iterCount, a, funcA, b, funcB, x, funcX])

		if (funcX === 0) {
			return x
		} else if (funcX * funcA < 0) {
			b = x
		} else {
			a = x
		}

		iterCount++
	}
	return { x: (a + b) / 2, header, iterations }
}

export default bisectionMethod
