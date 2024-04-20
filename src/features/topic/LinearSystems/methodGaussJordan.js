function gaussJordan(A, b) {
	/*
    Решает систему линейных уравнений методом Гаусса-Жордана.

    A - матрица системы уравнений
    b - столбец свободных членов
    */

	const n = A.length // Определение размерности системы
	const intermediateSystems = [] // Массив для хранения промежуточных матриц A и векторов b

	// Объединение матрицы A с вектором b
	for (let i = 0; i < n; i++) {
		A[i].push(b[i])
	}

	// Прямой ход метода Гаусса
	for (let i = 0; i < n; i++) {
		// Находим максимальный элемент в текущем столбце и его строку
		let max_el = Math.abs(A[i][i])
		let max_row = i
		for (let j = i + 1; j < n; j++) {
			if (Math.abs(A[j][i]) > max_el) {
				max_el = Math.abs(A[j][i])
				max_row = j
			}
		}
		// Обменяем текущую строку с строкой, содержащей максимальный элемент
		;[A[i], A[max_row]] = [A[max_row], A[i]]
		// Нормализуем текущую строку
		A[i] = A[i].map(k => k / A[i][i])
		// Вычитаем текущую строку из остальных строк для обнуления элементов ниже диагонали
		for (let j = i + 1; j < n; j++) {
			const basic_line = A[i].map(k => k * A[j][i])
			const replaceable_line = [...A[j]]
			const new_line = replaceable_line.map((x, idx) => x - basic_line[idx])
			A[j] = new_line
		}
		// Записываем текущее состояние матрицы A и вектора b в intermediateSystems
		intermediateSystems.push({
			A: A.map(row => [...row]),
			b: [...A.map(row => row[n])],
		})
	}

	// обнуление элементов выше диагонали
	for (let i = n - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			const basic_line = A[i].map(k => k * A[j][i])
			const replaceable_line = A[j].map(k => k * A[i][i])
			const new_line = replaceable_line.map((x, idx) => x - basic_line[idx])
			A[j] = new_line
		}
		// Записываем текущее состояние матрицы A и вектора b в intermediateSystems
		intermediateSystems.push({
			A: A.map(row => [...row]),
			b: [...A.map(row => row[n])],
		})
	}

	return { intermediateSystems }
}

export default gaussJordan
