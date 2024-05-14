// Импортирование функции восстановления оператора возведения в степень
import { restorePowerOperator } from '../NonlinearEquations/functions';
// Импортирование модуля регрессии
const regression = require('regression');

// Функция для аппроксимации точек
function approximatePoints(points, type) {
    // Преобразование точек в формат массива данных
    const data = points.map(point => [point.x, point.y]);

    // Переменная для хранения результата аппроксимации
    let result;

    // Выбор типа функции для аппроксимации
    switch (type) {
        // Линейная функция
        case 'Линейная функция':
            result = regression.linear(data);
            break;
        // Квадратный трехчлен
        case 'Квадратный трехчлен':
            result = regression.polynomial(data, { order: 2 });
            break;
        // Степенная функция
        case 'Степенная функция':
            result = regression.power(data);
            break;
        // Показательная функция
        case 'Показательная функция':
            result = regression.exponential(data);
            break;
        // Логарифмическая функция
        case 'Логарифмическая функция':
            result = regression.logarithmic(data);
            break;
        // Если выбран неизвестный тип аппроксимации, генерация ошибки
        default:
            throw new Error('Выбран неизвестный тип аппроксимации');
    }

    // Возврат результата аппроксимации
    return {
        // Обработанный результат: восстановление оператора возведения в степень и замена символов
        processed: restorePowerOperator(result.string.substring(3))
            .replace(/x/g, '*x')
            .replace(/e/g, '*e')
            .replace(/\(\*/g, '(')
            .replace(/ln\(/g, '*ln('),
        // Оригинальная строка результата аппроксимации
        original: result.string,
    };
}

// Экспорт функции аппроксимации точек
export default approximatePoints;

