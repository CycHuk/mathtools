export function isDiagonallyDominant(matrix) {
	const size = matrix.length
	for (let i = 0; i < size; i++) {
		let diag = Math.abs(matrix[i][i])
		let sum = 0
		for (let j = 0; j < size; j++) {
			if (j !== i) {
				sum += Math.abs(matrix[i][j])
			}
		}
		if (diag <= sum) {
			return false
		}
	}
	return true
}

function jacobi(a, b, eps) {
	if (!isDiagonallyDominant(a)) {
		throw new Error('Matrix is not diagonally dominant')
	}

	const count = b.length
	const header = ['k', ...Array.from({ length: count }, (_, i) => `x${i}`)]
	let iterations = []

	let x = new Array(count).fill(0)

	let numberOfIter = 0
	const maxIter = 10000

	while (numberOfIter < maxIter) {
		let x_prev = [...x]

		for (let k = 0; k < count; k++) {
			let S = 0
			for (let j = 0; j < count; j++) {
				if (j !== k) {
					S = S + a[k][j] * x_prev[j]
				}
			}
			x[k] = b[k] / a[k][k] - S / a[k][k]
		}

		let epsMax = 0

		iterations.push([numberOfIter, ...x])

		for (let i = 0; i < count; i++) {
			const diff = Math.abs(x[i] - x_prev[i])
			if (diff > epsMax) {
				epsMax = diff
			}
		}

		if (epsMax < eps) {
			break
		}
		numberOfIter++
	}

	return { x, header, iterations }
}

export default jacobi
