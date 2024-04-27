import {evaluateFunction} from "../../NonlinearEquations/functions";

export function solver(funcsStrix, x0, y0, z0, h, n){
    let res = {}
    let x = x0
    let y = y0
    let z = z0

    for (let j = 0; j < n; j++){
        let temp = {}
        temp[`x_${j}`] = x
        temp[`y_${j}`] = y
        temp[`z_${j}`] = z
        for(let i = 0; i < funcs.length; i++){
            temp[`k1${i}`] = evaluateFunction(funcs[i], x, y, z)
            temp[`k2${i}`] = evaluateFunction(funcs[i], x + h/2, y + temp[`k1${i}`] / 2, z + temp[`k1${i}`] / 2)
            temp[`k3${i}`] = evaluateFunction(funcs[i], x + h/2, y + temp[`k2${i}`] / 2, z + temp[`k2${i}`] / 2)
            temp[`k4${i}`] = evaluateFunction(funcs[i], x, y + temp[`k3${i}`], z + temp[`k3${i}`])
        }
        temp[`x_${j + 1}`] = x = x + h
        temp[`y_${j + 1}`] = y = y + h / 6 * (temp[`k10`] + 2 * temp[`k20`] + 2 * temp[`k30`] + temp[`k40`])
        temp[`z_${j + 1}`] = z = z + h / 6 * (temp[`k11`] + 2 * temp[`k21`] + 2 * temp[`k31`] + temp[`k41`])
        res[j] = temp
    }

    return res
}