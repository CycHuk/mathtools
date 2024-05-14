// импортировать функции для вычисления и производной из './functions'
import { evaluateFunction, derivativeFunction } from './functions'

// Функция метода секущих
function SecantMethod(func, a, b, eps) {
	// Если f(a) * f(b) > 0, выбросить ошибку
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	// Вычислить первую производную
	const firstDerivative = derivativeFunction(func)
	let previousX

	// Установить начальное значение previousX в a или b в зависимости от знака f(a) * f'(a) или f(b) * f'(b)
	if (evaluateFunction(func, a) * evaluateFunction(firstDerivative, a) > 0) {
		previousX = a
	} else if (
		evaluateFunction(func, b) * evaluateFunction(firstDerivative, b) >
		0
	) {
		previousX = b
	} else {
		throw new Error(`f(x)*f'(x) < 0`)
	}

	// Заголовок таблицы итераций
	const header = ['K', 'x(K-1)', 'f(x(K-1))', `x(K)`, `f(x(K))`]
	let iterations = []

	// Счетчик итераций
	let iterCount = 1

	// Инициализировать x как b - eps
	let x = b - eps

	// Вычислить значения функций в x и previousX
	let funcX = evaluateFunction(func, x)
	let funcX2 = evaluateFunction(func, previousX)

	// Пока разница между x и previousX больше eps или iterCount меньше или равно 1
	while (Math.abs(x - previousX) > eps || iterCount <= 1) {
		// Сохранить предыдущее значение x
		let X = x

		// Вычислить новое значение x
		x = x - (funcX * (x - previousX)) / (funcX - funcX2)

		// Обновить previousX
		previousX = X

		// Вычислить значения функций в x и previousX
		funcX = evaluateFunction(func, x)
		funcX2 = evaluateFunction(func, previousX)

		// Добавить текущую итерацию в массив итераций
		iterations.push([iterCount, previousX, funcX2, x, funcX])

		// Увеличить счетчик итераций
		iterCount++
	}

	// Вернуть результат метода секущих
	return {
		x,
		header,
		iterations,
	}
}

// Экспортировать метод секущих по умолчанию
export default SecantMethod

