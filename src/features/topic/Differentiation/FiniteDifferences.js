import { evaluateFunction } from '../NonlinearEquations/functions'

function FiniteDifferences(funcStr, x, h) {
	// Вычисление значения x-h
	const x1 = x - h
	// Вычисление значения x+h
	const x2 = x + h
	// Вычисление приближенных значений производных
	const rez = [
		// Первая производная справа от x
		(evaluateFunction(funcStr, x2) - evaluateFunction(funcStr, x)) / h,
		// Первая производная слева от x
		(evaluateFunction(funcStr, x) - evaluateFunction(funcStr, x1)) / h,
		// Среднее значение первой производной в точке x
		(evaluateFunction(funcStr, x2) - evaluateFunction(funcStr, x1)) / (2 * h),
	]
	// Возврат приближенных значений производных
	return rez
}

// Экспорт функции FiniteDifferences для использования в других модулях
export default FiniteDifferences
