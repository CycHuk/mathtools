// Импорт модуля nerdamer
const nerdamer = require('nerdamer/all');

// Функция интерполяции Лагранжа
function lagrangeInterpolation(xValues, yValues) {
	// Количество точек
	const n = xValues.length;
	// Полином для интерполяции
	let polynomial = '';

	// Цикл для формирования полинома
	for (let i = 0; i < n; i++) {
		let term = '';

		// Цикл для каждого члена полинома
		for (let j = 0; j < n; j++) {
			if (i !== j) {
				// Вычисление числителя и знаменателя
				const numerator = `(x - ${xValues[j]})`;
				const denominator = `(${xValues[i]} - ${xValues[j]})`;
				term += `${numerator} / ${denominator} * `;
			}
		}

		// Добавление значения y к члену полинома
		term += yValues[i].toString();

		// Добавление "+" если это не первый член полинома
		if (i !== 0) {
			polynomial += ' + ';
		}

		// Добавление члена полинома к общему полиному
		polynomial += `(${term})`;
	}

	// Упрощение полинома с помощью nerdamer
	polynomial = nerdamer(polynomial).expand().toString();

	// Возврат полинома
	return polynomial;
}

// Экспорт функции интерполяции Лагранжа по умолчанию
export default lagrangeInterpolation;

