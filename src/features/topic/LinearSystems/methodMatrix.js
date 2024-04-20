import { determinant } from './methodKramer'

function matrixMethod(A, b) {
	/*
    A - матрица системы уравнений
    b - столбец свободных членов
    */

	const n = A.length // Получаем размерность матрицы A (количество уравнений)
	const detA = determinant(A) // Вычисляем определитель матрицы A

	// Проверяем, если определитель матрицы равен 0, выдаем ошибку
	if (detA === 0) {
		throw new Error('Определитель матрицы равен 0')
	}

	const x = new Array(n).fill(0) // Создаем массив для хранения решений

	const unionMatrix = JSON.parse(JSON.stringify(A)) // Создаем копию матрицы A для вычисления союзной матрицы
	const inverseMatrix = JSON.parse(JSON.stringify(A)) // Создаем копию матрицы A для вычисления обратной матрицы

	// Вычисляем союзную и обратную матрицы
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			// Вычисляем минор для текущего элемента
			const minor = A.filter((row, rowIndex) => rowIndex !== i).map(row =>
				row.filter((_, colIndex) => colIndex !== j)
			)
			unionMatrix[j][i] = (-1) ** (i + j) * determinant(minor) // Вычисляем элемент союзной матрицы
			inverseMatrix[j][i] = unionMatrix[j][i] * (1 / detA) // Вычисляем элемент обратной матрицы
		}
	}

	// Решаем систему уравнений с помощью обратной матрицы
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			x[i] += inverseMatrix[i][j] * b[j]
		}
		x[i] = parseFloat(x[i].toFixed(2))
	}

	return x
}

export default matrixMethod
