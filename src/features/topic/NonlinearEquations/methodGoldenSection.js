// импортировать функцию evaluateFunction из файла './functions'
import { evaluateFunction } from './functions'

// объявление функции goldenSectionMethod с параметрами func, a, b, eps
function goldenSectionMethod(func, a, b, eps) {
	// если произведение значений функции на концах интервала одного знака, выбросить ошибку
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	// объявление массива заголовка таблицы
	const header = ['K', 'a', 'f(a)', 'b', 'f(b)', 'x1', 'f(x1)', 'x2', 'f(x2)']
	// инициализация массива для итераций
	let iterations = []

	// инициализация переменной iterCount
	let iterCount = 0
	// задание значения золотого сечения
	const phi = (1 + Math.sqrt(5)) / 2

	// выполнение цикла до достижения заданной точности
	while (Math.abs(b - a) > eps) {
		// вычисление новых точек x1 и x2 методом золотого сечения
		const x1 = b - (b - a) / phi
		const x2 = a + (b - a) / phi

		// вычисление значений функции в точках a, b, x1, x2
		const funcA = evaluateFunction(func, a)
		const funcB = evaluateFunction(func, b)
		const funcX1 = evaluateFunction(func, x1)
		const funcX2 = evaluateFunction(func, x2)

		// добавление итерации в массив итераций
		iterations.push([iterCount, a, funcA, b, funcB, x1, funcX1, x2, funcX2])

		// обновление значений a и b в зависимости от знаков функции на точках x1 и x2
		if (funcA * funcX1 < 0) {
			b = x1
		} else if (funcX1 * funcX2 < 0) {
			a = x1
			b = x2
		} else {
			a = x2
		}

		// инкремент счетчика итераций
		iterCount++
	}
	// возврат результата: найденной точки (среднего значения a и b), заголовка и массива итераций
	return { x: (a + b) / 2, header, iterations }
}

// экспорт функции goldenSectionMethod по умолчанию
export default goldenSectionMethod

