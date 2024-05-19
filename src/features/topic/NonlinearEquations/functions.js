// Импортируем библиотеку mathjs
const math = require('mathjs')
// Импортируем библиотеку nerdamer
const nerdamer = require('nerdamer/all')

// Деструктурируем математические функции из объекта Math
const { sqrt, sin, cos, tan, cot, abs, atan, acot, asin, acos } = Math

// Экспортируем математические функции
export { sqrt, sin, cos, tan, cot, abs, atan, acot, asin, acos }

// Определяем функцию evaluateFunction для вычисления значения функции
export function evaluateFunction(funcStr, x, y = 0, z = 0) {
	try {
		// Вычисляем значение функции
		let result = eval(funcStr)
		return result
	} catch (e) {
		// В случае ошибки возвращаем null
		return null
	}
}

// Определяем функцию replacePowerOperator для замены оператора степени
export function replacePowerOperator(expression) {
	// Заменяем оператор степени на '^'
	return expression.replace(/\*\*/g, '^')
}

// Определяем функцию restorePowerOperator для восстановления оператора степени
export function restorePowerOperator(expression) {
	// Восстанавливаем оператор степени из '^' в '**'
	return expression.replace(/\^/g, '**')
}

// Определяем функцию derivativeFunction для вычисления производной функции
export function derivativeFunction(funcStr) {
	// Заменяем оператор степени в строке функции
	const func = replacePowerOperator(funcStr)
	// Парсим переменную x
	const x = math.parse('x')
	// Парсим функцию
	const funcExpr = math.parse(func)
	// Вычисляем производную
	const derivative = math.derivative(funcExpr, x)
	// Восстанавливаем оператор степени и возвращаем производную
	return restorePowerOperator(derivative.toString())
}

// Определяем функцию replaceStrings для замены строк
function replaceStrings(inputString, target, replacement) {
	// Инициализируем массив для хранения результатов
	let result = []
	// Устанавливаем начальный индекс
	let startIndex = 0
	// Пока не достигнут конец строки
	while (startIndex < inputString.length) {
		// Находим индекс первого вхождения целевой строки
		let index = inputString.indexOf(target, startIndex)
		// Если индекс не найден, прерываем цикл
		if (index === -1) {
			break
		}
		// Заменяем целевую строку и добавляем результат в массив
		let replacedString =
			inputString.slice(0, index) + replacement + inputString.slice(index + 1)
		result.push(replacedString)
		// Устанавливаем новое значение startIndex
		startIndex = index + 1
	}
	// Возвращаем массив результатов
	return result
}

// Определяем функцию extractVariable для извлечения переменных из функции
export function extractVariable(func) {
	// Заменяем переменную x на y в функции и разбиваем на уравнения
	let funcArr = replaceStrings(func, 'x', 'y')
	// Инициализируем массив для хранения переменных
	let result = []
	// Перебираем каждое уравнение
	for (let equation of funcArr) {
		// Извлекаем переменные из уравнения
		let extractedVariable = extractVariableFromEquation(equation, 'y')
		// Добавляем извлеченные переменные в общий массив
		result.push(...extractedVariable)
	}
	// Фильтруем переменные, исключая начинающиеся с '-s'
	return result.filter(item => !item.startsWith('-s'))
}

// Определяем функцию extractVariableFromEquation для извлечения переменных из уравнения
function extractVariableFromEquation(funcStr, ext = "y") {
	// Решаем уравнение для заданной переменной
	const equation = nerdamer(funcStr)
	const solution = equation.solveFor(ext)
	// Преобразуем решение в строку и восстанавливаем оператор степени
	const solutionStr = restorePowerOperator(solution.toString())
	// Разбиваем строку по запятой и возвращаем массив переменных
	return splitByComma(solutionStr)
}

// Определяем функцию splitByComma для разделения строки по запятой
function splitByComma(str) {
	// Разбиваем строку по запятой и возвращаем массив
	return str.split(',')
}

