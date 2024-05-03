import { evaluateFunction } from '../NonlinearEquations/functions'

function FiniteDifferences(funcStr, x, h) {
	const x1 = x - h
	const x2 = x + h
	const rez = [
		(evaluateFunction(funcStr, x2) - evaluateFunction(funcStr, x)) / h,
		(evaluateFunction(funcStr, x) - evaluateFunction(funcStr, x1)) / h,
		(evaluateFunction(funcStr, x2) - evaluateFunction(funcStr, x1)) / (2 * h),
	]
	return rez
}

export default FiniteDifferences
