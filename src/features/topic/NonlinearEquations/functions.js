const math = require('mathjs')
const { sqrt, sin, cos, abs } = Math

export function tan(x) {
	return sin(x) / cos(x)
}

export function cot(x) {
	return cos(x) / sin(x)
}

export function evaluateFunction(funcStr, x) {
	try {
		var result = eval(funcStr)
		return result
	} catch (e) {
		return null
	}
}

export function replacePowerOperator(expression) {
	return expression.replace('**', '^')
}

export function restorePowerOperator(expression) {
	return expression.replace('^', '**')
}

export function derivativeFunction(funcStr) {
	const func = replacePowerOperator(funcStr)
	const x = math.parse('x')
	const funcExpr = math.parse(func)
	const derivative = math.derivative(funcExpr, x)
	return restorePowerOperator(derivative.toString())
}
