// импортировать функцию evaluateFunction из файла './functions'
import { evaluateFunction } from './functions'

// объявление функции chordMethod с параметрами func, a, b, eps
function chordMethod(func, a, b, eps) {
	// если произведение значений функции на концах интервала одного знака, выбросить ошибку
	if (evaluateFunction(func, a) * evaluateFunction(func, b) > 0) {
		throw new Error('Функция должна иметь разные знаки на концах интервала')
	}

	// объявление массива заголовка таблицы
	const header = ['K', 'a', 'f(a)', 'b', 'f(b)', 'x', 'f(x)']
	// инициализация массива для итераций
	let iterations = []

	// инициализация переменных iterCount, x, previousX
	let iterCount = 0
	let x = 0
	let previousX = 0

	// выполнение цикла до достижения заданной точности
	while (Math.abs(x - previousX) > eps || iterCount <= 1) {
		previousX = x

		// вычисление значений функции в точках a и b
		const funcA = evaluateFunction(func, a)
		const funcB = evaluateFunction(func, b)

		// вычисление новой точки x методом хорд
		x = a - ((b - a) * funcA) / (funcB - funcA)
		const funcX = evaluateFunction(func, x)

		// добавление итерации в массив итераций
		iterations.push([iterCount, a, funcA, b, funcB, x, funcX])

		// обновление значений a и b в зависимости от знаков функции на концах интервала
		if (funcA * funcX < 0) {
			b = x
		} else {
			a = x
		}

		// инкремент счетчика итераций
		iterCount++
	}

	// возврат результата: найденной точки x, заголовка и массива итераций
	return { x, header, iterations }
}

// экспорт функции chordMethod по умолчанию
export default chordMethod

