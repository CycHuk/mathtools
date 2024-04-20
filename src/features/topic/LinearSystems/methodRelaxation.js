import { isDiagonallyDominant } from './methodYakobi'

function RelaxationMethod(A, b, eps) {
	if (!isDiagonallyDominant(A)) {
		throw new Error('Matrix is not diagonally dominant')
	}

	const count = b.length

	const resultX = Array(count).fill(0)
	const discrepancy = b.map((_, k) => -b[k] / -A[k][k])

	const header = [
		'K',
		...Array.from({ length: count }, (_, i) => `ΔX${i}`),
		...Array.from({ length: count }, (_, i) => `Δψ${i}`),
	]

	let iterations = []

	let numberOfIter = 0
	const maxIter = 10000
	let deltaX = 0
	let index = 0

	while (numberOfIter < maxIter) {
		iterations.push([numberOfIter])

		for (let i = 0; i < count; i++) {
			if (i === index) {
				iterations[numberOfIter].push(deltaX)
			} else {
				iterations[numberOfIter].push(0)
			}
		}

		for (let i = 0; i < count; i++) {
			iterations[numberOfIter].push(discrepancy[i])
		}

		deltaX = Math.max(...discrepancy.map(Math.abs))
		index = discrepancy.indexOf(deltaX)

		resultX[index] += deltaX

		for (let i = 0; i < count; i++) {
			if (-A[i][i] !== 0) {
				discrepancy[i] += (deltaX * A[i][index]) / -A[i][i]
			}
		}

		if (Math.abs(deltaX) < eps) {
			return {
				x: resultX,
				header: header,
				iterations: iterations,
			}
		}

		numberOfIter++
	}

	return {
		x: resultX,
		header: header,
		iterations: iterations,
	}
}

export default RelaxationMethod
