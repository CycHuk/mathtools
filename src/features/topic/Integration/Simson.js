import {
	evaluateFunction,
	restorePowerOperator,
} from '../NonlinearEquations/functions'
import Lagrange from '../PhysDataAnalysis/Lagrange'

function integrateSimpson(expr, lowerBound, upperBound, step) {
	step = (upperBound - lowerBound) / step
	function evaluate(expr, x) {
		return evaluateFunction(expr, x)
	}

	const a = parseFloat(lowerBound)
	const b = parseFloat(upperBound)
	const h = parseFloat(step)

	let integral = 0
	const values = []

	for (let x = a; x < b; x += h) {
		const x0 = x
		const x1 = x + h / 2
		const x2 = x + h

		const y0 = evaluate(expr, x0)
		const y1 = evaluate(expr, x1)
		const y2 = evaluate(expr, x2)

		const xValues = [x0, x1, x2]
		const yValues = [y0, y1, y2]

		const func = restorePowerOperator(Lagrange(xValues, yValues))

		for (let newX = x; newX < x + h; newX += 0.01) {
			values.push({ x: newX.toFixed(2), y: evaluate(func, newX) })
		}

		integral += ((y0 + 4 * y1 + y2) * h) / 6
	}

	return { integral, values }
}

export default integrateSimpson
