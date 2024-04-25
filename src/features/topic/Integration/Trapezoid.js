import { evaluateFunction } from '../NonlinearEquations/functions'

function integrateTrapezoidal(expr, lowerBound, upperBound, step) {
	function evaluate(expr, x) {
		return evaluateFunction(expr, x)
	}

	const a = parseFloat(lowerBound)
	const b = parseFloat(upperBound)
	const h = parseFloat(step)

	let integral = 0
	const values = []

	for (let x = a; x < b; x += h) {
		const y0 = evaluate(expr, x)
		const y1 = evaluate(expr, x + h)
		integral += ((y0 + y1) * h) / 2
		let i = 0
		const stepY = (y1 - y0) / (h / 0.01)
		for (let newX = x; newX < x + h; newX += 0.01) {
			values.push({ x: newX.toFixed(2), y: y0 + stepY * i })
			i++
		}
	}

	return { integral, values }
}

export default integrateTrapezoidal
