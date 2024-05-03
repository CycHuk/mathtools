import { evaluateFunction } from '../NonlinearEquations/functions'

function MonteCarlo(func, a, b, n) {
	let sum = 0
	const h = (b - a) / n
	const points = []

	for (let i = 0; i < n; i++) {
		const x = a + Math.random() * (b - a)
		const y = evaluateFunction(func, x)
		points.push({ x, y })
		sum += y
	}

	return { integral: sum * h, points }
}

export default MonteCarlo
