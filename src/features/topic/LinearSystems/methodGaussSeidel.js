// импортируем функцию isDiagonallyDominant из файла './methodYakobi'
import { isDiagonallyDominant } from './methodYakobi'

// функция Гаусса-Зейделя с параметрами a, b, eps
function GaussSeidel(a, b, eps) {
	// проверяем, является ли матрица диагонально доминантной
	if (!isDiagonallyDominant(a)) {
		throw new Error('Matrix is not diagonally dominant')
	}

	// получаем количество уравнений
	const count = b.length
	// инициализируем заголовок для таблицы итераций
	const header = ['k', ...Array.from({ length: count }, (_, i) => `x${i}`)]
	let iterations = []

	// инициализируем массив для решения
	let x = new Array(count).fill(0)

	// инициализируем счётчик итераций
	let numberOfIter = 0
	const maxIter = 10000

	// начинаем итерационный процесс
	while (numberOfIter < maxIter) {
		// сохраняем предыдущее значение x
		let x_prev = [...x]

		// выполняем итерации метода Гаусса-Зейделя
		for (let k = 0; k < count; k++) {
			let S = 0
			for (let j = 0; j < count; j++) {
				if (j !== k) {
					S = S + a[k][j] * x[j]
				}
			}
			x[k] = b[k] / a[k][k] - S / a[k][k]
		}

		// находим максимальное изменение значения x
		let epsMax = 0

		// сохраняем текущую итерацию
		iterations.push([numberOfIter, ...x])

		// вычисляем максимальное изменение значения x
		for (let i = 0; i < count; i++) {
			const diff = Math.abs(x[i] - x_prev[i])
			if (diff > epsMax) {
				epsMax = diff
			}
		}

		// проверяем условие завершения итерационного процесса
		if (epsMax < eps) {
			break
		}
		numberOfIter++
	}

	// возвращаем решение, заголовок и таблицу итераций
	return { x, header, iterations }
}

// экспортируем функцию GaussSeidel по умолчанию
export default GaussSeidel

