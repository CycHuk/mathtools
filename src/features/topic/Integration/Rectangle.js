// Импортируем функцию evaluateFunction из папки '../NonlinearEquations/functions'
import { evaluateFunction } from '../NonlinearEquations/functions'

// Функция для численного интегрирования методом прямоугольников
function integrateRectangular(expr, lowerBound, upperBound, step, method) {
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

    // Выбираем метод интегрирования на основе значения method
    switch (method) {
        case 'left':
            // Метод левых прямоугольников
            for (let i = a; i < b; i += h) {
                const y = evaluate(expr, i)
                // Добавляем площадь прямоугольника и значения функции в массив
                integral += y * h
                for (let x = i; x < i + h; x += 0.01) {
                    values.push({ x: x.toFixed(2), y })
                }
            }
            break
        case 'right':
            // Метод правых прямоугольников
            for (let i = a; i < b; i += h) {
                const y = evaluate(expr, i + h)
                integral += y * h
                for (let x = i; x < i + h; x += 0.01) {
                    values.push({ x: x.toFixed(2), y })
                }
            }
            break
        case 'middle':
            // Метод средних прямоугольников
            for (let i = a + h / 2; i < b; i += h) {
                const y = evaluate(expr, i)
                integral += y * h
                for (let x = i - h / 2; x < i + h / 2; x += 0.01) {
                    values.push({ x: x.toFixed(2), y })
                }
            }
            break
        default:
            // В случае неподдерживаемого метода выводим ошибку и возвращаем null
            console.error('Unsupported method')
            return null
    }

    // Возвращаем объект с вычисленным интегралом и массивом значений
    return { integral, values }
}

// Экспортируем функцию integrateRectangular по умолчанию
export default integrateRectangular

