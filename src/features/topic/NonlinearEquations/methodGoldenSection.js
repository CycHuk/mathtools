import { evaluateFunction } from './functions'

function goldenSectionMethod(func, a, b, eps) {
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	const header = ['K', 'a', 'f(a)', 'b', 'f(b)', 'x1', 'f(x1)', 'x2', 'f(x2)']
	let iterations = []

	let iterCount = 0
	const phi = (1 + Math.sqrt(5)) / 2

	while (Math.abs(b - a) > eps) {
		const x1 = b - (b - a) / phi
		const x2 = a + (b - a) / phi

		const funcA = evaluateFunction(func, a)
		const funcB = evaluateFunction(func, b)
		const funcX1 = evaluateFunction(func, x1)
		const funcX2 = evaluateFunction(func, x2)

		iterations.push([iterCount, a, funcA, b, funcB, x1, funcX1, x2, funcX2])

		if (funcA * funcX1 < 0) {
			b = x1
		} else if (funcX1 * funcX2 < 0) {
			a = x1
			b = x2
		} else {
			a = x2
		}

		iterCount++
	}
	return { x: (a + b) / 2, header, iterations }
}

export default goldenSectionMethod
