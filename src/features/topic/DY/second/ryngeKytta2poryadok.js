// Импорт функции wrapper из файла '../iteratorTemplate'
import { wrapper } from '../iteratorTemplate';
// Импорт функции evaluateFunction из файла '../../NonlinearEquations/functions'
import { evaluateFunction } from '../../NonlinearEquations/functions';

// Объявление функции calculator для выполнения расчетов
function calculator(fStrix, x_i, y_i, h) {
    let res = {}; // Объект для хранения результатов расчетов
    // Вычисление значения производной k1
    let k1 = evaluateFunction(fStrix, x_i, y_i);
    // Вычисление значения производной k2
    let k2 = evaluateFunction(fStrix, x_i + h / 2, y_i + (h / 2) * k1);
    // Запись значений в объект res
    res['k1'] = k1;
    res['k2'] = k2;
    res['y_(i+1)'] = y_i + k2;
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
            k1: ...,
            k2: ...,
            y_(i+1): ...,
        },
        1: {
            xi: ...,
            yi: ...,
            k1: ...,
            k2: ...,
            y_(i+1): ...,
        },
        ...
        n: {
            xi: ...,
            yi: ...,
            k1: ...,
            k2: ...,
            y_(i+1): ...,
        }
    }

    */
export function ryngeKytta2poryadok(fStrix, x0, y0, h, n) {
	return wrapper(calculator)(fStrix, x0, y0, h, n)
}
