// функция решения системы уравнений методом Гаусса
function gaussElimination(A, b) {
	// получаем количество уравнений
	var n = A.length
	// инициализируем массив для решения
	var x = new Array(n).fill(0)
	// инициализируем массив для промежуточных систем
	var intermediateSystems = []

	// объединяем матрицу A с вектором b
	for (let i; i < n; i++) {
		A[i].push(b[i])
	}

	// начинаем процесс прямого хода метода Гаусса
	for (let i = 0; i < n; i++) {
		// находим строку с максимальным по модулю элементом в текущем столбце
		var maxRowIndex = i
		for (let j = i + 1; j < n; j++) {
			if (Math.abs(A[j][i]) > Math.abs(A[maxRowIndex][i])) {
				maxRowIndex = j
			}
		}

		// сохраняем промежуточные системы
		intermediateSystems.push({
			A: JSON.parse(JSON.stringify(A)),
			b: JSON.parse(JSON.stringify(b)),
		})

		// переставляем строки для получения максимального элемента на диагонали
		var temp = A[i]
		A[i] = A[maxRowIndex]
		A[maxRowIndex] = temp
		var tempB = b[i]
		b[i] = b[maxRowIndex]
		b[maxRowIndex] = tempB

		// преобразуем матрицу A к верхнетреугольному виду
		for (let j = i + 1; j < n; j++) {
			var factor = -A[j][i] / A[i][i]
			for (var k = i; k < n; k++) {
				A[j][k] += factor * A[i][k]
			}
			b[j] += factor * b[i]
		}
	}

	// начинаем обратный ход метода Гаусса для нахождения решения
	for (var i = n - 1; i >= 0; i--) {
		x[i] = b[i] / A[i][i]
		for (var j = i - 1; j >= 0; j--) {
			b[j] -= A[j][i] * x[i]
		}
	}

	// возвращаем решение и промежуточные системы
	return { solution: x, intermediateSystems: intermediateSystems }
}

// экспортируем функцию gaussElimination по умолчанию
export default gaussElimination

