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

export function predictorKorector(fStrix, x0, y0, h, n){
    return wrapper(calculator)(fStrix, x0, y0, h, n)
}