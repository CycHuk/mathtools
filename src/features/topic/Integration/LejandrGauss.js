import { evaluateFunction } from '../NonlinearEquations/functions'

function LejandrKoef(m) {
	const lej2 = [
		[-0.57735027, 0.57735027],
		[1, 1],
	]
	const lej3 = [
		[-0.77459667, 0, 0.77459667],
		[0.55555556, 0.88888889, 0.55555556],
	]
	if (m === 2) return lej2
	return lej3
}

function LejandrGauss(func, a, b, m, n) {
	const h = (b - a) / n
	let sum = 0
	const arr = []
	for (let i = 0; i < n; i++) {
		arr.push(a + h * i)
	}
	const lejX = LejandrKoef(m)
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			const x = arr[i] + h / 2 + (h / 2) * lejX[0][j]
			const c = lejX[1][j]
			sum += c * evaluateFunction(func, x)
		}
	}
	return (sum * h) / 2
}

export default LejandrGauss
