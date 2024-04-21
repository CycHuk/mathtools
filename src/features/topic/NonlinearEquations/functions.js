const { sqrt, sin, cos, abs } = Math

function tan(x) {
	return sin(x) / cos(x)
}

function cot(x) {
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
