// Импортируем функции evaluateFunction и restorePowerOperator из папки '../NonlinearEquations/functions'
import { evaluateFunction, restorePowerOperator } from '../NonlinearEquations/functions'
// Импортируем функцию Lagrange из папки '../PhysDataAnalysis/Lagrange'
import Lagrange from '../PhysDataAnalysis/Lagrange'

// Функция для численного интегрирования методом Симпсона
function integrateSimpson(expr, lowerBound, upperBound, step) {
    // Вычисляем шаг
    step = (upperBound - lowerBound) / step
    // Функция для вычисления значения выражения expr в точке x
    function evaluate(expr, x) {
        return evaluateFunction(expr, x)
    }

    // Преобразуем границы интегрирования и шаг в числа
    const a = parseFloat(lowerBound)
    const b = parseFloat(upperBound)
    const h = parseFloat(step)

    // Инициализируем интеграл и массив для хранения значений функции
    let integral = 0
    const values = []

    // Цикл для вычисления интеграла
    for (let x = a; x < b; x += h) {
        const x0 = x
        const x1 = x + h / 2
        const x2 = x + h

        // Вычисляем значения функции в трёх точках
        const y0 = evaluate(expr, x0)
        const y1 = evaluate(expr, x1)
        const y2 = evaluate(expr, x2)

        // Формируем массивы x и y для метода Лагранжа
        const xValues = [x0, x1, x2]
        const yValues = [y0, y1, y2]

        // Получаем функцию интерполяции методом Лагранжа
        const func = restorePowerOperator(Lagrange(xValues, yValues))

        // Добавляем значения функции в массив
        for (let newX = x; newX < x + h; newX += 0.01) {
            values.push({ x: newX.toFixed(2), y: evaluate(func, newX) })
        }

        // Вычисляем приращение интеграла с помощью формулы Симпсона
        integral += ((y0 + 4 * y1 + y2) * h) / 6
    }

    // Возвращаем объект с вычисленным интегралом и массивом значений
    return { integral, values }
}

// Экспортируем функцию integrateSimpson по умолчанию
export default integrateSimpson

