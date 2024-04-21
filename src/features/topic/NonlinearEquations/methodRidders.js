import { evaluateFunction } from './functions'

function sign(x) {
	return x < 0 ? -1 : x > 0 ? 1 : 0
}

function ridderMethod(func, a, b, eps) {
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	const header = ['K', 'a', 'f(a)', 'b', 'f(b)', 'c', 'f(c)', 'x', 'f(x)']
	let iterations = []

	let iterCount = 0
	let c, x

	let funcA = 0
	let funcB = 0
	let funcC = 0
	let funcX = 0

	while (Math.abs(funcX) > eps || iterCount <= 1) {
		c = (a + b) / 2

		funcA = evaluateFunction(func, a)
		funcB = evaluateFunction(func, b)
		funcC = evaluateFunction(func, c)

		x =
			c +
			((c - a) * (sign(funcA - funcB) * funcC)) /
				Math.sqrt(funcC ** 2 - funcA * funcB)
		funcX = evaluateFunction(func, x)

		iterations.push([iterCount, a, funcA, b, funcB, c, funcC, x, funcX])

		if (funcA * funcX < 0) {
			b = x
		} else {
			a = x
		}

		iterCount++
	}

	return { x, header, iterations }
}

export default ridderMethod
