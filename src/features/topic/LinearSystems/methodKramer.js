export function determinant(matrix) {
	const n = matrix.length
	if (n === 1) {
		return matrix[0][0]
	}
	let det = 0
	for (let j = 0; j < n; j++) {
		det += matrix[0][j] * cofactor(matrix, 0, j)
	}
	return det
}

function cofactor(matrix, row, col) {
	return Math.pow(-1, row + col) * minor(matrix, row, col)
}

function minor(matrix, row, col) {
	return determinant(getSubMatrix(matrix, row, col))
}

function getSubMatrix(matrix, row, col) {
	return matrix
		.filter((_, i) => i !== row)
		.map(row => row.filter((_, j) => j !== col))
}

function kramerMethod(A, b) {
	const n = A.length
	const mainDeterminant = determinant(A)
	const replacedMatrices = []
	const x = []

	for (let i = 0; i < n; i++) {
		const replacedMatrix = JSON.parse(JSON.stringify(A))
		for (let j = 0; j < n; j++) {
			replacedMatrix[j][i] = b[j]
		}
		const replacedDeterminant = determinant(replacedMatrix)
		x.push(replacedDeterminant / mainDeterminant)
		replacedMatrices.push({
			matrix: replacedMatrix,
			determinant: replacedDeterminant,
		})
	}

	return {
		x: x,
		mainDeterminant: { matrix: A, determinant: mainDeterminant },
		replacedMatrices: replacedMatrices,
	}
}

export default kramerMethod
