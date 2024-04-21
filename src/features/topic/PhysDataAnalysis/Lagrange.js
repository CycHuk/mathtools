const nerdamer = require('nerdamer/all')

function lagrangeInterpolation(xValues, yValues) {
	const n = xValues.length
	let polynomial = ''

	for (let i = 0; i < n; i++) {
		let term = ''

		for (let j = 0; j < n; j++) {
			if (i !== j) {
				const numerator = `(x - ${xValues[j]})`
				const denominator = `(${xValues[i]} - ${xValues[j]})`
				term += `${numerator} / ${denominator} * `
			}
		}

		term += yValues[i].toString()

		if (i !== 0) {
			polynomial += ' + '
		}

		polynomial += `(${term})`
	}

	// Simplify the polynomial using nerdamer
	polynomial = nerdamer(polynomial).expand().toString()

	return polynomial
}

export default lagrangeInterpolation
