import {
	evaluateFunction,
	derivativeFunction,
} from '../NonlinearEquations/functions'

function Taylor(func, a, b, n) {
	const funcDerivative = derivativeFunction(func)
	const funcSecondDerivative = derivativeFunction(funcDerivative)

	let sum = 0
	const h = (b - a) / n

	for (let i = 0; i < n; i++) {
		const x = a + i * h
		const fValue = evaluateFunction(func, x)
		const fDerivativeValue = evaluateFunction(funcDerivative, x)
		const fSecondDerivativeValue = evaluateFunction(funcSecondDerivative, x)

		sum +=
			fValue * h +
			(fDerivativeValue * Math.pow(h, 2)) / 2 +
			(fSecondDerivativeValue * Math.pow(h, 3)) / 6
	}

	return sum
}

export default Taylor
