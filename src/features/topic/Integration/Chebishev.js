// Импортируем функцию evaluateFunction из папки '../NonlinearEquations/functions'
import { evaluateFunction } from '../NonlinearEquations/functions'

// Функция Чебышёва
function Chebishev(func, a, b, m, n) {
    // Шаг
    const h = (b - a) / n
    // Сумма
    var sum = 0
    // Получаем узлы Чебышёва
    const t = getChebyshevNodes(m)
    // Цикл по узлам
    for (let i = 0; i < n; i++) {
        // Вычисляем xi
        const xi = a + h * i
        // Создаём массив arr из xi и узлов
        const arr = t.map(x => xi + h / 2 + (h / 2) * x)
        // Вычисляем функцию для каждого элемента массива arr и добавляем к сумме
        arr.forEach(x => {
            sum += evaluateFunction(func, x)
        })
    }
    // Возвращаем значение интеграла (половину или треть) на основе m
    if (m == 3) return (sum * h) / 3
    return (sum * h) / 2
}

// Функция для получения узлов Чебышёва
function getChebyshevNodes(m) {
    switch (m) {
        case 2:
            // Возвращаем узлы для m = 2
            return [-0.57735, 0.57735]
        case 3:
            // Возвращаем узлы для m = 3
            return [-0.707107, 0, 0.707107]
        default:
            // Возвращаем пустой массив для других значений m
            return []
    }
}

// Экспортируем функцию Chebishev по умолчанию
export default Chebishev

