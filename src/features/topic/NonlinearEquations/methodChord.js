import { evaluateFunction } from './functions'

function chordMethod(func, a, b, eps) {
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	const header = ['K', 'a', 'f(a)', 'b', 'f(b)', 'x', 'f(x)']
	let iterations = []

	let iterCount = 0
	let x = 0
	let previousX = 0

	while (Math.abs(x - previousX) > eps || iterCount <= 1) {
		previousX = x

		const funcA = evaluateFunction(func, a)
		const funcB = evaluateFunction(func, b)

		x = a - ((b - a) * funcA) / (funcB - funcA)
		const funcX = evaluateFunction(func, x)

		iterations.push([iterCount, a, funcA, b, funcB, x, funcX])

		if (funcA * funcX < 0) {
			b = x
		} else {
			a = x
		}

		iterCount++
	}

	return { x, header, iterations }
}

export default chordMethod
