import {evaluateFunction} from '../../NonlinearEquations/functions.js'
import {wrapper} from "../iteratorTemplate";

function calculator(fStrix, x_i, y_i, h){
    let res = {};
    let f = evaluateFunction(fStrix, x_i, y_i);
    let yStrix = y_i + h * f
    let f2 = evaluateFunction(fStrix, x_i + h, yStrix)
    res["yStix"] = yStrix
    res["y_(i+1)"] = y_i + h / 2 * (f + f2)
    res["f(x_i, y_i)"] = f
    return res
}

export function eulerSPerechetom(fStrix, x0, y0, h, n){
    return wrapper(calculator)(fStrix, x0, y0, h, n)
}