// импортируем необходимые функции из файла functions.js
import { evaluateFunction, derivativeFunction } from './functions.js'

// определяем функцию muellerMethod с параметрами func, a, b, eps
function muellerMethod(func, a, b, eps) {
	// устанавливаем начальное значение x_1 равным a
	let x_1 = a

	// если значение функции на концах интервала одного знака, выбрасываем ошибку
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	// создаем заголовок для таблицы результатов
	const header = ['K', 'x(K-2)', 'x(K-1)', `x(K)`, 'A', 'C', 'B', `q`, `x(K+1)`]
	let iterations = []

	let iter_count = 0

	// устанавливаем начальные значения x_2 и x_3
	let x_2 = x_1 - eps
	let x_3 = x_2 - eps

	// выполняем цикл, пока не будет достигнута заданная точность eps или не будет выполнено более одной итерации
	while (Math.abs(x_3 - x_2) > eps || iter_count <= 1) {
		// вычисляем значения функции в точках x_1, x_2 и x_3
		const funcX_1 = evaluateFunction(func, x_1)
		const funcX_2 = evaluateFunction(func, x_2)
		const funcX_3 = evaluateFunction(func, x_3)

		// вычисляем параметр q
		const q = (x_3 - x_2) / (x_2 - x_1)

		// вычисляем коэффициенты A, B и C
		const A = q * funcX_3 - q * (1 + q) * funcX_2 + q ** 2 * funcX_1
		const B = (2 * q + 1) * funcX_3 - (1 + q) ** 2 * funcX_2 + q ** 2 * funcX_1
		const C = (1 + q) * funcX_3

		// вычисляем новое приближение x
		let x =
			x_3 -
			(2 * C * (x_3 - x_2)) /
				(B + Math.sqrt(B ** 2 - 4 * A * C) > 0
					? B + Math.sqrt(B ** 2 - 4 * A * C)
					: B - Math.sqrt(B ** 2 - 4 * A * C))

		// сохраняем результаты итерации в массив
		iterations.push([
			iter_count,
			x_1.toFixed(5),
			x_2.toFixed(5),
			x_3.toFixed(5),
			A.toFixed(5),
			B.toFixed(5),
			C.toFixed(5),
			q.toFixed(5),
			x.toFixed(5),
		])

		// обновляем значения переменных для следующей итерации
		x_1 = x_2
		x_2 = x_3
		x_3 = x

		iter_count++
	}

	// возвращаем объект с результатом итераций
	return { x: x_3, header, iterations }
}

// экспортируем функцию muellerMethod по умолчанию
export default muellerMethod

