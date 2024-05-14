import { wrapper } from "../iteratorTemplate"; // Импорт объекта wrapper из файла "../iteratorTemplate"
const nerdamer = require('nerdamer/all'); // Импорт библиотеки nerdamer со всеми модулями

// Объявление функции rond для округления значения
export function rond(x) {
    // Если входная строка содержит "/"
    if (x.includes("/")) {
        // Разбиваем строку по "/"
        let a = x.split("/");
        // Возвращаем строку, округленную до двух знаков после запятой
        return String(Math.round(100 * parseFloat(a[0]) / parseFloat(a[1])) / 100);
    }
    // Иначе возвращаем входную строку без изменений
    return x;
}

// Объявление функции calculator для выполнения расчетов
function calculator(fStrix, x_i, y_i, h) {
    let res = {}; // Объект для хранения результатов расчетов
    // Строка для вычисления нового значения функции
    let f = `z=${y_i}+${h}*(${fStrix
        .replaceAll('x', x_i + h)
        .replaceAll('y', 'z')})`;
    try {
        // Вычисляем новое значение функции с помощью библиотеки nerdamer
        f = rond(nerdamer(f).solveFor('z').toString());
    } catch (ex) {
        // В случае ошибки записываем текущее значение y_i и f(x_i, y_i)
        res['y_(i+1)'] = y_i;
        res['f(x_i, y_i)'] = f;
        return res; // Возвращаем результаты расчета
    }
    // Записываем новое значение f(x_i, y_i) и y_(i+1)
    res['f(x_i, y_i)'] = f;
    res['y_(i+1)'] = f.slice(f.indexOf('=') + 1, f.length);
    return res; // Возвращаем результаты расчета
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
export function eulerNeYavnii(fStrix, x0, y0, h, n) {
	return wrapper(calculator)(fStrix, x0, y0, h, n)
}


