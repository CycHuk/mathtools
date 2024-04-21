import { evaluateFunction } from './functions'

function SecantMethod(func, a, b, eps) {
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	let previousX = a

	const header = ['K', 'x(K-1)', 'f(x(K-1))', `x(K)`, `f(x(K))`]
	let iterations = []

	let iterCount = 1

	let x = b - eps

	let funcX = evaluateFunction(func, x)
	let funcX2 = evaluateFunction(func, previousX)

	while (Math.abs(x - previousX) > eps || iterCount <= 1) {
		let X = x

		x = x - (funcX * (x - previousX)) / (funcX - funcX2)

		previousX = X

		funcX = evaluateFunction(func, x)
		funcX2 = evaluateFunction(func, previousX)

		iterations.push([iterCount, previousX, funcX2, x, funcX])

		iterCount++
	}

	return { x, header, iterations }
}

export default SecantMethod
