const math = require('mathjs')
const nerdamer = require('nerdamer/all')

const { sqrt, sin, cos, tan, cot, abs, atan, acot, asin, acos } = Math

export function evaluateFunction(funcStr, x) {
	try {
		var result = eval(funcStr)
		return result
	} catch (e) {
		return null
	}
}

export function replacePowerOperator(expression) {
	return expression.replace(/\*\*/g, '^')
}

export function restorePowerOperator(expression) {
	return expression.replace(/\^/g, '**')
}

export function derivativeFunction(funcStr) {
	const func = replacePowerOperator(funcStr)
	const x = math.parse('x')
	const funcExpr = math.parse(func)
	const derivative = math.derivative(funcExpr, x)
	return restorePowerOperator(derivative.toString())
}

function replaceStrings(inputString, target, replacement) {
	let result = []
	let startIndex = 0
	while (startIndex < inputString.length) {
		let index = inputString.indexOf(target, startIndex)
		if (index === -1) {
			break
		}
		let replacedString =
			inputString.slice(0, index) + replacement + inputString.slice(index + 1)
		result.push(replacedString)
		startIndex = index + 1
	}
	return result
}

export function extractVariable(func) {
	let funcArr = replaceStrings(func, 'x', 'y')
	let result = []
	for (let equation of funcArr) {
		let extractedVariable = extractVariableFromEquation(equation, 'y')
		result.push(...extractedVariable)
	}
	return result.filter(item => !item.startsWith('-s'))
}

function extractVariableFromEquation(funcStr) {
	const equation = nerdamer(funcStr)
	const solution = equation.solveFor('y')
	const solutionStr = restorePowerOperator(solution.toString())
	return splitByComma(solutionStr)
}

function splitByComma(str) {
	return str.split(',')
}
