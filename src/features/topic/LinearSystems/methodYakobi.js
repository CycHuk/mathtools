// Экспортируем функцию isDiagonallyDominant
export function isDiagonallyDominant(matrix) {
	// Вычисляем размер матрицы
	const size = matrix.length
	// Проходим по каждой строке матрицы
	for (let i = 0; i < size; i++) {
		// Получаем модуль диагонального элемента
		let diag = Math.abs(matrix[i][i])
		// Инициализируем сумму
		let sum = 0
		// Проходим по каждому элементу в строке
		for (let j = 0; j < size; j++) {
			// Если не диагональный элемент, добавляем его к сумме
			if (j !== i) {
				sum += Math.abs(matrix[i][j])
			}
		}
		// Если модуль диагонального элемента меньше или равен сумме остальных элементов строки, возвращаем false
		if (diag <= sum) {
			return false
		}
	}
	// Если все строки удовлетворяют условию диагонального преобладания, возвращаем true
	return true
}

// Определяем функцию jacobi с параметрами a, b, eps
function jacobi(a, b, eps) {
	// Если матрица a не является диагонально доминирующей, выбрасываем ошибку
	if (!isDiagonallyDominant(a)) {
		throw new Error('Matrix is not diagonally dominant')
	}

	// Получаем количество уравнений
	const count = b.length
	// Заголовок таблицы итераций
	const header = ['k', ...Array.from({ length: count }, (_, i) => `x${i}`)]
	// Массив для хранения итераций
	let iterations = []

	// Инициализируем вектор x нулями
	let x = new Array(count).fill(0)

	// Переменные для управления итерациями
	let numberOfIter = 0
	const maxIter = 10000

	// Выполняем итерации до достижения максимального количества или пока не достигнута необходимая точность
	while (numberOfIter < maxIter) {
		// Создаем копию предыдущего вектора x
		let x_prev = [...x]

		// Проходим по всем уравнениям
		for (let k = 0; k < count; k++) {
			// Вычисляем сумму произведений коэффициентов на соответствующие значения x из предыдущей итерации
			let S = 0
			for (let j = 0; j < count; j++) {
				if (j !== k) {
					S = S + a[k][j] * x_prev[j]
				}
			}
			// Вычисляем новое значение x_k
			x[k] = b[k] / a[k][k] - S / a[k][k]
		}

		// Вычисляем максимальное изменение
		let epsMax = 0

		// Добавляем текущие значения x в массив итераций
		iterations.push([numberOfIter, ...x])

		// Проверяем наличие достаточной точности для каждой переменной
		for (let i = 0; i < count; i++) {
			const diff = Math.abs(x[i] - x_prev[i])
			if (diff > epsMax) {
				epsMax = diff
			}
		}

		// Если достигнута необходимая точность, выходим из цикла
		if (epsMax < eps) {
			break
		}
		numberOfIter++
	}

	// Возвращаем результаты итераций
	return { x, header, iterations }
}

// Экспортируем функцию jacobi по умолчанию
export default jacobi

