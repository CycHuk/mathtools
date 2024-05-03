import { restorePowerOperator } from '../NonlinearEquations/functions'
const regression = require('regression')

function approximatePoints(points, type) {
	const data = points.map(point => [point.x, point.y])

	let result
	switch (type) {
		case 'Линейная функция':
			result = regression.linear(data)
			break
		case 'Квадратный трехчлен':
			result = regression.polynomial(data, { order: 2 })
			break
		case 'Степенная функция':
			result = regression.power(data)
			break
		case 'Показательная функция':
			result = regression.exponential(data)
			break
		case 'Логарифмическая функция':
			result = regression.logarithmic(data)
			break
		default:
			throw new Error('Выбран неизвестный тип аппроксимации')
	}

	return {
		processed: restorePowerOperator(result.string.substring(3))
			.replace(/x/g, '*x')
			.replace(/e/g, '*e')
			.replace(/\(\*/g, '(')
			.replace(/ln\(/g, '*ln('),
		original: result.string,
	}
}

export default approximatePoints
