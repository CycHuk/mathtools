// Импортируем функцию evaluateFunction из папки '../NonlinearEquations/functions'
import { evaluateFunction } from '../NonlinearEquations/functions'

// Функция для коэффициентов Лежандра
function LejandrKoef(m) {
    // Массивы координат и коэффициентов для m = 2 и m = 3
    const lej2 = [
        [-0.57735027, 0.57735027],
        [1, 1],
    ]
    const lej3 = [
        [-0.77459667, 0, 0.77459667],
        [0.55555556, 0.88888889, 0.55555556],
    ]
    // Возвращаем нужный массив в зависимости от значения m
    if (m === 2) return lej2
    return lej3
}

// Функция для метода Гаусса с использованием коэффициентов Лежандра
function LejandrGauss(func, a, b, m, n) {
    // Вычисляем шаг
    const h = (b - a) / n
    // Инициализируем сумму
    let sum = 0
    // Создаём массив точек
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(a + h * i)
    }
    // Получаем коэффициенты Лежандра для m
    const lejX = LejandrKoef(m)
    // Вычисляем интеграл
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // Вычисляем x и c для каждого элемента
            const x = arr[i] + h / 2 + (h / 2) * lejX[0][j]
            const c = lejX[1][j]
            // Добавляем значение функции, взятое с учётом коэффициента
            sum += c * evaluateFunction(func, x)
        }
    }
    // Возвращаем результат интегрирования
    return (sum * h) / 2
}

// Экспортируем функцию LejandrGauss по умолчанию
export default LejandrGauss

