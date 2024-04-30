import {wrapper} from "../iteratorTemplate";
import {evaluateFunction} from "../../NonlinearEquations/functions";

function calculator(fStrix, x_i, y_i, h){
    let res = {};
    let k1 = evaluateFunction(fStrix, x_i, y_i)
    let k2 = evaluateFunction(fStrix, x_i + h / 2, y_i + h / 2 * k1)
    let k3 = evaluateFunction(fStrix, x_i + h / 2, y_i + h / 2 * k2)
    let k4 = evaluateFunction(fStrix, x_i + h, y_i + h * k3)
    res["k1"] = k1
    res["k2"] = k2
    res["k3"] = k3
    res["k4"] = k4
    res["y_(i+1)"] = y_i + h / 6 * (k1 + 2 * k2 + 2 * k3 + k4)
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
            k1: ...,
            k2: ...,
            k3: ...,
            k4: ...,
            y_(i+1): ...,
        },
        1: {
            xi: ...,
            yi: ...,
            k1: ...,
            k2: ...,
            k3: ...,
            k4: ...,
            y_(i+1): ...,
        },
        ...
        n: {
            xi: ...,
            yi: ...,
            k1: ...,
            k2: ...,
            k3: ...,
            k4: ...,
            y_(i+1): ...,
        }
    }

    */
export function ryngeKytta4poryadok(fStrix, x0, y0, h, n){
    return wrapper(calculator)(fStrix, x0, y0, h, n)
}
