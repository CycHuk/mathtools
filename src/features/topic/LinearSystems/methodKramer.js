// Экспортируем функцию determinant
export function determinant(matrix) {
	// Получаем размерность матрицы
	const n = matrix.length
	// Если матрица имеет размер 1x1
	if (n === 1) {
		// Возвращаем элемент матрицы
		return matrix[0][0]
	}
	// Инициализируем определитель
	let det = 0
	// Проходим по первой строке матрицы
	for (let j = 0; j < n; j++) {
		// Добавляем к определителю произведение элемента на соответствующий минор
		det += matrix[0][j] * cofactor(matrix, 0, j)
	}
	// Возвращаем определитель
	return det
}

// Функция cofactor для вычисления алгебраического дополнения
function cofactor(matrix, row, col) {
	// Возвращаем произведение знака (-1)^(i+j) на минор
	return Math.pow(-1, row + col) * minor(matrix, row, col)
}

// Функция minor для вычисления минора матрицы
function minor(matrix, row, col) {
	// Возвращаем определитель подматрицы
	return determinant(getSubMatrix(matrix, row, col))
}

// Функция getSubMatrix для получения подматрицы без указанной строки и столбца
function getSubMatrix(matrix, row, col) {
	// Возвращаем подматрицу без указанной строки и столбца
	return matrix
		.filter((_, i) => i !== row) // Удаляем указанную строку
		.map(row => row.filter((_, j) => j !== col)) // Удаляем указанный столбец
}

// Функция kramerMethod для решения системы уравнений методом Крамера
function kramerMethod(A, b) {
	// Получаем размерность матрицы A
	const n = A.length
	// Вычисляем главный определитель
	const mainDeterminant = determinant(A)
	// Массив для хранения замененных матриц и решений
	const replacedMatrices = []
	const x = []

	// Проходим по каждой переменной
	for (let i = 0; i < n; i++) {
		// Копируем матрицу A для каждой переменной
		const replacedMatrix = JSON.parse(JSON.stringify(A))
		// Заменяем i-й столбец на вектор свободных членов
		for (let j = 0; j < n; j++) {
			replacedMatrix[j][i] = b[j]
		}
		// Вычисляем определитель замененной матрицы
		const replacedDeterminant = determinant(replacedMatrix)
		// Вычисляем значение i-й переменной
		x.push(replacedDeterminant / mainDeterminant)
		// Сохраняем замененную матрицу и ее определитель
		replacedMatrices.push({
			matrix: replacedMatrix,
			determinant: replacedDeterminant,
		})
	}

	// Возвращаем решение и информацию о главном определителе и замененных матрицах
	return {
		x: x, // Решение системы уравнений
		mainDeterminant: { matrix: A, determinant: mainDeterminant }, // Главный определитель
		replacedMatrices: replacedMatrices, // Замененные матрицы
	}
}

// Экспортируем функцию kramerMethod по умолчанию
export default kramerMethod

