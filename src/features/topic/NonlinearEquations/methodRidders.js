// Импортируем функцию evaluateFunction из файла functions
import { evaluateFunction } from './functions'

// Определяем функцию определения знака числа
function sign(x) {
	return x < 0 ? -1 : x > 0 ? 1 : 0
}

// Определяем метод Риддера
function ridderMethod(func, a, b, eps) {
	// Проверяем знаки функции на концах интервала
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	// Заголовок таблицы итераций
	const header = ['K', 'a', 'f(a)', 'b', 'f(b)', 'c', 'f(c)', 'x', 'f(x)']
	let iterations = []

	let iterCount = 0
	let c, x

	let funcA = 0
	let funcB = 0
	let funcC = 0
	let funcX = 0

	// Выполняем итерации метода Риддера
	while (Math.abs(funcX) > eps || iterCount <= 1) {
		c = (a + b) / 2

		// Вычисляем значения функции в точках a, b и c
		funcA = evaluateFunction(func, a)
		funcB = evaluateFunction(func, b)
		funcC = evaluateFunction(func, c)

		// Вычисляем новую точку x
		x =
			c +
			((c - a) * (sign(funcA - funcB) * funcC)) /
				Math.sqrt(funcC ** 2 - funcA * funcB)
		funcX = evaluateFunction(func, x)

		// Записываем итерацию в массив
		iterations.push([iterCount, a, funcA, b, funcB, c, funcC, x, funcX])

		// Обновляем интервал [a, b]
		if (funcA * funcX < 0) {
			b = x
		} else {
			a = x
		}

		iterCount++
	}

	// Возвращаем результаты метода Риддера
	return { x, header, iterations }
}

// Экспортируем функцию метода Риддера по умолчанию
export default ridderMethod

