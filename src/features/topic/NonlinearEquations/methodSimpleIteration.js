import {
	evaluateFunction,
	derivativeFunction,
	extractVariable,
	replacePowerOperator,
} from './functions'

function SimpleIterationMethod(func, a, b, eps) {
	const functions = extractVariable(func)

	let iterFunc = ''
	let x = 0

	for (let equation of functions) {
		const f = derivativeFunction(equation)
		try {
			const f_b = Math.abs(evaluateFunction(f, b))
			if (f_b < 1 && f_b != 0) {
				iterFunc = equation
				x = b
				break
			}
		} catch (error) {}
		try {
			const f_a = Math.abs(evaluateFunction(f, a))
			if (f_a < 1 && f_a != 0) {
				iterFunc = equation
				x = a
				break
			}
		} catch (error) {}
	}

	let iterCount = 1
	let funcX = evaluateFunction(iterFunc, x)

	const header = ['K', 'x', 'f(x)']
	let iterations = []

	iterations.push([0, x, funcX])

	while (Math.abs(x - funcX) > eps || iterCount <= 1) {
		x = funcX
		funcX = evaluateFunction(iterFunc, x)
		iterations.push([iterCount, x, funcX])
		iterCount++
	}

	return {
		x: funcX,
		header,
		iterations,
		iterFunc: replacePowerOperator(iterFunc),
	}
}

export default SimpleIterationMethod
