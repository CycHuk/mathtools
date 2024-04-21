import {
	evaluateFunction,
	derivativeFunction,
	replacePowerOperator,
} from './functions.js'

function modNewtonMethod(func, a, b, eps) {
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	const firstDerivative = derivativeFunction(func)

	if (evaluateFunction(func, a) * evaluateFunction(firstDerivative, a) > 0) {
		a = a
	} else if (
		evaluateFunction(func, b) * evaluateFunction(firstDerivative, b) >
		0
	) {
		a = b
	} else {
		throw new Error(`f(x)*f'(x) < 0`)
	}

	let x = a,
		previousX = 0

	let iterCount = 1

	const header = ['K', 'x', 'f(x)', `f'(x)`]
	let iterations = []

	let funcX = evaluateFunction(func, x)
	let derFuncX = evaluateFunction(firstDerivative, x)

	while (Math.abs(x - previousX) > eps || iterCount <= 1) {
		previousX = x
		x = x - funcX / derFuncX

		funcX = evaluateFunction(func, x)

		iterations.push([iterCount, x, funcX, derFuncX])

		iterCount++
	}

	return {
		x,
		header,
		iterations,
		firstDerivative: replacePowerOperator(firstDerivative),
	}
}

export default modNewtonMethod
