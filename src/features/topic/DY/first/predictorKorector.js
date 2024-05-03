import {rond} from "./eulerNeYavnii";
import {wrapper} from "../iteratorTemplate";

const nerdamer = require('nerdamer/all')


function eulerYabnii(fStrix, x_i, y_i, h){
    let res = {};
    let f = rond(nerdamer(fStrix).evaluate({x: x_i, y: y_i}).toString())
    res["y_(i+1)"] = y_i + h * f
    res["f(x_i, y_i)"] = f
    return res
}


function calculator(fStrix, x_i, y_i, h){
    let res = {};
    let y_pred = eulerYabnii(fStrix, x_i, y_i, h)
    let y_corr = eulerYabnii(fStrix, x_i, y_pred["y_(i+1)"], h)
    res["y_(i+1)"] = y_corr["y_(i+1)"]
    res["y_pred"] = y_pred["y_(i+1)"]
    res["y_corr"] = res["y_(i+1)"]
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

console.log(predictorKorector("10*y+x**2", 1, 0, 0.1, 10))

