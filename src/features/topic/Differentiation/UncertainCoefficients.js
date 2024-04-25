import { evaluateFunction } from '../NonlinearEquations/functions'

function approximateDerivative(funcStr, x, h, derivativeOrder, errorOrder) {
	if (derivativeOrder === 1) {
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

function mnk1_2(funcStr, x, h) {
	const x_1 = x - h
	const x1 = x + h
	const rez =
		(-0.5 * evaluateFunction(funcStr, x_1) +
			0.5 * evaluateFunction(funcStr, x1)) /
		h
	return rez
}

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

export default approximateDerivative
