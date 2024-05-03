import {wrapper} from "../iteratorTemplate";
const nerdamer = require('nerdamer/all')

export function rond(x){
	if (x.includes("/")){
		let a = x.split("/")
		return String(Math.round(100 * parseFloat(a[0]) / parseFloat(a[1]))/ 100)
	}
	return x
}


function calculator(fStrix, x_i, y_i, h) {
	let res = {}
	let f = `z=${y_i}+${h}*(${fStrix
		.replaceAll('x', x_i + h)
		.replaceAll('y', 'z')})`
	try {
		f = rond(nerdamer(f).solveFor('z').toString())
	} catch (ex){
		res['y_(i+1)'] = y_i
		res['f(x_i, y_i)'] = f
		return res
	}
	res['f(x_i, y_i)'] = f
	res['y_(i+1)'] = f.slice(f.indexOf('=') + 1, f.length)
	return res
}

// func: y' = 10y + x**2
// y(2) = 3
// h = 0.1
// x ∊ [2, 3]
// ex: ("10y + x**2", 2, 3, 0.1, 10)
/* return:
    {
        0: {
            xi: ...,
            yi: ...,
            y_(i+1): ...,
            f(x_i, y_i): ...
        },
        1: {
            xi: ...,
            yi: ...,
            y_(i+1): ...,
            f(x_i, y_i): ...
        },
        ...
        n: {
            xi: ...,
            yi: ...,
            y_(i+1): ...,
            f(x_i, y_i): ...
        }
    }

    */
export function eulerNeYavnii(fStrix, x0, y0, h, n) {
	return wrapper(calculator)(fStrix, x0, y0, h, n)
}


