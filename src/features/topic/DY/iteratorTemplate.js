// calculator takes fStrix, x_i, y_i, h return y_(i+1) and addition information
// Объявление экспортируемой функции wrapper
export function wrapper(calculator){
    // Возвращение функции common
    return function common(fStrix, x0, y0, h, n){
        let xi = x0; // Инициализация переменной xi значением x0
        let yi = y0; // Инициализация переменной yi значением y0

        let res = {}; // Объект для хранения результатов расчетов
        
        // Цикл для выполнения расчетов
        for(let i = 0; i <= n; i++){
            // Выполнение расчетов с помощью переданной функции calculator
            let calculated = calculator(fStrix, xi, yi, h);

            // Запись результатов расчетов в объект res
            res[i] = {"xi": xi, "yi": yi, ...calculated};

            xi += h; // Изменение значения xi на шаг h
            yi = calculated["y_(i+1)"]; // Обновление значения yi
        }
        // Возвращение объекта res с результатами расчетов
        return res;
    }
}

