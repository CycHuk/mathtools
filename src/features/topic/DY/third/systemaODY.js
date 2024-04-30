import {evaluateFunction} from "../../NonlinearEquations/functions";

// func: y' = 10y + x**2
//       x' = 10x + y**3 - 10 + z
// y(2) = 3
// x(0) = 0
// h = 0.1
// x ∊ [2, 3]
// ex: (["y' = 10y + x**2", "x' = 10x + y**3 - 10 + z"], 2, 3, 0.1, 10)
/* return:
    {
        0: {
            x_0: ...,
            y_0: ...,
            z_0: ...,
            x_1: ...,
            y_1: ...,
            z_1: ...,
            k10: ...,
            k20: ...,
            k30: ...,
            k40: ...,
            k11: ...,
            k21: ...,
            k31: ...,
            k41: ...,
        },
        1: {
            x_1: ...,
            y_1: ...,
            z_1: ...,
            x_2: ...,
            y_2: ...,
            z_2: ...,
            k10: ...,
            k20: ...,
            k30: ...,
            k40: ...,
            k11: ...,
            k21: ...,
            k31: ...,
            k41: ...,
        },
        ...
        n: {
            x_n: ...,
            y_n: ...,
            z_n: ...,
            x_n+1: ...,
            y_n+1: ...,
            z_n+1: ...,
            k10: ...,
            k20: ...,
            k30: ...,
            k40: ...,
            k11: ...,
            k21: ...,
            k31: ...,
            k41: ...,
        }
    }

    */
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
        for(let i = 0; i < funcsStrix.length; i++){
            temp[`k1${i}`] = evaluateFunction(funcsStrix[i], x, y, z)
            temp[`k2${i}`] = evaluateFunction(funcsStrix[i], x + h/2, y + temp[`k1${i}`] / 2, z + temp[`k1${i}`] / 2)
            temp[`k3${i}`] = evaluateFunction(funcsStrix[i], x + h/2, y + temp[`k2${i}`] / 2, z + temp[`k2${i}`] / 2)
            temp[`k4${i}`] = evaluateFunction(funcsStrix[i], x, y + temp[`k3${i}`], z + temp[`k3${i}`])
        }
        temp[`x_${j + 1}`] = x = x + h
        temp[`y_${j + 1}`] = y = y + h / 6 * (temp[`k10`] + 2 * temp[`k20`] + 2 * temp[`k30`] + temp[`k40`])
        temp[`z_${j + 1}`] = z = z + h / 6 * (temp[`k11`] + 2 * temp[`k21`] + 2 * temp[`k31`] + temp[`k41`])
        res[j] = temp
    }

    return res
}
