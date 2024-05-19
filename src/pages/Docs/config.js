const topics = [
	{
		topic: 'Математические и численные методы решения задач линейной алгебры',
		methods: [
			{
				name: 'Пример: Метод Крамера  для решения СЛАУ',
				url: './pdf/topic1/method1.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Теория: Метод Гаусса для решения СЛАУ',
				url: './pdf/topic1/method2.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Гаусса для решения СЛАУ',
				url: './pdf/topic1/method2.pdf',
				scrollLevel: 1800,
			},
			{
				name: 'Теория: Метод Гаусса-Жордана для решения СЛАУ',
				url: './pdf/topic1/method3.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Гаусса-Жордана для решения СЛАУ',
				url: './pdf/topic1/method3.pdf',
				scrollLevel: 1400,
			},
			{
				name: 'Теория: Матричный метод для решения СЛАУ',
				url: './pdf/topic1/method4.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Матричный метод для решения СЛАУ',
				url: './pdf/topic1/method4.pdf',
				scrollLevel: 700,
			},
			{
				name: 'Теория: Метод Якоби для решения СЛАУ',
				url: './pdf/topic1/method5.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Якоби для решения СЛАУ',
				url: './pdf/topic1/method5.pdf',
				scrollLevel: 700,
			},
			{
				name: 'Теория: Метод Гаусса Зейделя для решения СЛАУ',
				url: './pdf/topic1/method6.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Гаусса Зейделя для решения СЛАУ',
				url: './pdf/topic1/method6.pdf',
				scrollLevel: 400,
			},
			{
				name: 'Теория: Метод релаксации для решения СЛАУ',
				url: './pdf/topic1/method7.pdf',
				scrollLevel: 0,
			},
		],
	},
	{
		topic: 'Решение нелинейных уравнений и их систем',
		methods: [
			{
				name: 'Теория: Метод половинного деления',
				url: './pdf/topic2/method1.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод половинного деления',
				url: './pdf/topic2/method1.pdf',
				scrollLevel: 3000,
			},
			{
				name: 'Теория: Метод Хорд',
				url: './pdf/topic2/method2.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Хорд',
				url: './pdf/topic2/method2.pdf',
				scrollLevel: 4400,
			},
			{
				name: 'Теория: Метод Золотого сечения',
				url: './pdf/topic2/method3.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Золотого сечения',
				url: './pdf/topic2/method3.pdf',
				scrollLevel: 1800,
			},
			{
				name: 'Теория: Метод Риддерса',
				url: './pdf/topic2/method4.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Риддерса',
				url: './pdf/topic2/method4.pdf',
				scrollLevel: 2000,
			},
			{
				name: 'Теория: Метод Ньютона',
				url: './pdf/topic2/method5.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Ньютона',
				url: './pdf/topic2/method5.pdf',
				scrollLevel: 2700,
			},
			{
				name: 'Теория: Метод Мод. Ньютона',
				url: './pdf/topic2/method6.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Мод. Ньютона',
				url: './pdf/topic2/method6.pdf',
				scrollLevel: 900,
			},
			{
				name: 'Теория: Метод Секущих',
				url: './pdf/topic2/method7.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Секущих',
				url: './pdf/topic2/method7.pdf',
				scrollLevel: 1980,
			},
			{
				name: 'Теория: Метод Мюллера',
				url: './pdf/topic2/method8.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Мюллера',
				url: './pdf/topic2/method8.pdf',
				scrollLevel: 2400,
			},
			{
				name: 'Теория: Метод простых итераций',
				url: './pdf/topic2/method9.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод простых итераций',
				url: './pdf/topic2/method9.pdf',
				scrollLevel: 4124,
			},
		],
	},
	{
		topic: 'Задача обработки экспериментальных данных физических экспериментов',
		methods: [
			{
				name: 'Теория: полином Лагранжа',
				url: './pdf/topic3/method1.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: полином Лагранжа',
				url: './pdf/topic3/method1.pdf',
				scrollLevel: 2000,
			},
			{
				name: 'Теория: Интерполяция',
				url: './pdf/topic3/method2.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Интерполяция',
				url: './pdf/topic3/method2.pdf',
				scrollLevel: 5950,
			},
			{
				name: 'Теория: Аппроксимация',
				url: './pdf/topic3/method3.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Аппроксимация',
				url: './pdf/topic3/method3.pdf',
				scrollLevel: 815,
			},
		],
	},
	{
		topic: 'Численное интегрирование',
		methods: [
			{
				name: 'Теория: Метод Прямоугольника',
				url: './pdf/topic4/method1.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Прямоугольника',
				url: './pdf/topic4/method1.pdf',
				scrollLevel: 1600,
			},
			{
				name: 'Теория: Метод Трапеции',
				url: './pdf/topic4/method2.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Трапеции',
				url: './pdf/topic4/method2.pdf',
				scrollLevel: 400,
			},
			{
				name: 'Теория: Метод Симсона (парабол)',
				url: './pdf/topic4/method3.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Теория: Метод Чебышева',
				url: './pdf/topic4/method4.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Чебышева',
				url: './pdf/topic4/method4.pdf',
				scrollLevel: 2480,
			},
			{
				name: 'Теория: Метод Лежандра-Гаусса',
				url: './pdf/topic4/method5.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод Лежандра-Гаусса',
				url: './pdf/topic4/method5.pdf',
				scrollLevel: 1470,
			},
			{
				name: 'Теория: Разложение в ряд Тейлора',
				url: './pdf/topic4/method6.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Разложение в ряд Тейлора',
				url: './pdf/topic4/method6.pdf',
				scrollLevel: 700,
			},
		],
	},
	{
		topic: 'Численное дифференцирование',
		methods: [
			{
				name: 'Теория: Конечно-разностная аппроксимация',
				url: './pdf/topic5/method1.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Конечно-разностная аппроксимация',
				url: './pdf/topic5/method1.pdf',
				scrollLevel: 770,
			},
			{
				name: 'Теория: Метод неопределенных коэффициентов',
				url: './pdf/topic5/method2.pdf',
				scrollLevel: 0,
			},
			{
				name: 'Пример: Метод неопределенных коэффициентов',
				url: './pdf/topic5/method2.pdf',
				scrollLevel: 544,
			},
		],
	},
	{
		topic: 'Решение ОДУ',
		methods: [
			{
				name: 'Пример: М. конечных разностей',
				url: './pdf/topic6/method1.pdf',
				scrollLevel: 1000,
			},
			{
				name: 'Пример: Явный м. Эйлера',
				url: './pdf/topic6/method2.pdf',
				scrollLevel: 1000,
			},
			{
				name: 'Пример: Неявный м. Эйлера',
				url: './pdf/topic6/method3.pdf',
				scrollLevel: 1000,
			},
			{
				name: 'Пример: Неявная формула второго порядка точности',
				url: './pdf/topic6/method4.pdf',
				scrollLevel: 1000,
			},
			{
				name: 'Пример: М. Эйлера с пересчетом',
				url: './pdf/topic6/method5.pdf',
				scrollLevel: 1000,
			},
			{
				name: 'Пример: Предиктор-корректор',
				url: './pdf/topic6/method6.pdf',
				scrollLevel: 1000,
			},
			{
				name: 'Пример: Рунге-Кутте 2 порядка',
				url: './pdf/topic6/method7.pdf',
				scrollLevel: 1000,
			},
		],
	},
]

export default topics
