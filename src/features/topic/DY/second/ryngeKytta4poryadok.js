import { wrapper } from "../iteratorTemplate"; // Подключение необходимых модулей или библиотек
import { evaluateFunction } from "../../NonlinearEquations/functions"; // Импорт функции для вычисления значения функции

function calculator(fStrix, x_i, y_i, h) { // Объявление функции calculator с параметрами fStrix (функция правой части дифференциального уравнения), x_i (начальное значение x), y_i (начальное значение y), h (шаг)
    let res = {}; // Объявление объекта для хранения результатов
    let k1 = evaluateFunction(fStrix, x_i, y_i); // Вычисление k1
    let k2 = evaluateFunction(fStrix, x_i + h / 2, y_i + h / 2 * k1); // Вычисление k2
    let k3 = evaluateFunction(fStrix, x_i + h / 2, y_i + h / 2 * k2); // Вычисление k3
    let k4 = evaluateFunction(fStrix, x_i + h, y_i + h * k3); // Вычисление k4
    res["k1"] = k1; // Запись k1 в объект результатов
    res["k2"] = k2; // Запись k2 в объект результатов
    res["k3"] = k3; // Запись k3 в объект результатов
    res["k4"] = k4; // Запись k4 в объект результатов
    res["y_(i+1)"] = y_i + h / 6 * (k1 + 2 * k2 + 2 * k3 + k4); // Вычисление значения y на следующем шаге с использованием метода Рунге-Кутты
    return res; // Возвращение объекта результатов
} // Завершение объявления функции


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
