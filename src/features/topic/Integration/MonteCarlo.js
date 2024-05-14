// Импортируем функцию evaluateFunction из папки '../NonlinearEquations/functions'
import { evaluateFunction } from '../NonlinearEquations/functions'

// Функция Монте-Карло для вычисления интеграла
function MonteCarlo(func, a, b, n) {
    // Инициализируем сумму
    let sum = 0
    // Вычисляем шаг
    const h = (b - a) / n
    // Массив для хранения точек
    const points = []

    // Цикл для генерации случайных точек и вычисления значений функции в них
    for (let i = 0; i < n; i++) {
        // Генерируем случайную точку в интервале [a, b]
        const x = a + Math.random() * (b - a)
        // Вычисляем значение функции в этой точке
        const y = evaluateFunction(func, x)
        // Добавляем точку и значение функции в массив
        points.push({ x, y })
        // Увеличиваем сумму на значение функции в текущей точке
        sum += y
    }

    // Возвращаем объект с вычисленным интегралом и массивом точек
    return { integral: sum * h, points }
}

// Экспортируем функцию MonteCarlo по умолчанию
export default MonteCarlo

