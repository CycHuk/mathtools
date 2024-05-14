// Импортировать необходимые функции из файла functions
import {
	evaluateFunction,
	derivativeFunction,
	extractVariable,
	replacePowerOperator,
} from './functions'

// Определение функции простого итерационного метода
function SimpleIterationMethod(func, a, b, eps) {
	// Извлечение переменных из функции
	const functions = extractVariable(func)

	// Переменные для хранения уравнения и начального значения
	let iterFunc = ''
	let x = 0

	// Проход по уравнениям для выбора подходящего для итераций
	for (let equation of functions) {
		// Получение производной уравнения
		const f = derivativeFunction(equation)
		try {
			// Попытка вычисления значения производной в точке b
			const f_b = Math.abs(evaluateFunction(f, b))
			// Если условие выполнено, выбрать это уравнение для итераций
			if (f_b < 1 && f_b !== 0) {
				iterFunc = equation
				x = b
				break
			}
		} catch (error) {}
		try {
			// Попытка вычисления значения производной в точке a
			const f_a = Math.abs(evaluateFunction(f, a))
			// Если условие выполнено, выбрать это уравнение для итераций
			if (f_a < 1 && f_a !== 0) {
				iterFunc = equation
				x = a
				break
			}
		} catch (error) {}
	}

	// Инициализация переменных для подсчёта итераций
	let iterCount = 1
	let funcX = evaluateFunction(iterFunc, x)

	// Создание заголовка таблицы итераций
	const header = ['K', 'x', 'f(x)']
	let iterations = []

	// Добавление начальной итерации в таблицу
	iterations.push([0, x, funcX])

	// Выполнение итераций до достижения необходимой точности
	while (Math.abs(x - funcX) > eps || iterCount <= 1) {
		x = funcX
		funcX = evaluateFunction(iterFunc, x)
		iterations.push([iterCount, x, funcX])
		iterCount++
	}

	// Возврат результатов метода
	return {
		x: funcX,
		header,
		iterations,
		iterFunc: replacePowerOperator(iterFunc),
	}
}

// Экспорт функции простого итерационного метода
export default SimpleIterationMethod

