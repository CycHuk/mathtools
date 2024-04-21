import {
	evaluateFunction,
	derivativeFunction,
	replacePowerOperator,
} from './functions.js'

function newtonMethod(func, a, b, eps) {
	const firstDerivative = derivativeFunction(func)
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
		derFuncX = evaluateFunction(firstDerivative, x)

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

export default newtonMethod
