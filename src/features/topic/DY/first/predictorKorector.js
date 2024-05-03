import {evaluateFunction} from '../../NonlinearEquations/functions.js'
import {wrapper} from "../iteratorTemplate";
import {calculator as eulerYabnii} from "./eulerYavniy";

function calculator(fStrix, x_i, y_i, h){
    let res = {};
    let y_pred = eulerYabnii(fStrix, x_i, y_i, h)
    let y_corr = eulerYabnii(fStrix, x_i, y_pred, h)
    res["y_(i+1)"] = y_corr
    res["y_pred"] = y_pred
    res["y_corr"] = y_corr
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
            y_pred: ...,
            y_corr: ...,
        },
        1: {
            xi: ...,
            yi: ...,
            y_(i+1): ...,
            y_pred: ...,
            y_corr: ...,
        },
        ...
        n: {
            xi: ...,
            yi: ...,
            y_(i+1): ...,
            y_pred: ...,
            y_corr: ...,
        }
    }

    */
export function predictorKorector(fStrix, x0, y0, h, n){
    return wrapper(calculator)(fStrix, x0, y0, h, n)
}
