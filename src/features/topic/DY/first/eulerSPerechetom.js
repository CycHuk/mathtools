// Импорт функции evaluateFunction из файла '../../NonlinearEquations/functions.js'
import { evaluateFunction } from '../../NonlinearEquations/functions.js';
// Импорт объекта wrapper из файла "../iteratorTemplate"
import { wrapper } from "../iteratorTemplate";

// Объявление функции calculator для выполнения расчетов
function calculator(fStrix, x_i, y_i, h){
    let res = {}; // Объект для хранения результатов расчетов
    let f = evaluateFunction(fStrix, x_i, y_i); // Вычисление значения функции f(x_i, y_i)
    let yStrix = y_i + h * f; // Вычисление значения новой переменной yStrix
    let f2 = evaluateFunction(fStrix, x_i + h, yStrix); // Вычисление значения функции f(x_i + h, yStrix)
    // Запись значений в объект res
    res["yStix"] = yStrix;
    res["y_(i+1)"] = y_i + h / 2 * (f + f2);
    res["f(x_i, y_i)"] = f;
    return res; // Возвращение результатов расчета
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
            f(x_i, y_i): ...
        },
        1: {
            xi: ...,
            yi: ...,
            y_(i+1): ...,
            f(x_i, y_i): ...
        },
        ...
        n: {
            xi: ...,
            yi: ...,
            y_(i+1): ...,
            f(x_i, y_i): ...
        }
    }

    */
export function eulerSPerechetom(fStrix, x0, y0, h, n){
    return wrapper(calculator)(fStrix, x0, y0, h, n)
}
