import {evaluateFunction} from '../../NonlinearEquations/functions.js'
import {wrapper} from "../iteratorTemplate";

export function calculator(fStrix, x_i, y_i, h){
    let res = {};
    let f = evaluateFunction(fStrix, x_i, y_i);
    res["y_(i+1)"] = y_i + h * f
    res["f(x_i, y_i)"] = f
    return res
}

export function eulerYavniy(fStrix, x0, y0, h, n){
    return wrapper(calculator)(fStrix, x0, y0, h, n)
}
