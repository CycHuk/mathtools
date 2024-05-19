// Импорт функции evaluateFunction из файла functions в папке NonlinearEquations
import { evaluateFunction } from '../NonlinearEquations/functions'

// Функция approximateDerivative вычисляет приближенные значения производных функции в точке x с использованием различных методов
function approximateDerivative(funcStr, x, h, derivativeOrder, errorOrder) {
	// Проверка порядка производной
	if (derivativeOrder === 1) {
		// Проверка порядка ошибки для первой производной
		if (errorOrder === 2) {
			return mnk1_2(funcStr, x, h)
		} else if (errorOrder === 4) {
			return mnk1_4(funcStr, x, h)
		} else if (errorOrder === 6) {
			return mnk1_6(funcStr, x, h)
		} else {
			throw new Error('Unsupported error order for first derivative')
		}
	} else if (derivativeOrder === 2) {
		// Проверка порядка ошибки для второй производной
		if (errorOrder === 2) {
			return mnk2_2(funcStr, x, h)
		} else if (errorOrder === 4) {
			return mnk2_4(funcStr, x, h)
		} else if (errorOrder === 6) {
			return mnk2_6(funcStr, x, h)
		} else {
			throw new Error('Unsupported error order for second derivative')
		}
	} else {
		throw new Error('Unsupported derivative order')
	}
}

// Функция mnk1_2 вычисляет первую производную с использованием метода наименьших квадратов с порядком ошибки 2
function mnk1_2(funcStr, x, h) {
	const x_1 = x - h
	const x1 = x + h
	const rez =
		(-0.5 * evaluateFunction(funcStr, x_1) +
			0.5 * evaluateFunction(funcStr, x1)) /
		h
	return rez
}

// Функция mnk1_4 вычисляет первую производную с использованием метода наименьших квадратов с порядком ошибки 4
function mnk1_4(funcStr, x, h) {
	const x_2 = x - 2 * h
	const x_1 = x - h
	const x1 = x + h
	const x2 = x + 2 * h
	const rez =
		((1 / 12) * evaluateFunction(funcStr, x_2) -
			(2 / 3) * evaluateFunction(funcStr, x_1) +
			(2 / 3) * evaluateFunction(funcStr, x1) -
			(1 / 12) * evaluateFunction(funcStr, x2)) /
		h

	return rez
}

// Функция mnk1_6 вычисляет первую производную с использованием метода наименьших квадратов с порядком ошибки 6
function mnk1_6(funcStr, x, h) {
	const x_3 = x - 3 * h
	const x_2 = x - 2 * h
	const x_1 = x - h
	const x1 = x + h
	const x2 = x + 2 * h
	const x3 = x + 3 * h
	const rez =
		(-(1 / 60) * evaluateFunction(funcStr, x_3) +
			(3 / 20) * evaluateFunction(funcStr, x_2) -
			(3 / 4) * evaluateFunction(funcStr, x_1) +
			(3 / 4) * evaluateFunction(funcStr, x1) -
			(3 / 20) * evaluateFunction(funcStr, x2) +
			(1 / 60) * evaluateFunction(funcStr, x3)) /
		h

	return rez
}

// Функция mnk2_2 вычисляет вторую производную с использованием метода наименьших квадратов с порядком ошибки 2
function mnk2_2(funcStr, x, h) {
	const x_1 = x - h
	const x1 = x + h
	const rez =
		(1 * evaluateFunction(funcStr, x_1) -
			2 * evaluateFunction(funcStr, x) +
			1 * evaluateFunction(funcStr, x1)) /
		h ** 2

	return rez
}

// Функция mnk2_4 вычисляет вторую производную с использованием метода наименьших квадратов с порядком ошибки 4
function mnk2_4(funcStr, x, h) {
	const x_2 = x - 2 * h
	const x_1 = x - h
	const x1 = x + h
	const x2 = x + 2 * h
	const rez =
		(-(1 / 12) * evaluateFunction(funcStr, x_2) +
			(4 / 3) * evaluateFunction(funcStr, x_1) -
			(5 / 2) * evaluateFunction(funcStr, x) +
			(4 / 3) * evaluateFunction(funcStr, x1) -
			(1 / 12) * evaluateFunction(funcStr, x2)) /
		h ** 2

	return rez
}

// Функция mnk2_6 вычисляет вторую производную с использованием метода наименьших квадратов с порядком ошибки 6
function mnk2_6(funcStr, x, h) {
	const x_3 = x - 3 * h
	const x_2 = x - 2 * h
	const x_1 = x - h
	const x1 = x + h
	const x2 = x + 2 * h
	const x3 = x + 3 * h
	const rez =
		((1 / 90) * evaluateFunction(funcStr, x_3) -
			(3 / 20) * evaluateFunction(funcStr, x_2) +
			(3 / 2) * evaluateFunction(funcStr, x_1) -
			(49 / 18) * evaluateFunction(funcStr, x) +
			(3 / 2) * evaluateFunction(funcStr, x1) -
			(3 / 20) * evaluateFunction(funcStr, x2) +
			(1 / 90) * evaluateFunction(funcStr, x3)) /
		h ** 2

	return rez
}

// Экспор
export default approximateDerivative
