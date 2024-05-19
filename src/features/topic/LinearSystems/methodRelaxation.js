// Импортируем функцию isDiagonallyDominant из файла methodYakobi
import { isDiagonallyDominant } from './methodYakobi'

// Определяем функцию RelaxationMethod с параметрами A, b, eps
function RelaxationMethod(A, b, eps) {
	// Если матрица A не является диагонально доминирующей, выбрасываем ошибку
	if (!isDiagonallyDominant(A)) {
		throw new Error('Matrix is not diagonally dominant')
	}

	// Определяем переменную count как длину вектора b
	const count = b.length

	// Создаем вектор resultX и заполняем его нулями
	const resultX = Array(count).fill(0)
	// Создаем вектор discrepancy, вычисляем его значения из вектора b и матрицы A
	const discrepancy = b.map((_, k) => -b[k] / -A[k][k])

	// Заголовок таблицы итераций
	const header = [
		'K',
		...Array.from({ length: count }, (_, i) => `ΔX${i}`),
		...Array.from({ length: count }, (_, i) => `Δψ${i}`),
	]

	// Массив для хранения итераций
	let iterations = []

	// Переменные для управления итерациями
	let numberOfIter = 0
	const maxIter = 10000
	let deltaX = 0
	let index = 0

	// Выполняем итерации до достижения максимального количества или пока не достигнута необходимая точность
	while (numberOfIter < maxIter) {
		// Добавляем номер итерации в массив итераций
		iterations.push([numberOfIter])

		// Заполняем массив изменений deltaX и deltaPsi для текущей итерации
		for (let i = 0; i < count; i++) {
			if (i === index) {
				iterations[numberOfIter].push(deltaX)
			} else {
				iterations[numberOfIter].push(0)
			}
		}

		// Добавляем значения discrepancy для текущей итерации
		for (let i = 0; i < count; i++) {
			iterations[numberOfIter].push(discrepancy[i])
		}

		// Вычисляем максимальное изменение deltaX и его индекс
		deltaX = Math.max(...discrepancy.map(Math.abs))
		index = discrepancy.indexOf(deltaX)

		// Обновляем значение решения resultX
		resultX[index] += deltaX

		// Обновляем значения discrepancy для следующей итерации
		for (let i = 0; i < count; i++) {
			if (-A[i][i] !== 0) {
				discrepancy[i] += (deltaX * A[i][index]) / -A[i][i]
			}
		}

		// Если достигнута необходимая точность, возвращаем результат
		if (Math.abs(deltaX) < eps) {
			return {
				x: resultX,
				header: header,
				iterations: iterations,
			}
		}

		// Увеличиваем счетчик итераций
		numberOfIter++
	}

	// Возвращаем результат после выполнения всех итераций
	return {
		x: resultX,
		header: header,
		iterations: iterations,
	}
}

// Экспортируем функцию RelaxationMethod по умолчанию
export default RelaxationMethod

