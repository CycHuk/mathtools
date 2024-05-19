// Импортировать функции из файла functions.js
import {
	evaluateFunction, // Вычислить функцию
	derivativeFunction, // Найти производную функции
	replacePowerOperator, // Заменить оператор степени
} from './functions.js'

// Определить функцию modNewtonMethod
function modNewtonMethod(func, a, b, eps) {
	// Если значение функции на концах интервала имеют одинаковый знак, выбросить ошибку
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	// Найти первую производную функции
	const firstDerivative = derivativeFunction(func)

	// Проверить направление движения начальной точки
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

	// Инициализация переменных
	let x = a,
		previousX = 0

	let iterCount = 1

	// Заголовок для таблицы итераций
	const header = ['K', 'x', 'f(x)', `f'(x)`]
	let iterations = []

	// Значения функции и её производной в точке x
	let funcX = evaluateFunction(func, x)
	let derFuncX = evaluateFunction(firstDerivative, x)

	// Проведение итераций методом Ньютона
	while (Math.abs(x - previousX) > eps || iterCount <= 1) {
		previousX = x
		x = x - funcX / derFuncX

		funcX = evaluateFunction(func, x)

		iterations.push([iterCount, x, funcX, derFuncX])

		iterCount++
	}

	// Вернуть результаты
	return {
		x,
		header,
		iterations,
		firstDerivative: replacePowerOperator(firstDerivative),
	}
}

// Экспортировать функцию modNewtonMethod по умолчанию
export default modNewtonMethod

