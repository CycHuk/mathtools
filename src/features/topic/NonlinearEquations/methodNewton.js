// Импортируем функции из файла functions.js
import {
	evaluateFunction,
	derivativeFunction,
	replacePowerOperator,
} from './functions.js'

// Определяем функцию метода Ньютона
function newtonMethod(func, a, b, eps) {
	// Проверяем знаки функции на концах интервала
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	// Находим первую производную функции
	const firstDerivative = derivativeFunction(func)

	// Выбираем начальное приближение
	if (evaluateFunction(func, a) * evaluateFunction(firstDerivative, a) > 0) {
		a = a
	} else if (
		evaluateFunction(func, b) * evaluateFunction(firstDerivative, b) >
		0
	) {
		a = b
	} else {
		throw new Error(`f(x)*f'(x) < 0`)
	}

	// Инициализируем переменные
	let x = a,
		previousX = 0

	let iterCount = 1

	// Заголовок таблицы итераций
	const header = ['K', 'x', 'f(x)', `f'(x)`]
	let iterations = []

	// Вычисляем значения функции и её производной в точке x
	let funcX = evaluateFunction(func, x)
	let derFuncX = evaluateFunction(firstDerivative, x)

	// Выполняем итерации метода Ньютона
	while (Math.abs(x - previousX) > eps || iterCount <= 1) {
		previousX = x
		x = x - funcX / derFuncX

		// Вычисляем значения функции и её производной в новой точке x
		funcX = evaluateFunction(func, x)
		derFuncX = evaluateFunction(firstDerivative, x)

		// Записываем итерацию в массив
		iterations.push([iterCount, x, funcX, derFuncX])

		iterCount++
	}

	// Возвращаем результаты метода Ньютона
	return {
		x,
		header,
		iterations,
		firstDerivative: replacePowerOperator(firstDerivative),
	}
}

// Экспортируем функцию метода Ньютона по умолчанию
export default newtonMethod

