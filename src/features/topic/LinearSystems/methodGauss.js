function gaussElimination(A, b) {
	var n = A.length
	var x = new Array(n).fill(0)
	var intermediateSystems = []

	for (let i; i < n; i++) {
		A[i].push(b[i])
	}

	for (let i = 0; i < n; i++) {
		var maxRowIndex = i
		for (let j = i + 1; j < n; j++) {
			if (Math.abs(A[j][i]) > Math.abs(A[maxRowIndex][i])) {
				maxRowIndex = j
			}
		}

		intermediateSystems.push({
			A: JSON.parse(JSON.stringify(A)),
			b: JSON.parse(JSON.stringify(b)),
		})

		var temp = A[i]
		A[i] = A[maxRowIndex]
		A[maxRowIndex] = temp
		var tempB = b[i]
		b[i] = b[maxRowIndex]
		b[maxRowIndex] = tempB

		for (let j = i + 1; j < n; j++) {
			var factor = -A[j][i] / A[i][i]
			for (var k = i; k < n; k++) {
				A[j][k] += factor * A[i][k]
			}
			b[j] += factor * b[i]
		}
	}

	for (var i = n - 1; i >= 0; i--) {
		x[i] = b[i] / A[i][i]
		for (var j = i - 1; j >= 0; j--) {
			b[j] -= A[j][i] * x[i]
		}
	}

	return { solution: x, intermediateSystems: intermediateSystems }
}

export default gaussElimination
