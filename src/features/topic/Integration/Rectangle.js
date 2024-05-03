import { evaluateFunction } from '../NonlinearEquations/functions'

function integrateRectangular(expr, lowerBound, upperBound, step, method) {
	step = (upperBound - lowerBound) / step
	function evaluate(expr, x) {
		return evaluateFunction(expr, x)
	}

	const a = parseFloat(lowerBound)
	const b = parseFloat(upperBound)

	const h = parseFloat(step)

	let integral = 0
	const values = []
	switch (method) {
		case 'left':
			for (let i = a; i < b; i += h) {
				const y = evaluate(expr, i)
				integral += y * h
				for (let x = i; x < i + h; x += 0.01) {
					values.push({ x: x.toFixed(2), y })
				}
			}
			break
		case 'right':
			for (let i = a; i < b; i += h) {
				const y = evaluate(expr, i + h)
				integral += y * h
				for (let x = i; x < i + h; x += 0.01) {
					values.push({ x: x.toFixed(2), y })
				}
			}
			break
		case 'middle':
			for (let i = a + h / 2; i < b; i += h) {
				const y = evaluate(expr, i)
				integral += y * h
				for (let x = i - h / 2; x < i + h / 2; x += 0.01) {
					values.push({ x: x.toFixed(2), y })
				}
			}
			break
		default:
			console.error('Unsupported method')
			return null
	}

	return { integral, values }
}

export default integrateRectangular
