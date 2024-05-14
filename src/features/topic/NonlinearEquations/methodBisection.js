// Импорт функции evaluateFunction из файла functions
import { evaluateFunction } from './functions'

// Определение функции bisectionMethod с параметрами func, a, b, eps
function bisectionMethod(func, a, b, eps) {
	// Если произведение значений функции на концах интервала положительно
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		// Выбросить ошибку "Функция должна иметь разные знаки на концах интервала"
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	// Инициализация счетчика итераций
	let iterCount = 0

	// Заголовок таблицы итераций
	const header = ['K', 'a', 'f(a)', 'b', 'f(b)', 'x', 'f(x)']
	// Итерации
	let iterations = []

	// Пока половина интервала больше эпсилон
	while ((b - a) / 2 > eps) {
		// Вычисление середины интервала
		const x = (a + b) / 2

		// Вычисление значений функции в точках a, b, x
		const funcA = evaluateFunction(func, a)
		const funcB = evaluateFunction(func, b)
		const funcX = evaluateFunction(func, x)

		// Добавление итерации в массив
		iterations.push([iterCount, a, funcA, b, funcB, x, funcX])

		// Если значение функции в x равно 0
		if (funcX === 0) {
			// Вернуть x
			return x
		// Если произведение значений функции в x и a отрицательно
		} else if (funcX * funcA < 0) {
			// Переназначить b на x
			b = x
		} else {
			// Переназначить a на x
			a = x
		}

		// Увеличить счетчик итераций
		iterCount++
	}
	// Вернуть объект с корнем, заголовком и итерациями
	return { x: (a + b) / 2, header, iterations }
}

// Экспорт функции bisectionMethod по умолчанию
export default bisectionMethod

