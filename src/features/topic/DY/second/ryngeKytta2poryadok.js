import {wrapper} from "../iteratorTemplate";
import {evaluateFunction} from "../../NonlinearEquations/functions";

function calculator(fStrix, x_i, y_i, h){
    let res = {};
    let k1 = evaluateFunction(fStrix, x_i, y_i)
    let k2 = evaluateFunction(fStrix, x_i + h / 2, y_i + h / 2 * k1)
    res["k1"] = k1
    res["k2"] = k2
    res["y_(i+1)"] = y_i + k2
    return res
}

export function ryngeKytta3poryadok(fStrix, x0, y0, h, n){
    return wrapper(calculator)(fStrix, x0, y0, h, n)
}