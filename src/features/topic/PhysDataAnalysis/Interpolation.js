// Импорт функции интерполяции Лагранжа из модуля './Lagrange'
import lagrangeInterpolation from './Lagrange';

// Функция локальной интерполяции
function localInterpolation(xValues, yValues, splineType) {
	// Создание массива объектов {x, y} из переданных значений
	let sortedData = [];
	for (let i = 0; i < xValues.length; i++) {
		sortedData.push({ x: xValues[i], y: yValues[i] });
	}
	// Сортировка массива по значению x
	sortedData.sort((a, b) => a.x - b.x);

	// Массивы интервалов x и y
	let xIntervals = [];
	let yIntervals = [];
	// Разделение данных на интервалы
	for (let i = 1; i < sortedData.length; i += splineType - 1) {
		let xInterval = [];
		let yInterval = [];
		for (
			let j = i - 1;
			j < Math.min(i + splineType - 1, sortedData.length);
			j++
		) {
			xInterval.push(sortedData[j].x);
			yInterval.push(sortedData[j].y);
		}
		xIntervals.push(xInterval);
		yIntervals.push(yInterval);
	}

	// Массив для сплайна
	let spline = [];

	// Создание сплайнов для каждого интервала
	for (let i = 0; i < xIntervals.length; i++) {
		let xInterval = xIntervals[i];
		let yInterval = yIntervals[i];
		let minX = xInterval[0];
		let maxX = xInterval[xInterval.length - 1];
		// Интерполяция для текущего интервала
		spline.push([
			lagrangeInterpolation(xInterval, yInterval, (minX + maxX) / 2),
			[minX, maxX],
		]);
	}

	// Возврат результата
	return spline;
}

// Экспорт функции локальной интерполяции по умолчанию
export default localInterpolation;

