// Импорт функции rond из файла "./eulerNeYavnii"
import { rond } from "./eulerNeYavnii";
// Импорт объекта wrapper из файла "../iteratorTemplate"
import { wrapper } from "../iteratorTemplate";

const nerdamer = require('nerdamer/all');

// Объявление функции eulerYabnii для выполнения метода Эйлера (явный)
function eulerYabnii(fStrix, x_i, y_i, h){
    let res = {}; // Объект для хранения результатов расчетов
    // Вычисление значения функции f(x_i, y_i) с помощью функции rond
    let f = rond(nerdamer(fStrix).evaluate({x: x_i, y: y_i}).toString());
    // Запись значений в объект res
    res["y_(i+1)"] = y_i + h * f;
    res["f(x_i, y_i)"] = f;
    return res; // Возвращение результатов расчета
}

// Объявление функции calculator для выполнения расчетов
function calculator(fStrix, x_i, y_i, h){
    let res = {}; // Объект для хранения результатов расчетов
    // Вычисление предикторного значения y_pred с помощью метода Эйлера (явный)
    let y_pred = eulerYabnii(fStrix, x_i, y_i, h);
    // Вычисление скорректированного значения y_corr с помощью метода Эйлера (явный)
    let y_corr = eulerYabnii(fStrix, x_i, y_pred["y_(i+1)"], h);
    // Запись значений в объект res
    res["y_(i+1)"] = y_corr["y_(i+1)"];
    res["y_pred"] = y_pred["y_(i+1)"];
    res["y_corr"] = res["y_(i+1)"];
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

