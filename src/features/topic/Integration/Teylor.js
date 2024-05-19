// комментируем каждую строку на русском, как код

// импорт функций из другого файла
import {
	evaluateFunction,
	derivativeFunction,
} from '../NonlinearEquations/functions'

// объявление функции Taylor с параметрами func, a, b, n
function Taylor(func, a, b, n) {
	// вычисляем производную функции
	const funcDerivative = derivativeFunction(func)
	// вычисляем вторую производную функции
	const funcSecondDerivative = derivativeFunction(funcDerivative)

	// инициализируем сумму
	let sum = 0
	// вычисляем шаг
	const h = (b - a) / n

	// начинаем цикл для вычисления суммы
	for (let i = 0; i < n; i++) {
		// вычисляем x
		const x = a + i * h
		// вычисляем значение функции в точке x
		const fValue = evaluateFunction(func, x)
		// вычисляем значение производной функции в точке x
		const fDerivativeValue = evaluateFunction(funcDerivative, x)
		// вычисляем значение второй производной функции в точке x
		const fSecondDerivativeValue = evaluateFunction(funcSecondDerivative, x)

		// добавляем слагаемое к сумме
		sum +=
			fValue * h +
			(fDerivativeValue * Math.pow(h, 2)) / 2 +
			(fSecondDerivativeValue * Math.pow(h, 3)) / 6
	}

	// возвращаем сумму
	return sum
}

// экспортируем функцию Taylor по умолчанию
export default Taylor

