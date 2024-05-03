import { evaluateFunction } from '../NonlinearEquations/functions'

function Chebishev(func, a, b, m, n) {
	const h = (b - a) / n
	var sum = 0
	const t = getChebyshevNodes(m)
	for (let i = 0; i < n; i++) {
		const xi = a + h * i
		const arr = t.map(x => xi + h / 2 + (h / 2) * x)
		arr.forEach(x => {
			sum += evaluateFunction(func, x)
		})
	}
	if (m == 3) return (sum * h) / 3
	return (sum * h) / 2
}

function getChebyshevNodes(m) {
	switch (m) {
		case 2:
			return [-0.57735, 0.57735]
		case 3:
			return [-0.707107, 0, 0.707107]
		default:
			return []
	}
}

export default Chebishev
