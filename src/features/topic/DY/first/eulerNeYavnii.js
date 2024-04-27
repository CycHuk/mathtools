import {evaluateFunction} from '../../NonlinearEquations/functions.js'
const nerdamer = require('nerdamer/all')
import {wrapper} from "../iteratorTemplate";

function calculator(fStrix, x_i, y_i, h){
    let res = {};
    let f = `z = ${y_i} + ${h} * ${fStrix.replaceAll("x", x_i + h).replaceAll("y", "z")}`;
    f = nerdamer(f).solveFor("z")
    res["y_(i+1)"] = f.slice(f.indexOf("=") + 1, f.length)
    res["f(x_i, y_i)"] = f
    return res
}

export function eulerNeYavnii(fStrix, x0, y0, h, n){
    return wrapper(calculator)(fStrix, x0, y0, h, n)
}