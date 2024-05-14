const nerdamer = require('nerdamer/all'); // Подключение библиотеки nerdamer
const gaussElimination = require("../../LinearSystems/methodGauss"); // Подключение функции решения методом Гаусса

// Функция для решения обыкновенных дифференциальных уравнений
// Принимает в качестве параметров: уравнение, начальное и конечное значения x и y, и шаг
function solve(func, x0, xn, y0, yn, h) {
    let n = (xn - x0) / h; // Вычисление количества шагов
    let data = create_table(x0, xn, y0, yn, n, h); // Создание таблицы значений x и y
    let collection_of_funcs_with_constants = insert_known_vars(resolve_derivative_and_make_discrete(func, h), data, n); // Вставка известных переменных в уравнение
    let matrix = to_matrix(collection_of_funcs_with_constants, [...Array(n).keys()].map(x => `y_${x}`)); // Преобразование уравнений в матрицу
    let rights = get_right(collection_of_funcs_with_constants); // Получение правых частей уравнений

    return gaussElimination(matrix, rights); // Решение системы линейных уравнений методом Гаусса
}

// Функция для получения правых частей уравнений
function get_right(funcs) {
    return funcs.map(i => {
        let coeffs = nerdamer.coeffs(nerdamer.convertFromLaTeX(i.replace(/=(.+)/g, (str, g) => `- (${g})`)), "x_123123");
        let find = coeffs.toString().match(/(-?\d+\/(\d+))(?!\w|\*)/);
        if (find) {
            return -parseFloat(rond(find[1]));
        }
        return 0;
    });
}

// Функция для округления числа
function rond(x) {
    if (x.includes("/")) {
        let a = x.split("/");
        return parseFloat(a[0]) / parseFloat(a[1]);
    }
    return x;
}

// Функция для преобразования уравнений в матрицу
function to_matrix(funcs, vars) {
    return funcs.map(func => vars.map(variable => extact_coeff(variable, func)));
}

// Функция для извлечения коэффициентов
function extact_coeff(variable, func) {
    func = func.replace(/=(.+)/g, (str, g) => `- (${g})`);
    let coeffs = nerdamer.coeffs(nerdamer.convertFromLaTeX(func), variable);
    let res = 0;
    coeffs.each((e, i) => {
        if (i === 2) {
            return res = parseFloat(rond(e.toString()));
        }
    });
    return res;
}

// Функция для создания таблицы значений x и y
function create_table(x0, xn, y0, yn, n, h) {
    let data = {
        "x": { 0: x0, n: xn },
        "y": { 0: y0, n: yn }
    };
    for (let i = 1; i < n; i++) {
        data["x"][i] = x0 + h * i;
    }
    return data;
}

// Функция для обработки производной и дискретизации уравнения
function resolve_derivative_and_make_discrete(func, h) {
    return func.replace(/([a-zA-Z])(?!_)/g, (str, g) => `${g}_i`)
               .replace(/(\w)_i''/g, (str, g) => `(${g}_(i-1) - 2*${g}_i + ${g}_(i+1)) / ${h}**2`)
               .replace(/(\w)_i'/g, (str, g) => `(${g}_i - ${g}_(i-1)) / ${h}`);
}

// Функция для вставки известных переменных в уравнение
function insert_known_vars(func, data, n) {
    let matrix = [];
    for (let i = 1; i < n; i++) {
        matrix.push(func.replace(/(\w)_\(i-1\)/g, (str, g) => {
            if (data[g][i - 1]) {
                return data[g][i - 1];
            }
            return `${g}_${i - 1}`;
        }).replace(/(\w)_\(i\+1\)/g, (str, g) => {
            if (data[g][i + 1]) {
                return data[g][i + 1];
            }
            return `${g}_${i + 1}`;
        }).replace(/(\w)_i/g, (str, g) => {
            if (data[g][i]) {
                return data[g][i];
            }
            return `${g}_${i}`;
        }));
    }
    return matrix;
}

console.log(solve("y'' -y'*x=1+x**2", 0, 1, 0, 0, 0.1)); // Пример использования функции solve
module.exports = solve; // Экспорт функции solve для использования в других модулях
