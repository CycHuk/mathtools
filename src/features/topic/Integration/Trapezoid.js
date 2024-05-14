// комментируем каждую строку на русском как код

// импортируем функцию evaluateFunction из файла '../NonlinearEquations/functions'
import { evaluateFunction } from '../NonlinearEquations/functions'

// объявляем функцию integrateTrapezoidal с параметрами expr, lowerBound, upperBound, step
function integrateTrapezoidal(expr, lowerBound, upperBound, step) {
	// пересчитываем шаг
	step = (upperBound - lowerBound) / step
	// определяем внутреннюю функцию evaluate с параметрами expr и x
	function evaluate(expr, x) {
		return evaluateFunction(expr, x)
	}

	// преобразуем границы и шаг к числам с плавающей точкой
	const a = parseFloat(lowerBound)
	const b = parseFloat(upperBound)
	const h = parseFloat(step)

	// инициализируем интеграл и список значений
	let integral = 0
	const values = []

	// начинаем цикл для вычисления интеграла
	for (let x = a; x < b; x += h) {
		// вычисляем значения функции в текущей и следующей точках
		const y0 = evaluate(expr, x)
		const y1 = evaluate(expr, x + h)
		// добавляем трапецию к интегралу
		integral += ((y0 + y1) * h) / 2
		// инициализируем счётчик
		let i = 0
		// вычисляем шаг для значения функции внутри трапеции
		const stepY = (y1 - y0) / (h / 0.01)
		// начинаем вложенный цикл для вычисления значений функции внутри трапеции
		for (let newX = x; newX < x + h; newX += 0.01) {
			// добавляем новое значение в список значений
			values.push({ x: newX.toFixed(2), y: y0 + stepY * i })
			// увеличиваем счётчик
			i++
		}
	}

	// возвращаем интеграл и список значений
	return { integral, values }
}

// экспортируем функцию integrateTrapezoidal по умолчанию
export default integrateTrapezoidal

